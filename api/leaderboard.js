// Vercel Serverless Function for leaderboard auto-publish
// Deploy to: your-project.vercel.app/api/leaderboard

const DEFAULT_BRANCH = "main";
const DEFAULT_PATH = "leaderboard.json";
const MAX_ENTRIES = 100;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

function cors() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}

function cleanText(value, fallback = "") {
  return String(value ?? fallback).trim().slice(0, 160);
}

function normalizeNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function normalizeEntry(entry) {
  const now = new Date().toISOString();
  return {
    id: cleanText(entry.id, `run-${Date.now().toString(36)}`),
    name: cleanText(entry.name, "Player").slice(0, 32) || "Player",
    score: Math.max(0, Math.floor(normalizeNumber(entry.score, 0))),
    durationMs: Math.max(0, Math.floor(normalizeNumber(entry.durationMs, 0))),
    seconds: Math.max(0, Math.floor(normalizeNumber(entry.seconds, 0))),
    minutes: Math.max(0, normalizeNumber(entry.minutes, 0)),
    attempts: Math.max(1, Math.floor(normalizeNumber(entry.attempts, 1))),
    outcome: cleanText(entry.outcome, "unknown"),
    deviceId: cleanText(entry.deviceId, "unknown"),
    deviceModel: cleanText(entry.deviceModel, "unknown"),
    chromeVersion: cleanText(entry.chromeVersion, "unknown"),
    ip: cleanText(entry.ip, "unknown"),
    endedAt: cleanText(entry.endedAt, now) || now,
    updatedAt: now
  };
}

function sortEntries(entries) {
  return entries.slice().sort((a, b) =>
    (Number(b.score) || 0) - (Number(a.score) || 0) ||
    (Number(a.durationMs) || 0) - (Number(b.durationMs) || 0) ||
    Date.parse(b.endedAt || b.updatedAt || 0) - Date.parse(a.endedAt || a.updatedAt || 0)
  );
}

function keyOf(entry) {
  return [entry.deviceId || "unknown", entry.name || "player", entry.ip || "unknown"]
    .map(value => String(value).trim().toLowerCase() || "unknown")
    .join("|");
}

function isBetter(next, current) {
  const nextScore = Number(next.score) || 0;
  const currentScore = Number(current.score) || 0;
  if (nextScore !== currentScore) return nextScore > currentScore;
  const nextTime = Number(next.durationMs) || 0;
  const currentTime = Number(current.durationMs) || 0;
  if (nextTime !== currentTime) return nextTime < currentTime;
  return Date.parse(next.endedAt || next.updatedAt || 0) > Date.parse(current.endedAt || current.updatedAt || 0);
}

function mergeEntries(entries, nextEntry) {
  const merged = new Map();
  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    merged.set(keyOf(entry), entry);
  }
  const key = keyOf(nextEntry);
  const current = merged.get(key);
  if (!current || isBetter(nextEntry, current)) {
    merged.set(key, {
      ...current,
      ...nextEntry,
      attempts: Math.max(Number(current?.attempts) || 1, Number(nextEntry.attempts) || 1)
    });
  } else {
    merged.set(key, {
      ...current,
      attempts: Math.max(Number(current.attempts) || 1, Number(nextEntry.attempts) || 1),
      lastAttemptAt: nextEntry.endedAt || nextEntry.updatedAt
    });
  }
  return sortEntries([...merged.values()]).slice(0, MAX_ENTRIES);
}

function githubConfig() {
  return {
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    token: process.env.GITHUB_TOKEN,
    branch: process.env.GITHUB_BRANCH || DEFAULT_BRANCH,
    path: process.env.LEADERBOARD_PATH || DEFAULT_PATH
  };
}

function githubApiUrl(cfg) {
  return `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${encodeURIComponent(cfg.path)}`;
}

function utf8ToBase64(text) {
  return Buffer.from(text, "utf8").toString("base64");
}

async function loadLeaderboard(cfg) {
  if (!cfg.owner || !cfg.repo || !cfg.token) throw new Error("Missing GitHub environment variables");
  const headers = {
    Authorization: `Bearer ${cfg.token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "project-novel-leaderboard-api"
  };
  const res = await fetch(`${githubApiUrl(cfg)}?ref=${encodeURIComponent(cfg.branch)}`, { headers });
  if (res.status === 404) return { sha: null, data: { updatedAt: "", entries: [] } };
  if (!res.ok) throw new Error(`GitHub GET ${res.status}`);
  const body = await res.json();
  const text = Buffer.from(body.content.replace(/\s/g, ""), "base64").toString("utf8");
  const data = JSON.parse(text || "{}");
  return { sha: body.sha, data: { updatedAt: data.updatedAt || "", entries: Array.isArray(data.entries) ? data.entries : [] } };
}

async function saveLeaderboard(cfg, sha, payload, attempts = 3) {
  const headers = {
    Authorization: `Bearer ${cfg.token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
    "User-Agent": "project-novel-leaderboard-api"
  };
  const body = {
    message: "chore: auto update leaderboard",
    content: utf8ToBase64(JSON.stringify(payload, null, 2)),
    branch: cfg.branch
  };
  if (sha) body.sha = sha;
  const res = await fetch(githubApiUrl(cfg), { method: "PUT", headers, body: JSON.stringify(body) });
  if (res.status === 409 && attempts > 1) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const fresh = await loadLeaderboard(cfg);
    const merged = {
      updatedAt: new Date().toISOString(),
      entries: mergeEntries(fresh.data.entries, payload.entries[payload.entries.length - 1] || {})
    };
    return saveLeaderboard(cfg, fresh.sha, merged, attempts - 1);
  }
  if (!res.ok) throw new Error(`GitHub PUT ${res.status}: ${await res.text()}`);
}

export default async function handler(request) {
  if (request.method === "OPTIONS") return cors();

  const url = new URL(request.url);
  const cfg = githubConfig();

  try {
    if (request.method === "GET" && url.pathname === "/api/leaderboard") {
      const { data } = await loadLeaderboard(cfg);
      return json(data);
    }

    if (request.method === "POST" && url.pathname === "/api/leaderboard") {
      const body = await request.json();
      const entry = normalizeEntry(body.entry || body);
      const { sha, data } = await loadLeaderboard(cfg);
      const payload = {
        updatedAt: new Date().toISOString(),
        entries: mergeEntries(data.entries, entry)
      };
      await saveLeaderboard(cfg, sha, payload);
      return json(payload);
    }

    return json({ error: "Not found" }, 404);
  } catch (err) {
    return json({ error: err.message || "API error" }, 500);
  }
}

// Vercel Edge Config (optional)
export const config = {
  runtime: "nodejs"
};

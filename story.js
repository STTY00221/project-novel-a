/* ============================================
   📖 Story Script — ตั้งค่าเนื้อเรื่องทั้งหมดที่นี่
   ============================================

   📌 คู่มือตั้งค่าแต่ละ Scene:
   ──────────────────────────────────────────────
   "sceneId": {
       name:      "ชื่อตัวละคร",              // ชื่อที่แสดงใน name tag
       text:      "บทพูด...",                  // ข้อความที่แสดง (รองรับ \n ขึ้นบรรทัดใหม่)
       bg:        "url_รูปพื้นหลัง",            // URL รูป background (หรือ "null" ถ้าไม่เปลี่ยน)
       sprite:    "url_รูปตัวละคร",             // URL รูป sprite (หรือ "null" ถ้าไม่แสดง)
       position:  "center",                    // ตำแหน่งตัวละคร: "left" | "center" | "right"
       speaking:  true,                        // animation เด้งขึ้นลงตอนพูด: true | false
       typeSpeed: 40,                          // ความเร็วพิมพ์ข้อความ (ms ต่อตัวอักษร) ยิ่งน้อยยิ่งเร็ว
       next:      "sceneId_ถัดไป",              // ไป scene ไหนต่อ (null = จบ)
       choices: [                               // ตัวเลือก (ถ้ามี ไม่ต้องใส่ next)
           { text: "ข้อความตัวเลือก", nextId: "sceneId" }
       ]
   }

   💡 ค่า Default (ไม่ต้องใส่ก็ได้ ระบบจะใช้ค่านี้):
       position:  "center"
       speaking:  true
       typeSpeed: 40
   ──────────────────────────────────────────────
*/

const storyScript = {

    "1": {
        name: "Creator",
        text: "ไงพวกเองคนตกคณิตใช่ไหมละ...ถึงได้มาเล่นเกมนี้\n(ไม่มี save นะ) ",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 35,
        next: "Ready?"
    },

    "2": {
        name: "Creator",
        text: "เองพร้อมแล้วเพราะฉนั้นขอทวนก่อนเรื่องหนึ่ง",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 30,
        next: "3"
    },

    "3": {
        name: "Creator",
        text: "เกมนี้้มีจำนวณทั้งหมด 50 ข้อในการทำให้เสร็จ\nและมีความลับหามันให้เจอละ",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 35,
        next: "c1"
    },

    "start": {
        name: "",
        text: "กดเพื่อเล่นใหม่",
        bg: "image/bg.png",
        sprite: "null",
        speaking: false,
        next: "1"
    },

    "Ready?": {
        name: "Creator",
        text: "แล้วคิดว่า เองพร้อมจะเล่นเกมนี้ยัง...",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        typeSpeed: 30,
        choices: [
            { text: "พร้อมโว้ยยย!!", nextId: "2" },
            { text: "ลองคิดดูก่อน", nextId: "start" },
            { text: "ไม่พร้อมอะ...", nextId: "start" },
        ]
    },

    "s1": {
        name: "???",
        text: "เอ๊ะ... เองเจอมาได้ยังไง?",
        bg: "image/bg.png",
        position: "center",
        speaking: true,
        typeSpeed: 50,
        next: "s2"
    },

    "s2": {
        name: "???",
        text: "ที่นี่ไม่ควรมีใครเข้ามาได้นะ...",
        bg: "image/bg.png",
        position: "left",
        speaking: true,
        typeSpeed: 55,
        next: "s3"
    },

    "s3": {
        name: "???",
        text: "แต่เมื่อเองมาถึงแล้ว...\nก็ขอบอกอะไรให้ฟังหน่อย",
        bg: "image/bg.png",
        position: "center",
        speaking: true,
        typeSpeed: 45,
        next: "s4"
    },

    "s4": {
        name: "???",
        text: "ความลับของเกมนี้คือ...\nไม่ใช่แค่เรื่องคณิตหรอก",
        bg: "image/bg.png",
        position: "right",
        speaking: true,
        typeSpeed: 60,
        next: "s5"
    },

    "s5": {
        name: "???",
        text: "ยินดีด้วยนะ ที่เจอฉากลับ!\nเก็บมันเป็นความลับแล้วกัน...",
        bg: "image/bg.png",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        next: "Ready?"
    },

    "c1": {
        name: "Mr",
        text: "",
        bg: "image/bg.png",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
        ]
    },

    "c2": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c3": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c4": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c5": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c6": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c7": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c8": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c9": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c10": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c11": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c12": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c13": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c14": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c15": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c16": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c17": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c18": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c19": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c20": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c21": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c22": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c23": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c24": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c25": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c26": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c27": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c28": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c29": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c30": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c31": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c32": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c33": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c34": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c35": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c36": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c37": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c38": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c39": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c40": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c41": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c42": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c43": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c44": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c45": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c46": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c47": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c48": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c49": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "c50": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40
    }

};

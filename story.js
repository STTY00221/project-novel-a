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

    // ============================================
    // 🏠 หน้าเริ่มต้น
    // ============================================
    "start": {
        name: "",
        text: "กดเพื่อเล่นใหม่",
        bg: "null",
        sprite: "null",
        speaking: false,
        next: "1"
    },

    // ============================================
    // 📖 เนื้อเรื่อง
    // ============================================
    "1": {
        name: "Creator",
        text: "ไงพวกเองคนตกคณิตใช่ไหมละ...ถึงได้มาเล่นเกมนี้\n(ไม่มี save นะ) ",
        bg: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200",
        sprite: "image/creator.png",
        position: "center",          // ✅ ตัวละครอยู่ซ้าย
        speaking: true,            // ✅ เด้งตอนพูด
        typeSpeed: 35,             // ✅ ความเร็วพิมพ์
        next: "Ready?"
    },

    "Ready?": {
        name: "Creator",
        text: "แล้วคิดว่า เองพร้อมจะเล่นเกมนี้ยัง...",
        sprite: "image/creator.png",
        position: "left",
        typeSpeed: 30,
        choices: [
            { text: "พร้อมโว้ยยย!!", nextId: "2" },
            { text: "ลองคิดดูก่อน", nextId: "start" },
            { text: "ไม่พร้อมอะ...", nextId: "start" }
        ]
    },

    "2": {
        name: "Creator",
        text: "เองพร้อมแล้วเพราะฉนั้นขอทวนก่อนเรื่องหนึ่ง",
        sprite: "image/creator.png",
        position: "center",
        speaking: true,    // ✅ ย้ายไปขวา (เปลี่ยนตำแหน่งได้!)
        typeSpeed: 30,
        next: "3"
    },

    "3": {
        name: "Creator",
        text: "เกมนี้้มีจำนวณทั้งหมด 50 ข้อในการทำให้เสร็จ\nและมีความลับหามันให้เจอละ",
        sprite: "image/creator.png",
        position: "center",
        speaking: true,
        typeSpeed: 35,     // ✅ อยู่ตรงกลาง
        next: "end_demo"
    },

    // ============================================
    // 🔚 จบ Demo
    // ============================================
    "end_demo": {
        name: "ระบบ",
        text: "ขอบคุณที่ทดลองเล่นระบบตัวเลือก! สนใจเขียนเนื้อเรื่องต่อไหม?",
        sprite: "null",
        speaking: false,
        next: null                  // null = จบเรื่อง
    },

    // ============================================
    // 🔒 ฉากลับ — กดรูปตัวละคร 5 ครั้งตอน scene "1"
    // ============================================
    "s1": {
        name: "???",
        text: "เอ๊ะ... เองเจอมาได้ยังไง?",
        sprite: "image/creator.png",
        position: "center",
        speaking: true,
        typeSpeed: 50,
        next: "s2"
    },

    "s2": {
        name: "???",
        text: "ที่นี่ไม่ควรมีใครเข้ามาได้นะ...",
        position: "left",
        speaking: true,
        typeSpeed: 55,
        next: "s3"
    },

    "s3": {
        name: "???",
        text: "แต่เมื่อเองมาถึงแล้ว...\nก็ขอบอกอะไรให้ฟังหน่อย",
        position: "center",
        speaking: true,
        typeSpeed: 45,
        next: "s4"
    },

    "s4": {
        name: "???",
        text: "ความลับของเกมนี้คือ...\nไม่ใช่แค่เรื่องคณิตหรอก",
        position: "right",
        speaking: true,
        typeSpeed: 60,
        next: "s5"
    },

    "s5": {
        name: "???",
        text: "ยินดีด้วยนะ ที่เจอฉากลับ!\nเก็บมันเป็นความลับแล้วกัน...",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        next: "Ready?"             // กลับไปเรื่องหลัก
    }
};

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
        next: "2"
    },

    "2": {
        name: "Creator",
        text: "แล้วคิดว่า เองพร้อมจะเล่นเกมนี้ยัง...",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "left",
        typeSpeed: 30,
        choices: [
            { text: "พร้อมโว้ยยย!!", nextId: "3" },
            { text: "ลองคิดดูก่อน", nextId: "start" },
            { text: "ไม่พร้อมอะ...", nextId: "start" },
        ]
    },

    "3": {
        name: "Creator",
        text: "เองพร้อมแล้วเพราะ ฉะนั้นขอทวนก่อนเรื่องหนึ่ง",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 30,
        next: "4"
    },

    "4": {
        name: "Creator",
        text: "เกมนี้มีจำนวณทั้งหมด 50 ข้อในการทำให้เสร็จ จะไม่มีข้อไหนที่ซ้ำกัน\nและมีความลับหามันให้เจอละ",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 35,
        next: "5"
    },

    "5": {
        name: "Creator",
        text: "อ่อ...อีกเรื่องหนึ่งตอบผิดก็แค่ กลับไปทำใหม่ขอให้โชคดีละ",
        bg: "image/bg.png",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        next: "random"
    },

    "start": {
        name: "",
        text: "กดเพื่อเล่นใหม่",
        bg: "image/bg.png",
        sprite: "null",
        speaking: false,
        next: "1"
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
        name: "Mr.EAKAPOT",
        text: "ข้อใดคือความหมายของสถิติศาสตร์",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การวาดภาพ", nextId: "lose" },
            { text: "การรวบรวมและวิเคราะห์ข้อมูล", nextId: "random" },
            { text: "การทดลองวิทยาศาสตร์", nextId: "lose" },
            { text: "การเขียนโปรแกรม", nextId: "lose" },
        ]
    },

    "c2": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลหมายถึงอะไร",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เรื่องราวในนิยาย", nextId: "lose" },
            { text: "ข้อเท็จจริงที่รวบรวมไว้", nextId: "random" },
            { text: "เพลงที่ฟัง", nextId: "lose" },
            { text: "รูปภาพตกแต่ง", nextId: "lose" },
        ]
    },

    "c3": {
        name: "Mr.EAKAPOT",
        text: "สถิติศาสตร์ช่วยในเรื่องใดมากที่สุด",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การเดาสุ่ม", nextId: "lose" },
            { text: "การตัดสินใจจากข้อมูล", nextId: "random" },
            { text: "การเล่นกีฬา", nextId: "lose" },
            { text: "การร้องเพลง", nextId: "lose" },
        ]
    },

    "c4": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นตัวอย่างของข้อมูลเชิงปริมาณ",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "สีเสื้อ", nextId: "lose" },
            { text: "เพศ", nextId: "lose" },
            { text: "น้ำหนัก", nextId: "random" },
            { text: "ศาสนา", nextId: "lose" },
        ]
    },

    "c5": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงคุณภาพ",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "อายุ", nextId: "lose" },
            { text: "ส่วนสูง", nextId: "lose" },
            { text: "คะแนนสอบ", nextId: "lose" },
            { text: "สีตา", nextId: "random" },
        ]
    },

    "c6": {
        name: "Mr.EAKAPOT",
        text: "การเก็บข้อมูลมีประโยชน์อย่างไร",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ทำให้เสียเวลา", nextId: "lose" },
            { text: "ใช้ในการวิเคราะห์", nextId: "random" },
            { text: "ใช้ตกแต่งเอกสาร", nextId: "lose" },
            { text: "ใช้แทนการคำนวณ", nextId: "lose" },
        ]
    },

    "c7": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดไม่ใช่ขั้นตอนของสถิติศาสตร์",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เก็บข้อมูล", nextId: "lose" },
            { text: "วิเคราะห์ข้อมูล", nextId: "lose" },
            { text: "สรุปผล", nextId: "lose" },
            { text: "แต่งเพลง", nextId: "random" },
        ]
    },

    "c8": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่ได้จากการนับเรียกว่าอะไร",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลต่อเนื่อง", nextId: "lose" },
            { text: "ข้อมูลไม่ต่อเนื่อง", nextId: "random" },
            { text: "ข้อมูลภาพ", nextId: "lose" },
            { text: "ข้อมูลเสียง", nextId: "lose" },
        ]
    },

    "c9": {
        name: "Mr.EAKAPOT",
        text: "“ส่วนสูงของนักเรียน” เป็นข้อมูลประเภทใด",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เชิงคุณภาพ", nextId: "lose" },
            { text: "เชิงปริมาณ", nextId: "random" },
            { text: "เชิงภาษา", nextId: "lose" },
            { text: "เชิงสัญลักษณ์", nextId: "lose" },
        ]
    },

    "c10": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นแหล่งข้อมูลปฐมภูมิ",
        bg: "image/bg.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "หนังสือพิมพ์", nextId: "lose" },
            { text: "อินเทอร์เน็ต", nextId: "lose" },
            { text: "การสอบถามโดยตรง", nextId: "random" },
            { text: "วารสาร", nextId: "lose" },
        ]
    },

    "c11": {
        name: "Mr.EAKAPOT",
        text: "การสำรวจความคิดเห็นเป็นการเก็บข้อมูลแบบใด",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การทดลอง", nextId: "lose" },
            { text: "การสอบถาม", nextId: "random" },
            { text: "การสังเกต", nextId: "lose" },
            { text: "การคำนวณ", nextId: "lose" },
        ]
    },

    "c12": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่เป็นตัวเลขเรียกว่าอะไร",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "ข้อมูลเชิงปริมาณ", nextId: "random" },
            { text: "ข้อมูลทั่วไป", nextId: "lose" },
            { text: "ข้อมูลภาพ", nextId: "lose" },
        ]
    },

    "c13": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นตัวอย่างของข้อมูล",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "หนังสือ", nextId: "lose" },
            { text: "คะแนนสอบ", nextId: "random" },
            { text: "ปากกา", nextId: "lose" },
            { text: "กระเป๋า", nextId: "lose" },
        ]
    },

    "c14": {
        name: "Mr.EAKAPOT",
        text: "สถิติศาสตร์เกี่ยวข้องกับอะไร",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูล", nextId: "random" },
            { text: "ดนตรี", nextId: "lose" },
            { text: "กีฬา", nextId: "lose" },
            { text: "ศิลปะ", nextId: "lose" },
        ]
    },

    "c15": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่ได้จากการวัดเรียกว่าอะไร",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลไม่ต่อเนื่อง", nextId: "lose" },
            { text: "ข้อมูลต่อเนื่อง", nextId: "random" },
            { text: "ข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "ข้อมูลข้อความ", nextId: "lose" },
        ]
    },

    "c16": {
        name: "Mr.EAKAPOT",
        text: "การใช้สถิติช่วยให้เกิดอะไร",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ความสับสน", nextId: "lose" },
            { text: "การตัดสินใจที่มีเหตุผล", nextId: "random" },
            { text: "การคาดเดา", nextId: "lose" },
            { text: "ความผิดพลาดเสมอ", nextId: "lose" },
        ]
    },

    "c17": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงคุณภาพ",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "อายุ", nextId: "lose" },
            { text: "รายได้", nextId: "lose" },
            { text: "อาชีพ", nextId: "random" },
            { text: "น้ำหนัก", nextId: "lose" },
        ]
    },

    "c18": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลอายุของนักเรียนเป็นข้อมูลแบบใด",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เชิงปริมาณ", nextId: "random" },
            { text: " เชิงคุณภาพ", nextId: "lose" },
            { text: "เชิงข้อความ", nextId: "lose" },
            { text: "เชิงรูปภาพ", nextId: "lose" },
        ]
    },

    "c19": {
        name: "Mr.EAKAPOT",
        text: "การเก็บข้อมูลโดยดูพฤติกรรมเรียกว่าอะไร",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การทดลอง", nextId: "lose" },
            { text: " การสัมภาษณ์", nextId: "lose" },
            { text: "การสังเกต", nextId: "random" },
            { text: "การวิเคราะห์", nextId: "lose" },
        ]
    },

    "c20": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดไม่ใช่ข้อมูลเชิงปริมาณ",
        bg: "image/bg1.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ส่วนสูง", nextId: "lose" },
            { text: "น้ำหนัก", nextId: "lose" },
            { text: "สีผม", nextId: "random" },
            { text: "อายุ", nextId: "lose" },
        ]
    },

    "c21": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c22": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c23": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c24": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c25": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c26": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c27": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c28": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c29": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c30": {
        name: "Mr.EAKAPOT",
        text: "",
        bg: "image/bg2.png",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c31": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c32": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c33": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c34": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c35": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c36": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c37": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c38": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c39": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c40": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c41": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c42": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c43": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c44": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c45": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c46": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c47": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c48": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c49": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "c50": {
        name: "",
        text: "",
        position: "center",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
            { text: "", nextId: "" },
        ]
    },

    "lose": {
        name: "Creator",
        text: "Woww... ไปทำมาใหม่",
        bg: "none",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 30,
        next: "start"
    },

    "win": {
        name: "Creator",
        text: "Woww.... ทำได้ไงครบ 50 ข้อโดยไม่ผิดเนี่ย ยังไงผมเชื่อว่าต้องมีทำหลายๆรอบจนถูกนั้นละ\\n\nถ้าใครทำได้ตั้งครบ 50 ข้อตั้งแต่รอบแรก ผมขอนับถือจริง 5555",
        bg: "none",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 35,
        next: "start"
    },

    "random": {
        name: "",
        text: "ขอที่ได้คือ...",
        bg: "image/bg.png",
        position: "center",
        speaking: true,
        typeSpeed: 20,
        random: [
            { nextId: "c1", weight: 1 },
            { nextId: "c2", weight: 1 },
            { nextId: "c3", weight: 1 },
            { nextId: "c4", weight: 1 },
            { nextId: "c5", weight: 1 },
            { nextId: "c6", weight: 1 },
            { nextId: "c7", weight: 1 },
            { nextId: "c8", weight: 1 },
            { nextId: "c9", weight: 1 },
            { nextId: "c10", weight: 1 },
            { nextId: "c11", weight: 1 },
            { nextId: "c12", weight: 1 },
            { nextId: "c13", weight: 1 },
            { nextId: "c14", weight: 1 },
            { nextId: "c15", weight: 1 },
            { nextId: "c16", weight: 1 },
            { nextId: "c17", weight: 1 },
            { nextId: "c18", weight: 1 },
            { nextId: "c19", weight: 1 },
            { nextId: "c20", weight: 1 },
            { nextId: "c21", weight: 1 },
            { nextId: "c22", weight: 1 },
            { nextId: "c23", weight: 1 },
            { nextId: "c24", weight: 1 },
            { nextId: "c25", weight: 1 },
            { nextId: "c26", weight: 1 },
            { nextId: "c27", weight: 1 },
            { nextId: "c28", weight: 1 },
            { nextId: "c29", weight: 1 },
            { nextId: "c30", weight: 1 },
            { nextId: "c31", weight: 1 },
            { nextId: "c32", weight: 1 },
            { nextId: "c33", weight: 1 },
            { nextId: "c34", weight: 1 },
            { nextId: "c35", weight: 1 },
            { nextId: "c36", weight: 1 },
            { nextId: "c37", weight: 1 },
            { nextId: "c38", weight: 1 },
            { nextId: "c39", weight: 1 },
            { nextId: "c40", weight: 1 },
            { nextId: "c41", weight: 1 },
            { nextId: "c42", weight: 1 },
            { nextId: "c43", weight: 1 },
            { nextId: "c44", weight: 1 },
            { nextId: "c45", weight: 1 },
            { nextId: "c46", weight: 1 },
            { nextId: "c47", weight: 1 },
            { nextId: "c48", weight: 1 },
            { nextId: "c49", weight: 1 },
            { nextId: "c50", weight: 1 },
        ]
    }

};

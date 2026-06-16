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

    "_stageBackgrounds": [
        { min: 1, max: 10, bg: "image/bg.png" },
        { min: 11, max: 20, bg: "image/newbg1.png" },
        { min: 21, max: 30, bg: "image/newbg2.png" }
    ],

    "_stageSounds": [
        { min: 1, max: 1, sound: "sound/bowser-laught.mp3", loop: false }
    ],

    "_stageSprites": [
        { min: 1, max: 10, sprite: "image/creator.png", position: "left", speaking: true },
        { min: 11, max: 20, sprite: "image/mr1.png", position: "left", speaking: true },
        { min: 21, max: 30, sprite: "image/mr2.png", position: "left", speaking: true }
    ],

    "_stageShakes": [
        { min: 1, max: 1, duration: 500, intensity: 5 }
    ],

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
        text: "เกมนี้มีจำนวณทั้งหมด 30 ข้อในการทำให้เสร็จ จะไม่มีข้อไหนที่ซ้ำกัน\nและมีความลับหามันให้เจอละ",
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
        next: "start"
    },

    "c1": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดคือความหมายของสถิติศาสตร์",
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
        text: "จุดประสงค์สำคัญของสถิติศาสตร์คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เพื่อจัดเก็บเอกสารให้เป็นระเบียบ", nextId: "lose" },
            { text: "เพื่อวิเคราะห์ข้อมูล", nextId: "random" },
            { text: "เพื่อประเมินผลการเรียนรู้", nextId: "lose" },
            { text: "เพื่อการแข่งขันกีฬา", nextId: "lose" },
        ]
    },

    "c22": {
        name: "Mr.EAKAPOT",
        text: "“นักเรียนชอบสีอะไร” เป็นข้อมูลประเภทใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลเชิงปริมาณ", nextId: "lose" },
            { text: "ข้อมูลเชิงคุณภาพ", nextId: "random" },
            { text: "ข้อมูลปฐมภูมิ", nextId: "lose" },
            { text: "ข้อมูลทุติยภูมิ", nextId: "lose" },
        ]
    },

    "c23": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงปริมาณ",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "จังหวัด", nextId: "lose" },
            { text: "ศาสนา", nextId: "lose" },
            { text: "จำนวนพี่น้อง", nextId: "random" },
            { text: "เพศ", nextId: "lose" },
        ]
    },

    "c24": {
        name: "Mr.EAKAPOT",
        text: "การแจกแจงข้อมูลช่วยเรื่องใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ทำให้ข้อมูลอ่านง่าย", nextId: "random" },
            { text: "ทำให้ข้อมูลมีจำนวนลดลง", nextId: "lose" },
            { text: "ทำให้ข้อมูลมีความน่าเชื่อถือมากขึ้น", nextId: "lose" },
            { text: "ทำให้ข้อมูลไม่มีความคลาดเคลื่อน", nextId: "lose" },
        ]
    },

    "c25": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นตัวอย่างข้อมูลไม่ต่อเนื่อง",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "น้ำหนัก", nextId: "lose" },
            { text: "ส่วนสูง", nextId: "lose" },
            { text: "จำนวนหนังสือ", nextId: "random" },
            { text: "อุณหภูมิ", nextId: "lose" },
        ]
    },

    "c26": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลทุติยภูมิคืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่เก็บเอง", nextId: "lose" },
            { text: "ข้อมูลที่คิดขึ้น", nextId: "random" },
            { text: "ข้อมูลที่ได้มาจากการคาดเดา", nextId: "lose" },
            { text: "ข้อมูลที่ไม่สามารถนำมาประมวลผลได้", nextId: "lose" },
        ]
    },

    "c27": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงคุณภาพ",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เบอร์รองเท้า", nextId: "lose" },
            { text: "รายได้", nextId: "lose" },
            { text: "กรุ๊ปเลือด", nextId: "random" },
            { text: "อายุ", nextId: "lose" },
        ]
    },

    "c28": {
        name: "Mr.EAKAPOT",
        text: "การใช้แบบสอบถามเป็นการเก็บข้อมูลแบบใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การทดลอง", nextId: "lose" },
            { text: "การสำรวจ", nextId: "random" },
            { text: "การสังเกต", nextId: "lose" },
            { text: "การคำนวณ", nextId: "lose" },
        ]
    },

    "c29": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่เป็นข้อความจัดเป็นข้อมูลแบบใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เชิงปริมาณ", nextId: "lose" },
            { text: "เชิงคุณภาพ", nextId: "random" },
            { text: "เชิงต่อเนื่อง", nextId: "lose" },
            { text: "เชิงคำนวณ", nextId: "lose" },
        ]
    },

    "c30": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดคือตัวอย่างข้อมูลต่อเนื่อง",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "จำนวนรถ", nextId: "lose" },
            { text: "จำนวนคน", nextId: "lose" },
            { text: "ส่วนสูง", nextId: "random" },
            { text: "จำนวนปากกา", nextId: "lose" },
        ]
    },

    "c31": {
        name: "Mr.EAKAPOT",
        text: "สถิติศาสตร์มีประโยชน์ต่อใคร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "นักเรียนเท่านั้น", nextId: "lose" },
            { text: "ครูเท่านั้น", nextId: "lose" },
            { text: "ทุกอาชีพ", nextId: "random" },
            { text: "แพทย์เท่านั้น", nextId: "lose" },
        ]
    },

    "c32": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่ถูกต้องควรมีลักษณะอย่างไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "คลุมเครือ", nextId: "lose" },
            { text: "น่าเชื่อถือ", nextId: "random" },
            { text: "ไม่ครบถ้วน", nextId: "lose" },
            { text: "ซ้ำซ้อน", nextId: "lose" },
        ]
    },

    "c33": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลจากการทดลอง",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ผลการปลูกพืช", nextId: "random" },
            { text: "สีเสื้อ", nextId: "lose" },
            { text: "จังหวัดเกิด", nextId: "lose" },
            { text: "ชื่อเล่น", nextId: "lose" },
        ]
    },

    "c34": {
        name: "Mr.EAKAPOT",
        text: "การวิเคราะห์ข้อมูลมีจุดประสงค์ใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "หาข้อสรุป", nextId: "random" },
            { text: "เพิ่มข้อมูล", nextId: "lose" },
            { text: "ลบข้อมูล", nextId: "lose" },
            { text: "ซ่อนข้อมูล", nextId: "lose" },
        ]
    },

    "c35": {
        name: "Mr.EAKAPOT",
        text: "“จำนวนสมาชิกในครอบครัว” เป็นข้อมูลประเภทใด",
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

    "c36": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงคุณภาพ",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "สถานภาพสมรส", nextId: "random" },
            { text: "น้ำหนัก", nextId: "lose" },
            { text: "ส่วนสูง", nextId: "lose" },
            { text: "อายุ", nextId: "lose" },
        ]
    },

    "c37": {
        name: "Mr.EAKAPOT",
        text: "การสรุปผลข้อมูลช่วยอะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เข้าใจข้อมูลได้ง่าย", nextId: "random" },
            { text: "ทำให้ข้อมูลหาย", nextId: "lose" },
            { text: "ทำให้ข้อมูลผิด", nextId: "lose" },
            { text: "ลดข้อมูลทั้งหมด", nextId: "lose" },
        ]
    },

    "c38": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดไม่ใช่ตัวอย่างข้อมูล",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "คะแนนสอบ", nextId: "lose" },
            { text: "จำนวนเงิน", nextId: "lose" },
            { text: "ชื่อโรงเรียน", nextId: "lose" },
            { text: "โต๊ะเรียน", nextId: "random" },
        ]
    },

    "c39": {
        name: "Mr.EAKAPOT",
        text: "การเก็บข้อมูลต้องคำนึงถึงอะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ความถูกต้อง", nextId: "random" },
            { text: "ความสวยงาม", nextId: "lose" },
            { text: "ความรวดเร็วอย่างเดียว", nextId: "lose" },
            { text: "จำนวนสี", nextId: "lose" },
        ]
    },

    "c40": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่ได้จากการสัมภาษณ์เป็นข้อมูลแบบใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ปฐมภูมิ", nextId: "random" },
            { text: "ทุติยภูมิ", nextId: "lose" },
            { text: "ต่อเนื่อง", nextId: "lose" },
            { text: "ไม่ต่อเนื่อง", nextId: "lose" },
        ]
    },

    "c41": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงปริมาณ",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "สีรถ", nextId: "lose" },
            { text: "ยี่ห้อโทรศัพท์", nextId: "lose" },
            { text: "ความสูงของต้นไม้", nextId: "random" },
            { text: "อาชีพ", nextId: "lose" },
        ]
    },

    "c42": {
        name: "Mr.EAKAPOT",
        text: "สถิติศาสตร์เกี่ยวข้องกับการทำงานขั้นใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "รวบรวมข้อมูล", nextId: "lose" },
            { text: "วิเคราะห์ข้อมูล", nextId: "lose" },
            { text: "แปลความหมายข้อมูล", nextId: "lose" },
            { text: "ถูกทุกข้อ", nextId: "random" },
        ]
    },

    "c43": {
        name: "Mr.EAKAPOT",
        text: "“อุณหภูมิวันนี้” เป็นข้อมูลประเภทใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เชิงปริมาณ", nextId: "random" },
            { text: "เชิงคุณภาพ", nextId: "lose" },
            { text: "เชิงภาษา", nextId: "lose" },
            { text: "เชิงภาพ", nextId: "lose" },
        ]
    },

    "c44": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลไม่ต่อเนื่อง",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ความสูง", nextId: "lose" },
            { text: "จำนวนสัตว์เลี้ยง", nextId: "random" },
            { text: "น้ำหนัก", nextId: "lose" },
            { text: "เวลา", nextId: "lose" },
        ]
    },

    "c45": {
        name: "Mr.EAKAPOT",
        text: "การใช้สถิติช่วยในด้านใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การศึกษา", nextId: "lose" },
            { text: "ธุรกิจ", nextId: "lose" },
            { text: "การแพทย์", nextId: "lose" },
            { text: "ถูกทุกข้อ", nextId: "random" },
        ]
    },

    "c46": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลที่มีความน่าเชื่อถือควรเป็นอย่างไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "มีแหล่งที่มา", nextId: "random" },
            { text: "ไม่มีหลักฐาน", nextId: "lose" },
            { text: "ไม่ชัดเจน", nextId: "lose" },
            { text: "เปลี่ยนแปลงตลอด", nextId: "lose" },
        ]
    },

    "c47": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นตัวอย่างข้อมูลเชิงคุณภาพ",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "คะแนนเฉลี่ย", nextId: "lose" },
            { text: "สีที่ชอบ", nextId: "random" },
            { text: "ส่วนสูง", nextId: "lose" },
            { text: "อายุ", nextId: "lose" },
        ]
    },

    "c48": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดคือหน้าที่ของสถิติศาสตร์",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "วิเคราะห์ข้อมูล", nextId: "lose" },
            { text: "ทำนายข้อมูล", nextId: "lose" },
            { text: "สรุปผลข้อมูล", nextId: "lose" },
            { text: "ถูกทุกข้อ", nextId: "random" },
        ]
    },

    "c49": {
        name: "Mr.EAKAPOT",
        text: "การเก็บข้อมูลจำนวนมากควรใช้อะไรช่วย",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เครื่องมือทางสถิติ", nextId: "random" },
            { text: "การคาดเดา", nextId: "lose" },
            { text: "การวาดรูป", nextId: "lose" },
            { text: "การร้องเพลง", nextId: "lose" },
        ]
    },

    "c50": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดกล่าวถูกต้องเกี่ยวกับข้อมูล",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลไม่มีประโยชน์", nextId: "lose" },
            { text: "ข้อมูลใช้ในการวิเคราะห์", nextId: "random" },
            { text: "ข้อมูลใช้เฉพาะในโรงเรียน", nextId: "lose" },
            { text: "ข้อมูลไม่จำเป็น", nextId: "lose" },
        ]
    },

    "lose": {
        name: "Creator",
        text: "Woww... ไปทำมาใหม่นะ..",
        bg: "image/gameover.png",
        position: "center",
        speaking: true,
        typeSpeed: 30,
        next: "start"
    },

    "win": {
        name: "Creator",
        text: "Woww.... ทำได้ไงครบ 30 ข้อโดยไม่ผิดเนี่ย ยังไงผมเชื่อว่าต้องมีทำหลายๆรอบจนถูกนั้นละ\\n\nถ้าใครทำได้ตั้งครบ 30 ข้อตั้งแต่รอบแรก ผมขอนับถือจริงๆ 5555",
        bg: "none",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 35,
        next: "start"
    },

    "random": {
        name: "Creator",
        text: "ขอที่ได้คือ...",
        sprite: "image/creator-1.png",
        position: "center",
        speaking: true,
        typeSpeed: 20,
        winCount: 30,
        next: "win",
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

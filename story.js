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
        { min: 21, max: 21, sound: "sound/bowser-laught.mp3", loop: false }
    ],

    "_stageSprites": [
        { min: 1, max: 10, sprite: "image/creator.png", position: "left", speaking: true },
        { min: 11, max: 20, sprite: "image/mr1.png", position: "left", speaking: true },
        { min: 21, max: 30, sprite: "image/mr2.png", position: "left", speaking: true }
    ],

    "_stageShakes": [
        { min: 21, max: 21, duration: 500, intensity: 5 }
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
        text: "ข้อมูลปฐมภูมิ (Primary Data) เหมาะใช้ในสถานการณ์ใดมากที่สุด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เมื่อต้องการข้อมูลจากหนังสือ", nextId: "lose" },
            { text: "เมื่อต้องการข้อมูลเฉพาะและแม่นยำ", nextId: "random" },
            { text: "เมื่อต้องการข้อมูลจากเว็บไซต์", nextId: "lose" },
            { text: "เมื่อต้องการข้อมูลที่มีผู้รวบรวมไว้แล้ว", nextId: "lose" },
        ]
    },

    "c2": {
        name: "Mr.EAKAPOT",
        text: "ความแปรปรวน (Variance) คืออะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ค่าเฉลี่ยของข้อมูล", nextId: "lose" },
            { text: "ค่าที่ได้จากการยกกำลังสองของส่วนเบี่ยงเบนมาตรฐาน (SD)", nextId: "random" },
            { text: "ค่ามัธยฐานของข้อมูล", nextId: "lose" },
            { text: "ค่าสูงสุดของข้อมูล", nextId: "lose" },
        ]
    },

    "c3": {
        name: "Mr.EAKAPOT",
        text: "ฮิสโตแกรม (Histogram) ใช้สำหรับแสดงข้อมูลประเภทใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "ข้อมูลเชิงปริมาณแบบต่อเนื่อง", nextId: "random" },
            { text: "ข้อมูลรายชื่อ", nextId: "lose" },
            { text: "ข้อมูลความคิดเห็น", nextId: "lose" },
        ]
    },

    "c4": {
        name: "Mr.EAKAPOT",
        text: "ส่วนเบี่ยงเบนมาตรฐาน (SD) บอกอะไรเกี่ยวกับข้อมูล?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "จำนวนข้อมูลทั้งหมด", nextId: "lose" },
            { text: "ค่าสูงสุดของข้อมูล", nextId: "lose" },
            { text: "ระดับการกระจายของข้อมูล", nextId: "random" },
            { text: "ค่าที่พบมากที่สุด", nextId: "lose" },
        ]
    },

    "c5": {
        name: "Mr.EAKAPOT",
        text: "เปอร์เซ็นไทล์ (Percentile) คืออะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การแบ่งข้อมูลเป็น 4 ส่วน", nextId: "lose" },
            { text: "การแบ่งข้อมูลเป็น 10 ส่วน", nextId: "lose" },
            { text: "การแบ่งข้อมูลเป็น 2 ส่วน", nextId: "lose" },
            { text: "การแบ่งข้อมูลเป็น 100 ส่วนเท่า ๆ กัน", nextId: "random" },
        ]
    },

    "c6": {
        name: "Mr.EAKAPOT",
        text: "แผนภูมิวงกลม (Pie Chart) เหมาะสำหรับใช้แสดงข้อมูลลักษณะใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "แนวโน้มตามเวลา", nextId: "lose" },
            { text: "การเปรียบเทียบสัดส่วนของข้อมูลแต่ละส่วนกับทั้งหมด", nextId: "random" },
            { text: "การกระจายของข้อมูลต่อเนื่อง", nextId: "lose" },
            { text: " ความสัมพันธ์ระหว่างตัวแปร", nextId: "lose" },
        ]
    },

    "c7": {
        name: "Mr.EAKAPOT",
        text: "ฐานนิยม (Mode) คืออะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ค่ากลางของข้อมูล", nextId: "lose" },
            { text: "ค่าเฉลี่ยของข้อมูล", nextId: "lose" },
            { text: "ค่าต่ำสุดของข้อมูล", nextId: "lose" },
            { text: "ค่าที่ปรากฏบ่อยที่สุดในข้อมูล", nextId: "random" },
        ]
    },

    "c8": {
        name: "Mr.EAKAPOT",
        text: "ช่วงควอไทล์ (Interquartile Range: IQR) คืออะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ผลต่างระหว่าง Q1 และ Q2", nextId: "lose" },
            { text: "ผลต่างระหว่าง Q3 และ Q1", nextId: "random" },
            { text: "ผลต่างระหว่าง Q2 และ Q3", nextId: "lose" },
            { text: "ผลต่างระหว่าง Q1 และ Q4", nextId: "lose" },
        ]
    },

    "c9": {
        name: "Mr.EAKAPOT",
        text: "กราฟเส้น (Line Graph) เหมาะกับข้อมูลประเภทใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "ข้อมูลอนุกรมเวลา (Time Series Data)", nextId: "random" },
            { text: "ข้อมูลจำแนกประเภท", nextId: "lose" },
            { text: "ข้อมูลสัดส่วน", nextId: "lose" },
        ]
    },

    "c10": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อได้เปรียบของข้อมูลทุติยภูมิ (Secondary Data)?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "มีค่าใช้จ่ายสูง", nextId: "lose" },
            { text: "ใช้เวลารวบรวมข้อมูลนาน", nextId: "lose" },
            { text: "ช่วยประหยัดเวลาในการเก็บรวบรวมข้อมูล", nextId: "random" },
            { text: "ต้องเก็บข้อมูลใหม่ทุกครั้ง", nextId: "lose" },
        ]
    },

    "c11": {
        name: "Mr.EAKAPOT",
        text: "เหตุใดจึงเลือกใช้มัธยฐาน (Median) แทนค่าเฉลี่ย (Mean) ในบางกรณี?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เพราะคำนวณง่ายกว่าเสมอ", nextId: "lose" },
            { text: "เพราะไม่ได้รับผลกระทบจากค่าผิดปกติ (Outlier) มากนัก", nextId: "random" },
            { text: "เพราะใช้ได้เฉพาะข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "เพราะมีค่ามากที่สุดเสมอ", nextId: "lose" },
        ]
    },

    "c12": {
        name: "Mr.EAKAPOT",
        text: "จุดเด่นของช่วงบัญญัติ (Interval Scale) คือข้อใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "มีศูนย์แท้", nextId: "lose" },
            { text: "ช่วงห่างระหว่างข้อมูลมีความหมายเท่ากัน แต่ไม่มีศูนย์แท้", nextId: "random" },
            { text: "เปรียบเทียบเป็นเท่าตัวได้", nextId: "lose" },
            { text: "ใช้จัดอันดับเท่านั้น", nextId: "lose" },
        ]
    },

    "c13": {
        name: "Mr.EAKAPOT",
        text: "แผนภูมิวงกลม (Pie Chart) ใช้แสดงข้อมูลลักษณะใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การเปลี่ยนแปลงของข้อมูลตามเวลา", nextId: "lose" },
            { text: "การแสดงสัดส่วนของข้อมูลในรูปวงกลม", nextId: "random" },
            { text: "การเปรียบเทียบความสูงของข้อมูล", nextId: "lose" },
            { text: "การกระจายของข้อมูล", nextId: "lose" },
        ]
    },

    "c14": {
        name: "Mr.EAKAPOT",
        text: "แผนภาพการกระจาย (Scatter Plot) มีวัตถุประสงค์หลักเพื่ออะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "แสดงความสัมพันธ์ของข้อมูล 2 ชุด", nextId: "random" },
            { text: "หาค่าเฉลี่ยของข้อมูล", nextId: "lose" },
            { text: "แสดงสัดส่วนของข้อมูล", nextId: "lose" },
            { text: "จัดอันดับข้อมูล", nextId: "lose" },
        ]
    },

    "c15": {
        name: "Mr.EAKAPOT",
        text: "เพราะเหตุใดจึงไม่ควรใช้ค่าเฉลี่ย (Mean) เมื่อข้อมูลมีค่าผิดปกติ (Outlier)?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "คำนวณได้ยาก", nextId: "lose" },
            { text: "ค่าผิดปกติทำให้ค่าเฉลี่ยคลาดเคลื่อน", nextId: "random" },
            { text: "ค่าเฉลี่ยใช้กับข้อมูลเชิงคุณภาพไม่ได้", nextId: "lose" },
            { text: "ค่าเฉลี่ยมีค่าคงที่เสมอ", nextId: "lose" },
        ]
    },

    "c16": {
        name: "Mr.EAKAPOT",
        text: "ตารางแจกแจงความถี่ (Frequency Table) คืออะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ตารางที่แสดงค่ากลางของข้อมูล", nextId: "lose" },
            { text: "ตารางที่แสดงจำนวนครั้งที่ข้อมูลแต่ละค่าเกิดขึ้น", nextId: "random" },
            { text: "ตารางที่แสดงความสัมพันธ์ของตัวแปร", nextId: "lose" },
            { text: "ตารางที่แสดงเปอร์เซ็นไทล์", nextId: "lose" },
        ]
    },

    "c17": {
        name: "Mr.EAKAPOT",
        text: "เพราะเหตุใดข้อมูลเชิงคุณภาพ (Qualitative Data) จึงไม่เหมาะกับการคำนวณ?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เป็นข้อมูลที่มีหน่วยวัด", nextId: "lose" },
            { text: "มีจำนวนข้อมูลมากเกินไป", nextId: "lose" },
            { text: "เป็นข้อมูลเชิงลักษณะ ไม่ใช่ตัวเลข", nextId: "random" },
            { text: "เป็นข้อมูลเชิงตัวเลขทั้งหมด", nextId: "lose" },
        ]
    },

    "c18": {
        name: "Mr.EAKAPOT",
        text: "แผนภูมิแท่ง (Bar Chart) เหมาะสำหรับใช้ในสถานการณ์ใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เปรียบเทียบข้อมูลหลายกลุ่มหรือหลายหมวดหมู่", nextId: "random" },
            { text: "แสดงสัดส่วนของข้อมูลทั้งหมด", nextId: "lose" },
            { text: "แสดงการเปลี่ยนแปลงตามเวลา", nextId: "lose" },
            { text: "แสดงความสัมพันธ์ระหว่างตัวแปร", nextId: "lose" },
        ]
    },

    "c19": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นตัวอย่างของการใช้แผนภาพการกระจาย (Scatter Plot)?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เปรียบเทียบจำนวนนักเรียนแต่ละห้อง", nextId: "lose" },
            { text: "แสดงสัดส่วนนักเรียนชายและหญิง", nextId: "lose" },
            { text: "ศึกษาความสัมพันธ์ระหว่างชั่วโมงอ่านหนังสือกับคะแนนสอบ", nextId: "random" },
            { text: "แสดงยอดขายรายเดือน", nextId: "lose" },
        ]
    },

    "c20": {
        name: "Mr.EAKAPOT",
        text: "หากต้องการเปรียบเทียบคะแนนเฉลี่ยของแต่ละห้องเรียน ควรใช้กราฟชนิดใด?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "Pie Chart", nextId: "lose" },
            { text: "Scatter Plot", nextId: "lose" },
            { text: "Bar Chart", nextId: "random" },
            { text: "Histogram", nextId: "lose" },
        ]
    },

    "c21": {
        name: "Mr.EAKAPOT",
        text: "ข้อใดเป็นข้อมูลเชิงคุณภาพ (Qualitative Data)?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "อายุ", nextId: "lose" },
            { text: "สีที่ชอบ", nextId: "random" },
            { text: "น้ำหนัก", nextId: "lose" },
            { text: "ส่วนสูง", nextId: "lose" },
        ]
    },

    "c22": {
        name: "Mr.EAKAPOT",
        text: "ตารางแจกแจงความถี่ช่วยให้ทราบอะไร?",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ค่ามัธยฐาน", nextId: "lose" },
            { text: "จำนวนครั้งที่ข้อมูลแต่ละค่าเกิดขึ้น", nextId: "random" },
            { text: "ค่าความแปรปรวน", nextId: "lose" },
            { text: "ค่าฐานนิยมเท่านั้น", nextId: "lose" },
        ]
    },

    "c23": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูล (Data) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่ผ่านการวิเคราะห์แล้ว", nextId: "lose" },
            { text: "ผลสรุปจากข้อมูล", nextId: "lose" },
            { text: "ข้อเท็จจริงที่รวบรวมมา อาจเป็นตัวเลข ข้อความ หรือสัญลักษณ์", nextId: "random" },
            { text: "รายงานผลการวิจัย", nextId: "lose" },
        ]
    },

    "c24": {
        name: "Mr.EAKAPOT",
        text: "สารสนเทศ (Information) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่ผ่านการประมวลผล วิเคราะห์ หรือสรุปแล้ว", nextId: "random" },
            { text: "ข้อมูลดิบที่ยังไม่ผ่านการประมวลผล", nextId: "lose" },
            { text: "ข้อมูลที่เก็บจากแบบสอบถามเท่านั้น", nextId: "lose" },
            { text: "ข้อมูลที่เป็นตัวเลขเสมอ", nextId: "lose" },
        ]
    },

    "c25": {
        name: "Mr.EAKAPOT",
        text: "ประชากร (Population) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "กลุ่มตัวอย่างที่เลือกมา", nextId: "lose" },
            { text: "บุคคลที่ตอบแบบสอบถาม", nextId: "lose" },
            { text: "กลุ่มของหน่วยทั้งหมดที่สนใจศึกษา", nextId: "random" },
            { text: "ข้อมูลที่รวบรวมได้", nextId: "lose" },
        ]
    },

    "c26": {
        name: "Mr.EAKAPOT",
        text: "ตัวอย่าง (Sample) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลทั้งหมดที่เก็บได้", nextId: "lose" },
            { text: "กลุ่มย่อยของประชากรที่ใช้แทนประชากรทั้งหมด", nextId: "random" },
            { text: "กลุ่มประชากรทั้งหมด", nextId: "lose" },
            { text: "ผลสรุปทางสถิติ", nextId: "lose" },
        ]
    },

    "c27": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลทุติยภูมิ (Secondary Data) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่ผู้วิจัยเก็บเอง", nextId: "lose" },
            { text: "ข้อมูลที่เก็บจากการทดลองเท่านั้น", nextId: "lose" },
            { text: "ข้อมูลที่มีคนเก็บไว้แล้ว เช่น หนังสือหรือรายงาน", nextId: "random" },
            { text: "ข้อมูลที่ไม่มีแหล่งอ้างอิง", nextId: "lose" },
        ]
    },

    "c28": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลอนุกรมเวลา (Time Series Data) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่เก็บในช่วงเวลาเดียวกัน", nextId: "lose" },
            { text: "ข้อมูลที่เก็บตามลำดับเวลาอย่างต่อเนื่อง", nextId: "random" },
            { text: "ข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "ข้อมูลที่ไม่มีเวลาเกี่ยวข้อง", nextId: "lose" },
        ]
    },

    "c29": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลตัดขวาง (Cross-Sectional Data) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่เก็บต่อเนื่องหลายปี", nextId: "lose" },
            { text: "ข้อมูลหลายหน่วย ณ ช่วงเวลาเดียวกัน", nextId: "random" },
            { text: "ข้อมูลที่เก็บตามลำดับเวลา", nextId: "lose" },
            { text: "ข้อมูลจากแหล่งทุติยภูมิ", nextId: "lose" },
        ]
    },

    "c30": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลเชิงปริมาณ (Quantitative Data) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่จัดเป็นประเภท", nextId: "lose" },
            { text: "ข้อมูลความคิดเห็น", nextId: "lose" },
            { text: "ข้อมูลที่เป็นตัวเลขและคำนวณได้", nextId: "random" },
            { text: "ข้อมูลสีและรูปร่าง", nextId: "lose" },
        ]
    },

    "c31": {
        name: "Mr.EAKAPOT",
        text: "ข้อมูลเชิงคุณภาพใช้ระดับการวัดใด",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "อันตรภาคและอัตราส่วน", nextId: "lose" },
            { text: "ทศนิยมและเปอร์เซ็นต์", nextId: "lose" },
            { text: "นามบัญญัติและอันดับบัญญัติ", nextId: "random" },
            { text: "ค่าเฉลี่ยและมัธยฐาน", nextId: "lose" },
        ]
    },

    "c32": {
        name: "Mr.EAKAPOT",
        text: "มาตรานามบัญญัติ (Nominal Scale) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การเรียงลำดับข้อมูล", nextId: "lose" },
            { text: "การแบ่งกลุ่มข้อมูลโดยไม่มีลำดับ", nextId: "random" },
            { text: "การวัดด้วยตัวเลข", nextId: "lose" },
            { text: "การคำนวณค่าเฉลี่ย", nextId: "lose" },
        ]
    },

    "c33": {
        name: "Mr.EAKAPOT",
        text: "มาตราอันดับบัญญัติ (Ordinal Scale) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ข้อมูลที่สามารถเรียงลำดับได้", nextId: "random" },
            { text: "ข้อมูลที่จัดกลุ่มอย่างเดียว", nextId: "lose" },
            { text: "ข้อมูลที่มีศูนย์แท้", nextId: "lose" },
            { text: "ข้อมูลที่เป็นตัวเลขเท่านั้น", nextId: "lose" },
        ]
    },

    "c34": {
        name: "Mr.EAKAPOT",
        text: "ขั้นตอนแรกของสถิติศาสตร์คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การเก็บรวบรวมข้อมูล", nextId: "random" },
            { text: "การนำเสนอข้อมูล", nextId: "lose" },
            { text: "การวิเคราะห์ข้อมูล", nextId: "lose" },
            { text: "การสรุปผล", nextId: "lose" },
        ]
    },

    "c35": {
        name: "Mr.EAKAPOT",
        text: "ขั้นตอนที่สองของสถิติศาสตร์คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การเก็บข้อมูล", nextId: "lose" },
            { text: "การนำเสนอข้อมูล", nextId: "random" },
            { text: "การวิเคราะห์ข้อมูล", nextId: "lose" },
            { text: "การแปลผล", nextId: "lose" },
        ]
    },

    "c36": {
        name: "Mr.EAKAPOT",
        text: "ขั้นตอนที่สามของสถิติศาสตร์คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การวิเคราะห์ข้อมูล", nextId: "random" },
            { text: "การเก็บข้อมูล", nextId: "lose" },
            { text: "การนำเสนอข้อมูล", nextId: "lose" },
            { text: "การสำรวจข้อมูล", nextId: "lose" },
        ]
    },

    "c37": {
        name: "Mr.EAKAPOT",
        text: "การนำเสนอข้อมูล (Presentation) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การแสดงข้อมูลให้อ่านง่าย", nextId: "random" },
            { text: "การเก็บข้อมูล", nextId: "lose" },
            { text: "การคำนวณข้อมูล", nextId: "lose" },
            { text: "การตรวจสอบข้อมูล", nextId: "lose" },
        ]
    },

    "c38": {
        name: "Mr.EAKAPOT",
        text: "การแจกแจงข้อมูล (Distribution) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "การเก็บข้อมูล", nextId: "lose" },
            { text: "การนำเสนอข้อมูล", nextId: "lose" },
            { text: "การสรุปข้อมูล", nextId: "lose" },
            { text: "รูปแบบการกระจายของข้อมูล", nextId: "random" },
        ]
    },

    "c39": {
        name: "Mr.EAKAPOT",
        text: "แผนภูมิแท่ง (Bar Chart) ใช้เพื่ออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เปรียบเทียบข้อมูลแต่ละกลุ่ม", nextId: "random" },
            { text: "แสดงการเปลี่ยนแปลงตามเวลา", nextId: "lose" },
            { text: "หาค่าเฉลี่ย", nextId: "lose" },
            { text: "หาค่ามัธยฐาน", nextId: "lose" },
        ]
    },

    "c40": {
        name: "Mr.EAKAPOT",
        text: "กราฟเส้น (Line Graph) ใช้เพื่ออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "แสดงแนวโน้มของข้อมูลตามเวลา", nextId: "random" },
            { text: "เปรียบเทียบหมวดหมู่", nextId: "lose" },
            { text: "แสดงสัดส่วน", nextId: "lose" },
            { text: "จัดกลุ่มข้อมูล", nextId: "lose" },
        ]
    },

    "c41": {
        name: "Mr.EAKAPOT",
        text: "ค่าเฉลี่ย (Mean) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ค่ากลางของข้อมูลเมื่อเรียงลำดับ", nextId: "lose" },
            { text: "ค่าที่พบมากที่สุด", nextId: "lose" },
            { text: "ผลรวมข้อมูลทั้งหมดหารด้วยจำนวนข้อมูล", nextId: "random" },
            { text: "ผลต่างค่าสูงสุดและต่ำสุด", nextId: "lose" },
        ]
    },

    "c42": {
        name: "Mr.EAKAPOT",
        text: "มัธยฐาน (Median) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ค่าที่พบมากที่สุด", nextId: "lose" },
            { text: "ค่าเฉลี่ยของข้อมูล", nextId: "lose" },
            { text: "ผลต่างระหว่างค่าสูงสุดและต่ำสุด", nextId: "lose" },
            { text: "ค่ากลางเมื่อเรียงข้อมูลจากน้อยไปมาก", nextId: "random" },
        ]
    },

    "c43": {
        name: "Mr.EAKAPOT",
        text: "พิสัย (Range) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "ผลต่างระหว่างค่าสูงสุดกับค่าต่ำสุด", nextId: "random" },
            { text: "ค่าเฉลี่ยของข้อมูล", nextId: "lose" },
            { text: "ค่ากลางของข้อมูล", nextId: "lose" },
            { text: "ค่าที่พบมากที่สุด", nextId: "lose" },
        ]
    },

    "c44": {
        name: "Mr.EAKAPOT",
        text: "เดไซล์ (Decile) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "แบ่งข้อมูลเป็น 2 ส่วน", nextId: "lose" },
            { text: " แบ่งข้อมูลเป็น 10 ส่วนเท่า ๆ กัน", nextId: "random" },
            { text: "แบ่งข้อมูลเป็น 4 ส่วน", nextId: "lose" },
            { text: "แบ่งข้อมูลเป็น 100 ส่วน", nextId: "lose" },
        ]
    },

    "c45": {
        name: "Mr.EAKAPOT",
        text: "ควอร์ไทล์ที่ 1 (Q1) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "จุดที่มีข้อมูลต่ำกว่า 75%", nextId: "lose" },
            { text: "จุดที่มีข้อมูลต่ำกว่า 50%", nextId: "lose" },
            { text: "จุดที่มีข้อมูลต่ำกว่า 100%", nextId: "lose" },
            { text: "จุดที่มีข้อมูลต่ำกว่า 25%", nextId: "random" },
        ]
    },

    "c46": {
        name: "Mr.EAKAPOT",
        text: "ควอร์ไทล์ที่ 3 (Q3) คืออะไร",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "จุดที่มีข้อมูลต่ำกว่า 75%", nextId: "random" },
            { text: "จุดที่มีข้อมูลต่ำกว่า 25%", nextId: "lose" },
            { text: "จุดที่มีข้อมูลต่ำกว่า 50%", nextId: "lose" },
            { text: "จุดที่มีข้อมูลต่ำกว่า 100%", nextId: "lose" },
        ]
    },

    "c47": {
        name: "Mr.EAKAPOT",
        text: "เพราะเหตุใดตัวอย่าง (Sample) จึงใช้แทนประชากร (Population) ได้",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เพราะมีจำนวนมากกว่า", nextId: "lose" },
            { text: "เพราะเป็นส่วนหนึ่งที่แทนประชากรได้ ช่วยประหยัดเวลาและค่าใช้จ่าย", nextId: "random" },
            { text: "เพราะเก็บข้อมูลง่ายกว่าเสมอ", nextId: "lose" },
            { text: "เพราะมีข้อมูลครบทุกคน", nextId: "lose" },
        ]
    },

    "c48": {
        name: "Mr.EAKAPOT",
        text: "เพราะเหตุใดอัตราส่วนบัญญัติ (Ratio Scale) จึงเปรียบเทียบเป็นเท่ากันได้",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เพราะไม่มีศูนย์แท้", nextId: "lose" },
            { text: "เพราะเรียงลำดับได้เท่านั้น", nextId: "lose" },
            { text: "เพราะแบ่งเป็นกลุ่มได้", nextId: "lose" },
            { text: "เพราะมีศูนย์แท้ จึงเปรียบเทียบเป็นกี่เท่าได้", nextId: "random" },
        ]
    },

    "c49": {
        name: "Mr.EAKAPOT",
        text: "เพราะเหตุใดนามบัญญัติ (Nominal Scale) จึงไม่สามารถเรียงลำดับได้",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เพราะไม่มีลำดับของข้อมูล", nextId: "random" },
            { text: "เพราะเป็นข้อมูลเชิงปริมาณ", nextId: "lose" },
            { text: "เพราะมีศูนย์แท้", nextId: "lose" },
            { text: "เพราะคำนวณไม่ได้", nextId: "lose" },
        ]
    },

    "c50": {
        name: "Mr.EAKAPOT",
        text: "เพราะเหตุใดพารามิเตอร์ (Parameter) จึงหายากกว่าสถิติ (Statistic)",
        sprite: "image/creator.png",
        position: "left",
        speaking: true,
        typeSpeed: 40,
        choices: [
            { text: "เพราะใช้ข้อมูลจากตัวอย่าง", nextId: "lose" },
            { text: "เพราะใช้ข้อมูลจากประชากรทั้งหมด", nextId: "random" },
            { text: "เพราะเป็นข้อมูลเชิงคุณภาพ", nextId: "lose" },
            { text: "เพราะเป็นข้อมูลทุติยภูมิ", nextId: "lose" },
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
    },

    "win2": {
        name: "Mr.EAKAPOT",
        text: "ยินดีด้วยครับคุณแก้สอบผ่านแล้ว",
        bg: "image/bgwin1.png",
        sprite: "image/cwin1.png",
        position: "center",
        speaking: true,
        typeSpeed: 40
    },

    "win3": {
        name: "Mr.EAKAPOT",
        text: "อย่าลืมส่งงานของครูให้ครบนะครับ ไม่งั้นจะโดนบอมส์นะครับ",
        bg: "image/bgwin2.png",
        sprite: "image/cwin2.png",
        position: "center",
        speaking: true,
        typeSpeed: 40
    }

};

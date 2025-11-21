/* main.js - Emotion Sticker Lab
   - 4개 언어(ko/en/ja/zh)
   - 시니어용 대형 UI(PC) + 모바일 최적화
   - 컨셉 칩 자동 생성
   - 9종 이모티콘 이미지 프롬프트 생성
   - 온보딩(다시 보지 않기)
*/

// ========================== 1. 다국어 UI 텍스트 ==========================

const I18N = {
  ko: {
    logoTitle: "Emotion Sticker Lab",
    logoSub: "텍스트 없이 표정으로 만드는 이모티콘 프롬프트 도구",

    leftTitle: "이모티콘 기본 설정",
    leftSub: "캐릭터와 컨셉만 선택하면 9종 이미지 프롬프트가 자동으로 생성됩니다.",

    labelCategory: "캐릭터 카테고리",
    labelCharacter: "캐릭터 타입",
    labelConcept: "컨셉 (자동 추천)",

    btnGenerate: "9종 세트 생성",

    rightTitle: "9종 이모티콘 프롬프트 결과",
    rightSub: "각 리액션마다 구글 AI 스튜디오에 바로 붙여넣을 수 있는 영어 이미지 프롬프트가 생성됩니다.",

    // 카테고리 이름
    category_animal: "동물 캐릭터",
    category_human: "사람 캐릭터",
    category_mascot: "브랜드/마스코트 캐릭터",

    // 컨셉 칩
    concept_basic: "1. 베이직 감정 9종",
    concept_daily: "2. 일상 리액션 9종",
    concept_angry: "3. 짜증/빡침 리액션",
    concept_love: "4. 사랑/하트 리액션",
    concept_office: "5. 직장인 리액션",
    concept_newyear: "6. 새해 인사 리액션",
    concept_christmas: "7. 크리스마스 리액션",
    concept_couple: "8. 연인 리액션",
    concept_parttime: "9. 알바 리액션",
    concept_game: "10. 게임 리액션",
    concept_workout: "11. 운동 리액션",

    // 온보딩
    onboardTitle: "Emotion Sticker Lab 안내",
    onboardBody1:
      "이 페이지는 '텍스트 없이 표정만으로 감정 전달' 이모티콘을 빠르게 만들 수 있는 생성 도구입니다.",
    onboardBullet1: "캐릭터 카테고리와 타입, 컨셉만 선택하면 9종 리액션이 자동으로 구성됩니다.",
    onboardBullet2: "각 리액션마다 구글 AI Studio에 바로 붙여넣을 수 있는 영어 이미지 프롬프트가 생성됩니다.",
    onboardBullet3: "카카오톡·라인·캔바·피그마에서 쓸 이모티콘 제작에 최적화되어 있습니다.",
    onboardDontShow: "다시 보지 않기",
    onboardCloseBtn: "시작하기",
  },

  en: {
    logoTitle: "Emotion Sticker Lab",
    logoSub: "Prompt tool for text-free emotion stickers",

    leftTitle: "Sticker base settings",
    leftSub:
      "Choose a character and concept and this tool will generate a 9-sticker image prompt set automatically.",

    labelCategory: "Character category",
    labelCharacter: "Character type",
    labelConcept: "Concept (auto suggested)",

    btnGenerate: "Generate 9-sticker set",

    rightTitle: "9-sticker prompt result",
    rightSub: "Each reaction comes with an English image prompt ready for Google AI Studio.",

    category_animal: "Animal characters",
    category_human: "Human characters",
    category_mascot: "Brand / mascot characters",

    concept_basic: "1. Basic emotions (9)",
    concept_daily: "2. Daily reactions (9)",
    concept_angry: "3. Angry / rage reactions",
    concept_love: "4. Love / heart reactions",
    concept_office: "5. Office worker reactions",
    concept_newyear: "6. New Year greetings",
    concept_christmas: "7. Christmas reactions",
    concept_couple: "8. Couple reactions",
    concept_parttime: "9. Part-time job reactions",
    concept_game: "10. Gaming reactions",
    concept_workout: "11. Workout reactions",

    onboardTitle: "Welcome to Emotion Sticker Lab",
    onboardBody1:
      "This page is a tool for quickly designing text-free emotion sticker sets using image prompts.",
    onboardBullet1: "Select character category, type, and concept to auto-structure a 9-reaction set.",
    onboardBullet2: "Each reaction includes an English image prompt ready to paste into Google AI Studio.",
    onboardBullet3: "Optimized for stickers used in KakaoTalk, LINE, Canva, Figma and more.",
    onboardDontShow: "Don’t show again",
    onboardCloseBtn: "Start",
  },

  ja: {
    logoTitle: "エモーションステッカーラボ",
    logoSub: "文字なし感情スタンプ用プロンプトツール",

    leftTitle: "スタンプ基本設定",
    leftSub:
      "キャラクターとコンセプトを選ぶだけで、9種類の画像プロンプトセットが自動生成されます。",

    labelCategory: "キャラクターカテゴリ",
    labelCharacter: "キャラクタータイプ",
    labelConcept: "コンセプト（自動提案）",

    btnGenerate: "9個セット生成",

    rightTitle: "9個スタンプ プロンプト結果",
    rightSub: "各リアクションごとに、Google AI Studio 用の英語画像プロンプトが生成されます。",

    category_animal: "動物キャラクター",
    category_human: "人間キャラクター",
    category_mascot: "ブランド・マスコット",

    concept_basic: "1. 基本感情 9種",
    concept_daily: "2. 日常リアクション 9種",
    concept_angry: "3. イライラ・怒りリアクション",
    concept_love: "4. 愛・ハートリアクション",
    concept_office: "5. 会社員リアクション",
    concept_newyear: "6. 新年あいさつリアクション",
    concept_christmas: "7. クリスマスリアクション",
    concept_couple: "8. カップルリアクション",
    concept_parttime: "9. アルバイトリアクション",
    concept_game: "10. ゲームリアクション",
    concept_workout: "11. 運動リアクション",

    onboardTitle: "Emotion Sticker Lab のご案内",
    onboardBody1:
      "このページは「文字なしで感情を伝えるスタンプ」を、画像プロンプトで素早く設計するためのツールです。",
    onboardBullet1: "キャラクターカテゴリ・タイプ・コンセプトを選ぶだけで、9個のリアクションセットが自動で構成されます。",
    onboardBullet2: "各リアクションに、Google AI Studio にそのまま貼り付けられる英語画像プロンプトが付きます。",
    onboardBullet3: "KakaoTalk / LINE / Canva / Figma 用スタンプ制作に最適です。",
    onboardDontShow: "次回から表示しない",
    onboardCloseBtn: "はじめる",
  },

  zh: {
    logoTitle: "情感贴纸实验室",
    logoSub: "用于“无文字表情贴”的提示词工具",

    leftTitle: "贴纸基础设置",
    leftSub: "只需选择角色和概念，即可自动生成 9 张图片提示词组合。",

    labelCategory: "角色类别",
    labelCharacter: "角色类型",
    labelConcept: "概念（自动推荐）",

    btnGenerate: "生成 9 张组合",

    rightTitle: "9 张贴纸提示词结果",
    rightSub: "每个表情都附带可直接用于 Google AI Studio 的英文图片提示词。",

    category_animal: "动物角色",
    category_human: "人类角色",
    category_mascot: "品牌 / 吉祥物角色",

    concept_basic: "1. 基本情绪 9 种",
    concept_daily: "2. 日常反应 9 种",
    concept_angry: "3. 生气 / 抱怨反应",
    concept_love: "4. 爱情 / 爱心反应",
    concept_office: "5. 上班族反应",
    concept_newyear: "6. 新年问候反应",
    concept_christmas: "7. 圣诞节反应",
    concept_couple: "8. 情侣反应",
    concept_parttime: "9. 打工反应",
    concept_game: "10. 游戏反应",
    concept_workout: "11. 运动反应",

    onboardTitle: "欢迎使用 Emotion Sticker Lab",
    onboardBody1:
      "本页面是一个通过图片提示词快速设计“无文字情绪贴纸组合”的工具。",
    onboardBullet1: "只需选择角色类别、类型和概念，即可自动生成 9 张反应贴纸结构。",
    onboardBullet2: "每张贴纸都带有可直接用于 Google AI Studio 的英文图片提示词。",
    onboardBullet3: "专为 KakaoTalk · LINE · Canva · Figma 等场景的贴纸制作而设计。",
    onboardDontShow: "不再显示",
    onboardCloseBtn: "开始使用",
  },
};

// ========================== 2. 캐릭터 정보 ==========================

const CHARACTER_DB = {
  animal: [
    "maltese",
    "shiba",
    "pomeranian",
    "cat",
    "bunny",
    "hamster",
    "bear",
    "tiger",
    "fox",
    "panda",
    "koala",
    "penguin",
    "dinosaur",
    "baby_chick",
    "sheep",
  ],
  human: [
    "girl",
    "boy",
    "woman",
    "man",
    "parttimer_girl",
    "parttimer_boy",
    "office_woman",
    "office_man",
  ],
  mascot: [
    "brand_round",
    "brand_square",
    "robot_mini",
    "capsule_character",
    "balloon_mascot",
    "star_mascot",
  ],
};

const CHARACTER_LABELS = {
  ko: {
    maltese: "말티즈 강아지",
    shiba: "시바견",
    pomeranian: "포메라니안",
    cat: "둥근 고양이",
    bunny: "토끼 캐릭터",
    hamster: "햄스터 캐릭터",
    bear: "곰돌이 캐릭터",
    tiger: "호랑이 캐릭터",
    fox: "여우 캐릭터",
    panda: "판다 캐릭터",
    koala: "코알라 캐릭터",
    penguin: "펭귄 캐릭터",
    dinosaur: "아기 공룡",
    baby_chick: "병아리 캐릭터",
    sheep: "양 캐릭터",
    girl: "귀여운 여자 캐릭터",
    boy: "귀여운 남자 캐릭터",
    woman: "부드러운 여성 캐릭터",
    man: "편안한 남성 캐릭터",
    parttimer_girl: "알바생 여자 캐릭터",
    parttimer_boy: "알바생 남자 캐릭터",
    office_woman: "직장인 여성 캐릭터",
    office_man: "직장인 남성 캐릭터",
    brand_round: "둥근 브랜드 마스코트",
    brand_square: "네모 브랜드 마스코트",
    robot_mini: "작은 로봇 마스코트",
    capsule_character: "캡슐형 마스코트",
    balloon_mascot: "풍선형 마스코트",
    star_mascot: "별 모양 마스코트",
  },
  en: {
    maltese: "Maltese puppy",
    shiba: "Shiba Inu dog",
    pomeranian: "Pomeranian dog",
    cat: "Round cat character",
    bunny: "Bunny character",
    hamster: "Hamster character",
    bear: "Bear character",
    tiger: "Tiger character",
    fox: "Fox character",
    panda: "Panda character",
    koala: "Koala character",
    penguin: "Penguin character",
    dinosaur: "Baby dinosaur",
    baby_chick: "Baby chick character",
    sheep: "Sheep character",
    girl: "Cute girl character",
    boy: "Cute boy character",
    woman: "Soft woman character",
    man: "Casual man character",
    parttimer_girl: "Part-timer girl",
    parttimer_boy: "Part-timer boy",
    office_woman: "Office lady character",
    office_man: "Office man character",
    brand_round: "Round brand mascot",
    brand_square: "Square brand mascot",
    robot_mini: "Mini robot mascot",
    capsule_character: "Capsule mascot",
    balloon_mascot: "Balloon mascot",
    star_mascot: "Star-shaped mascot",
  },
  ja: {
    maltese: "マルチーズわんこ",
    shiba: "柴犬キャラ",
    pomeranian: "ポメラニアンキャラ",
    cat: "まるいねこキャラ",
    bunny: "うさぎキャラ",
    hamster: "ハムスターキャラ",
    bear: "くまキャラ",
    tiger: "とらキャラ",
    fox: "きつねキャラ",
    panda: "パンダキャラ",
    koala: "コアラキャラ",
    penguin: "ペンギンキャラ",
    dinosaur: "ベビー恐竜",
    baby_chick: "ひよこキャラ",
    sheep: "ひつじキャラ",
    girl: "かわいい女の子キャラ",
    boy: "かわいい男の子キャラ",
    woman: "やさしい女性キャラ",
    man: "おだやかな男性キャラ",
    parttimer_girl: "アルバイト女子",
    parttimer_boy: "アルバイト男子",
    office_woman: "OLキャラ",
    office_man: "サラリーマンキャラ",
    brand_round: "まるいマスコット",
    brand_square: "しかくいマスコット",
    robot_mini: "ミニロボットマスコット",
    capsule_character: "カプセルマスコット",
    balloon_mascot: "ふうせんマスコット",
    star_mascot: "ほし型マスコット",
  },
  zh: {
    maltese: "马尔济斯小狗",
    shiba: "柴犬角色",
    pomeranian: "博美犬角色",
    cat: "圆脸小猫角色",
    bunny: "兔子角色",
    hamster: "仓鼠角色",
    bear: "小熊角色",
    tiger: "小老虎角色",
    fox: "小狐狸角色",
    panda: "熊猫角色",
    koala: "考拉角色",
    penguin: "企鹅角色",
    dinosaur: "小恐龙角色",
    baby_chick: "小鸡角色",
    sheep: "小羊角色",
    girl: "可爱的女孩角色",
    boy: "可爱的男孩角色",
    woman: "温柔的女性角色",
    man: "轻松的男性角色",
    parttimer_girl: "打工女孩角色",
    parttimer_boy: "打工男孩角色",
    office_woman: "女职员角色",
    office_man: "男职员角色",
    brand_round: "圆形品牌吉祥物",
    brand_square: "方形品牌吉祥物",
    robot_mini: "迷你机器人吉祥物",
    capsule_character: "胶囊形吉祥物",
    balloon_mascot: "气球吉祥物",
    star_mascot: "星形吉祥物",
  },
};

// 캐릭터 기본 묘사(프롬프트용)
function getCharacterBaseDesc(key) {
  const map = {
    maltese: "a chibi-style white Maltese puppy, big head small body, soft pastel fur",
    shiba: "a cute chibi Shiba Inu dog with orange fur and curly tail",
    pomeranian: "a fluffy chibi Pomeranian dog with round body and energetic face",
    cat: "a round-faced chibi cat with big shiny eyes and soft pastel fur",
    bunny: "a chibi bunny with long ears, round cheeks and pastel colors",
    hamster: "a tiny chibi hamster with fluffy cheeks and shiny round eyes",
    bear: "a teddy bear-like chibi bear with warm pastel colors",
    tiger: "a chibi tiger with soft stripes and round silhouette",
    fox: "a fluffy chibi fox with long tail and warm orange colors",
    panda: "a pastel-toned chibi panda with big black eye patches",
    koala: "a soft chibi koala with round ears and relaxed face",
    penguin: "a small chibi penguin with smooth round body and short wings",
    dinosaur: "a tiny pastel baby dinosaur with round head and small tail",
    baby_chick: "a chubby chibi baby chick with tiny wings and pastel yellow body",
    sheep: "a fluffy chibi sheep with cloud-like wool and big round eyes",
    girl: "a cute chibi girl with expressive eyes and soft pastel hair",
    boy: "a cute chibi boy with hoodie and casual outfit",
    woman: "a soft pastel chibi woman character with gentle appearance",
    man: "a chibi adult man with relaxed expression",
    parttimer_girl: "a chibi girl part-timer wearing apron and name tag",
    parttimer_boy: "a chibi boy part-timer in simple uniform and apron",
    office_woman: "a chibi office woman wearing simple business attire",
    office_man: "a chibi office man wearing shirt and slacks",
    brand_round: "a round mascot character with simple geometric shape and pastel colors",
    brand_square: "a square mascot with clean lines and bright colors",
    robot_mini: "a tiny robot mascot with LED eyes and smooth plastic texture",
    capsule_character: "a capsule-shaped minimal mascot with cute face",
    balloon_mascot: "a balloon-like floating mascot with shiny pastel surface",
    star_mascot: "a star-shaped mascot with soft curves and bright expression",
  };
  return map[key] || "a cute chibi-style character in pastel colors";
}

// ========================== 3. 리액션 세트 정의 ==========================

const CONCEPT_KEYS = [
  "basic",
  "daily",
  "angry",
  "love",
  "office",
  "newyear",
  "christmas",
  "couple",
  "parttime",
  "game",
  "workout",
];

const REACTION_SETS = {
  basic: [
    { label: "Happy", action: "smiling brightly with both hands up" },
    { label: "Calm", action: "relaxed face with gentle closed smile" },
    { label: "Surprised", action: "big open eyes, small open mouth, shocked pose" },
    { label: "Love", action: "cheeks blushing, heart effects around" },
    { label: "Angry", action: "puffed cheeks, angry eyebrows, tiny steam effect" },
    { label: "Sad", action: "teary eyes, head slightly down" },
    { label: "Cheer", action: "raising fists with energetic pose" },
    { label: "Tired", action: "sleepy eyes, drooping posture" },
    { label: "Greeting", action: "waving hand with gentle smile" },
  ],
  daily: [
    { label: "Meal time", action: "holding a bowl, inviting to eat" },
    { label: "Coffee break", action: "holding a coffee cup with warm smile" },
    { label: "Chilling", action: "lying down relaxing comfortably" },
    { label: "Phone chat", action: "looking at smartphone with happy face" },
    { label: "Going out", action: "holding bag and waving" },
    { label: "Coming home", action: "opening door looking relieved" },
    { label: "Exhausted", action: "collapsing on floor tired" },
    { label: "Small joy", action: "holding snack with sparkle eyes" },
    { label: "Good night", action: "holding pillow, sleepy eyes" },
  ],
  angry: [
    { label: "Annoyed", action: "arms crossed, annoyed expression" },
    { label: "Exploding", action: "shouting with steam effects" },
    { label: "Foot stomp", action: "stomping feet angrily" },
    { label: "Side-eye", action: "looking aside with sharp eyes" },
    { label: "Frustrated", action: "hands on head in frustration" },
    { label: "Complaint", action: "talking angrily with small motion lines" },
    { label: "Screaming", action: "mouth wide open yelling" },
    { label: "Boiling", action: "face red with boiling anger" },
    { label: "Pouting", action: "pouting face with puffed cheeks" },
  ],
  love: [
    { label: "Heart pose", action: "making hand heart near face" },
    { label: "Blushing shy", action: "looking aside with red cheeks" },
    { label: "Gift love", action: "holding a small gift box forward" },
    { label: "Hug pose", action: "arms open ready for hug" },
    { label: "Kiss pose", action: "small kiss gesture with closed eyes" },
    { label: "Heart eyes", action: "eyes replaced with hearts" },
    { label: "Love jump", action: "jumping with heart effects around" },
    { label: "Warm smile", action: "soft warm smile with soft light" },
    { label: "Heart wave", action: "waving with little hearts" },
  ],
  office: [
    { label: "Work tired", action: "tired face with paperwork pile" },
    { label: "Meeting", action: "raising one hand in meeting pose" },
    { label: "Phone call", action: "holding phone to ear, serious face" },
    { label: "Deadline panic", action: "panicking with papers flying" },
    { label: "Report typing", action: "typing on laptop intensely" },
    { label: "Sigh", action: "deep sigh with hand on forehead" },
    { label: "Coffee break", action: "holding iced coffee relieved" },
    { label: "Cheer up", action: "small fist pump, weak smile" },
    { label: "Going home", action: "bag on shoulder, big smile" },
  ],
  newyear: [
    { label: "Happy new year", action: "joyful pose with sparkles" },
    { label: "Bow greeting", action: "bowing politely" },
    { label: "Lucky charm", action: "holding small lucky item" },
    { label: "Fireworks", action: "looking up at fireworks excited" },
    { label: "Family warm", action: "hands together, warm expression" },
    { label: "Hopeful", action: "hands held together wishing" },
    { label: "Energetic start", action: "power pose, ready to start" },
    { label: "Smile greeting", action: "waving with big smile" },
    { label: "New goal", action: "determined face, clenched fist" },
  ],
  christmas: [
    { label: "Santa smile", action: "wearing santa hat, smiling" },
    { label: "Gift box", action: "holding wrapped present" },
    { label: "Tree decorate", action: "decorating a small tree" },
    { label: "Snow joy", action: "catching snow with open hands" },
    { label: "Warm cocoa", action: "holding hot cocoa mug" },
    { label: "Santa dance", action: "small dancing pose in santa outfit" },
    { label: "Bell ring", action: "ringing small bell" },
    { label: "Holiday wave", action: "waving with sparkles" },
    { label: "Star light", action: "holding shining star ornament" },
  ],
  couple: [
    { label: "Hand hold", action: "reaching hands forward kindly" },
    { label: "Shy blush", action: "blushing, holding cheeks" },
    { label: "Warm hug", action: "hugging pose silhouette" },
    { label: "Heart eyes", action: "heart eyes looking at viewer" },
    { label: "Love call", action: "phone near ear, happy love talk" },
    { label: "Surprise gift", action: "offering gift shyly" },
    { label: "Sweet smile", action: "soft eyes, gentle smile" },
    { label: "Love jump", action: "jumping, hearts popping" },
    { label: "Couple cheer", action: "two small hearts floating beside" },
  ],
  parttime: [
    { label: "Serve tray", action: "holding tray with items" },
    { label: "Order taking", action: "holding notepad and pen" },
    { label: "Cashier", action: "standing at register" },
    { label: "Clean table", action: "wiping table with cloth" },
    { label: "Welcome", action: "bowing slightly to customer" },
    { label: "Rush", action: "running in a hurry" },
    { label: "Break tired", action: "leaning on counter tired" },
    { label: "Thank you", action: "bowing deeply" },
    { label: "Shift over", action: "stretching arms, relieved smile" },
  ],
  game: [
    { label: "Victory", action: "raising arms happily, small crown" },
    { label: "Defeat", action: "slumped down, sad face" },
    { label: "Focus", action: "leaning forward concentrating" },
    { label: "Hit damage", action: "shocked face, tiny impact effect" },
    { label: "Rage quit", action: "angry, almost throwing controller" },
    { label: "Heal", action: "relieved face, small heal effect" },
    { label: "Level up", action: "excited pose with level-up text style effect" },
    { label: "Battle ready", action: "fighting stance" },
    { label: "GG", action: "waving with small 'gg' style gesture (no text)" },
  ],
  workout: [
    { label: "Running", action: "running motion, small sweat drops" },
    { label: "Dumbbell", action: "lifting small dumbbell" },
    { label: "Stretching", action: "stretching arms upward" },
    { label: "Sweaty", action: "panting with sweat drops" },
    { label: "Jumping", action: "small jump pose" },
    { label: "Plank", action: "simple plank pose, focused face" },
    { label: "Yoga", action: "easy yoga pose, calm face" },
    { label: "Cheer up", action: "cheering with towel around neck" },
    { label: "Goal", action: "arms raised proudly, achievement pose" },
  ],
};

// ========================== 4. 전역 상태 & DOM ==========================

let currentLang = "ko";
let currentConcept = "basic";

const langSelect = document.getElementById("langSelect");
const categorySelect = document.getElementById("characterCategorySelect");
const characterSelect = document.getElementById("characterSelect");
const conceptChipsContainer = document.getElementById("conceptChips");
const generateBtn = document.getElementById("generateBtn");
const resultList = document.getElementById("resultList");

const onboardingOverlay = document.getElementById("onboardingOverlay");
const onboardDontShowCheckbox = document.getElementById("onboardDontShowCheckbox");
const onboardCloseBtn = document.getElementById("onboardCloseBtn");
const ONBOARD_KEY = "emotion_sticker_lab_onboarding_hide";

// ========================== 5. 언어 적용 함수 ==========================

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N["en"];

  // data-i18n 요소 처리
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // 컨셉 칩 텍스트 업데이트
  conceptChipsContainer.querySelectorAll("[data-concept-key]").forEach((chip) => {
    const concept = chip.getAttribute("data-concept-key");
    const labelKey = "concept_" + concept;
    if (dict[labelKey]) chip.textContent = dict[labelKey];
  });

  // 카테고리 셀렉트 라벨 업데이트
  const catDict = {
    animal: dict.category_animal,
    human: dict.category_human,
    mascot: dict.category_mascot,
  };
  Array.from(categorySelect.options).forEach((opt) => {
    if (catDict[opt.value]) opt.textContent = catDict[opt.value];
  });

  // 캐릭터 셀렉트 라벨 업데이트
  updateCharacterSelect();
}

// ========================== 6. 캐릭터/컨셉 초기화 ==========================

function initCategorySelect() {
  const dict = I18N[currentLang];
  categorySelect.innerHTML = "";

  const order = ["animal", "human", "mascot"];
  order.forEach((key) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = dict["category_" + key];
    categorySelect.appendChild(opt);
  });
}

function updateCharacterSelect() {
  const category = categorySelect.value;
  const chars = CHARACTER_DB[category] || [];
  const labels = CHARACTER_LABELS[currentLang] || CHARACTER_LABELS["en"];

  const prev = characterSelect.value;
  characterSelect.innerHTML = "";

  chars.forEach((key) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = labels[key] || key;
    characterSelect.appendChild(opt);
  });

  if (prev && chars.includes(prev)) {
    characterSelect.value = prev;
  }
}

function initConceptChips() {
  const dict = I18N[currentLang];
  conceptChipsContainer.innerHTML = "";

  CONCEPT_KEYS.forEach((concept, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    if (concept === "basic") btn.classList.add("active");
    btn.setAttribute("data-concept-key", concept);

    const labelKey = "concept_" + concept;
    btn.textContent = dict[labelKey] || concept;

    btn.addEventListener("click", () => {
      currentConcept = concept;
      conceptChipsContainer.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
    });

    conceptChipsContainer.appendChild(btn);
  });
}

// ========================== 7. 온보딩 ==========================

function initOnboarding() {
  if (!onboardingOverlay) return;
  const hide = localStorage.getItem(ONBOARD_KEY) === "1";
  if (hide) {
    onboardingOverlay.style.display = "none";
  } else {
    onboardingOverlay.style.display = "flex";
  }

  if (onboardCloseBtn) {
    onboardCloseBtn.addEventListener("click", () => {
      if (onboardDontShowCheckbox && onboardDontShowCheckbox.checked) {
        localStorage.setItem(ONBOARD_KEY, "1");
      }
      onboardingOverlay.style.display = "none";
    });
  }
}

// ========================== 8. 프롬프트 생성 ==========================

function buildPrompt(characterKey, reaction) {
  const baseDesc = getCharacterBaseDesc(characterKey);

  return (
    `high-quality chibi-style sticker illustration, ` +
    `${baseDesc}, ` +
    `expressing: ${reaction.label}, ` +
    `pose: ${reaction.action}, ` +
    `no text, no speech bubble, ` +
    `clean white background, ` +
    `soft pastel color palette, ` +
    `smooth shading`
  );
}

function renderResults() {
  const characterKey = characterSelect.value;
  const reactions = REACTION_SETS[currentConcept] || REACTION_SETS["basic"];

  resultList.innerHTML = "";

  reactions.forEach((reaction, index) => {
    const item = document.createElement("div");
    item.className = "result-item";

    const prompt = buildPrompt(characterKey, reaction);
    const safePrompt = prompt.replace(/"/g, "&quot;");

    item.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div>
          <div style="font-size:14px;color:#9ca3af;">#${index + 1}</div>
          <div class="result-emotion">${reaction.label}</div>
        </div>
      </div>
      <div class="result-prompt">${prompt}</div>
      <div style="margin-top:8px;display:flex;justify-content:flex-end;">
        <button class="copy-btn" data-prompt="${safePrompt}">Copy</button>
      </div>
    `;

    resultList.appendChild(item);
  });

  // 복사 버튼 이벤트
  resultList.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-prompt");
      if (!text) return;
      const decoded = text.replace(/&quot;/g, '"');
      navigator.clipboard.writeText(decoded).then(
        () => {
          const old = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => {
            btn.textContent = old;
          }, 800);
        },
        () => {
          alert("복사에 실패했습니다. 수동으로 드래그해 복사해 주세요.");
        }
      );
    });
  });
}

// ========================== 9. 이벤트 바인딩 ==========================

function initEvents() {
  langSelect.addEventListener("change", () => {
    currentLang = langSelect.value;
    applyLanguage(currentLang);
  });

  categorySelect.addEventListener("change", () => {
    updateCharacterSelect();
  });

  generateBtn.addEventListener("click", () => {
    renderResults();
  });
}

// ========================== 10. 초기화 ==========================

function init() {
  // 카테고리/캐릭터/컨셉 설정
  initCategorySelect();
  updateCharacterSelect();
  initConceptChips();

  // 언어 적용
  applyLanguage(currentLang);

  // 온보딩
  initOnboarding();

  // 이벤트
  initEvents();
}

// DOM 준비 후 실행
document.addEventListener("DOMContentLoaded", init);

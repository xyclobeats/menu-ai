let quantityNormalizationGuide = {};
let ingredientPriceGuide = {};

const breakfastOptions = [
  createMeal("鮭おにぎり朝食", "和朝食", ["鮭おにぎり"], {
    "ごはん": "2合",
    "鮭フレーク": "1袋"
  }),
  createMeal("トースト朝食", "パン朝食", ["バタートースト"], {
    "食パン": "1斤",
    "卵": "6個",
    "バター": "1箱",
    "レタス": "1玉"
  }),
  createMeal("ヨーグルト朝食", "軽め", ["ヨーグルト"], {
    "ヨーグルト": "2パック",
    "バナナ": "1房",
    "グラノーラ": "1袋",
    "食パン": "1斤",
    "はちみつ": "1本"
  }),
  createMeal("納豆ごはん朝食", "定番", ["納豆ごはん"], {
    "ごはん": "2合",
    "納豆": "3パック",
    "味噌": "1パック",
    "ねぎ": "1束"
  }),
  createMeal("ハムチーズ朝食", "パン朝食", ["ハムチーズトースト"], {
    "食パン": "1斤",
    "ハム": "1パック",
    "スライスチーズ": "1パック",
    "トマト": "2個"
  }),
  createMeal("しらすごはん朝食", "和朝食", ["しらすごはん"], {
    "ごはん": "2合",
    "しらす": "1パック"
  }),
  createMeal("たまごサンド朝食", "パン朝食", ["たまごサンド"], {
    "食パン": "1斤",
    "卵": "4個",
    "マヨネーズ": "1本"
  }),
  createMeal("お茶漬け朝食", "軽め", ["鮭茶漬け"], {
    "ごはん": "2合",
    "お茶漬けの素": "1袋",
    "鮭フレーク": "1袋"
  }),
  createMeal("フレンチトースト朝食", "パン朝食", ["フレンチトースト"], {
    "食パン": "1斤",
    "卵": "3個",
    "牛乳": "1本"
  })
];

const lunchOptions = [
  createMeal("親子丼ランチ", "丼もの", ["親子丼"], {
    "鶏もも肉": "300g",
    "卵": "4個",
    "玉ねぎ": "2個",
    "ごはん": "3合"
  }),
  createMeal("焼きそばランチ", "麺", ["焼きそば"], {
    "焼きそば麺": "3玉",
    "豚こま肉": "250g",
    "キャベツ": "0.5玉",
    "もやし": "1袋"
  }),
  createMeal("チャーハンランチ", "ごはん", ["チャーハン"], {
    "ごはん": "3合",
    "卵": "3個",
    "ねぎ": "1束",
    "焼豚": "1パック"
  }),
  createMeal("うどんランチ", "温かい", ["きつねうどん"], {
    "うどん": "3玉",
    "長ねぎ": "1本",
    "油揚げ": "1パック",
    "めんつゆ": "1本"
  }),
  createMeal("カレーランチ", "作り置き向け", ["カレーライス"], {
    "カレールウ": "1箱",
    "じゃがいも": "3個",
    "玉ねぎ": "2個",
    "にんじん": "2本",
    "豚こま肉": "300g",
    "ごはん": "3合"
  }),
  createMeal("そぼろ丼ランチ", "丼もの", ["鶏そぼろ丼"], {
    "鶏ひき肉": "300g",
    "卵": "3個",
    "ごはん": "3合"
  }),
  createMeal("ナポリタンランチ", "麺", ["ナポリタン"], {
    "スパゲッティ": "1袋",
    "ウインナー": "1袋",
    "玉ねぎ": "1個",
    "ピーマン": "2個",
    "ケチャップ": "1本"
  }),
  createMeal("牛丼ランチ", "丼もの", ["牛丼"], {
    "牛こま肉": "300g",
    "玉ねぎ": "2個",
    "ごはん": "3合"
  }),
  createMeal("オムそばランチ", "麺", ["オムそば"], {
    "焼きそば麺": "3玉",
    "卵": "3個",
    "豚こま肉": "250g",
    "キャベツ": "0.5玉"
  }),
  createMeal("中華丼ランチ", "丼もの", ["中華丼"], {
    "豚こま肉": "250g",
    "白菜": "0.5玉",
    "にんじん": "1本",
    "しいたけ": "1パック",
    "ごはん": "3合"
  }),
  createMeal("焼き鳥丼ランチ", "丼もの", ["焼き鳥丼"], {
    "鶏もも肉": "300g",
    "長ねぎ": "1本",
    "ごはん": "3合"
  }),
  createMeal("ビビンバ丼ランチ", "丼もの", ["ビビンバ丼"], {
    "ひき肉": "250g",
    "ほうれん草": "1束",
    "もやし": "1袋",
    "ごはん": "3合"
  }),
  createMeal("天津飯ランチ", "丼もの", ["天津飯"], {
    "卵": "4個",
    "かにかま": "1パック",
    "ごはん": "3合",
    "中華スープの素": "1袋"
  })
];

const dinnerOptions = [
  createMeal("鶏の照り焼き定食", "主菜", ["鶏の照り焼き"], {
    "鶏もも肉": "2枚",
    "キャベツ": "0.5玉",
    "醤油": "1本",
    "みりん": "1本"
  }),
  createMeal("豚しょうが焼き定食", "主菜", ["豚しょうが焼き"], {
    "豚ロース": "300g",
    "玉ねぎ": "2個",
    "しょうが": "1個",
    "レタス": "1玉"
  }),
  createMeal("サバの塩焼き定食", "魚", ["サバの塩焼き"], {
    "サバ": "2切れ",
    "大根": "0.5本",
    "レモン": "1個"
  }),
  createMeal("麻婆豆腐定食", "中華", ["麻婆豆腐"], {
    "ひき肉": "250g",
    "豆腐": "2丁",
    "長ねぎ": "1本",
    "麻婆豆腐の素": "1箱"
  }),
  createMeal("オムライスプレート", "洋食", ["オムライス"], {
    "ごはん": "3合",
    "卵": "4個",
    "鶏もも肉": "200g",
    "玉ねぎ": "1個",
    "ケチャップ": "1本"
  }),
  createMeal("肉じゃが定食", "和食", ["肉じゃが"], {
    "じゃがいも": "4個",
    "玉ねぎ": "2個",
    "にんじん": "2本",
    "牛こま肉": "250g",
    "しらたき": "1袋"
  }),
  createMeal("クリームシチュー献立", "温かい", ["クリームシチュー"], {
    "シチュールウ": "1箱",
    "鶏もも肉": "250g",
    "じゃがいも": "3個",
    "にんじん": "2本",
    "玉ねぎ": "2個",
    "牛乳": "1本"
  }),
  createMeal("鮭の焼き魚定食", "魚", ["鮭の塩焼き"], {
    "鮭": "2切れ",
    "ごはん": "2合",
    "味噌": "1パック",
    "豆腐": "1丁"
  }),
  createMeal("チキン南蛮定食", "主菜", ["チキン南蛮"], {
    "鶏もも肉": "2枚",
    "卵": "2個",
    "タルタルソース": "1本",
    "レタス": "1玉"
  }),
  createMeal("ハンバーグ定食", "洋食", ["ハンバーグ"], {
    "合いびき肉": "300g",
    "玉ねぎ": "1個",
    "パン粉": "1袋",
    "卵": "1個"
  }),
  createMeal("野菜炒め定食", "中華", ["豚肉の野菜炒め"], {
    "豚こま肉": "300g",
    "キャベツ": "0.5玉",
    "もやし": "1袋",
    "にんじん": "1本",
    "ピーマン": "2個"
  }),
  createMeal("鶏団子鍋", "温かい", ["鶏団子鍋"], {
    "鶏ひき肉": "300g",
    "白菜": "0.5玉",
    "長ねぎ": "1本",
    "えのき": "1袋"
  }),
  createMeal("回鍋肉定食", "中華", ["回鍋肉"], {
    "豚こま肉": "300g",
    "キャベツ": "0.5玉",
    "ピーマン": "2個",
    "回鍋肉の素": "1箱"
  }),
  createMeal("塩さば定食", "魚", ["塩さば"], {
    "塩さば": "2切れ",
    "大根": "0.5本"
  })
];

const bentoOptions = [
  createMeal("唐揚げ弁当", "定番弁当", ["唐揚げ", "ごはん"], {
    "鶏もも肉": "250g",
    "片栗粉": "80g",
    "ごはん": "2合",
    "ブロッコリー": "1株"
  }),
  createMeal("鮭のり弁", "魚弁当", ["焼き鮭", "のりごはん"], {
    "鮭": "2切れ",
    "ごはん": "2合",
    "焼きのり": "4枚",
    "ちくわ": "1袋"
  }),
  createMeal("そぼろ弁当", "丼弁当", ["鶏そぼろ", "炒り卵ごはん"], {
    "鶏ひき肉": "250g",
    "卵": "3個",
    "ごはん": "2合",
    "いんげん": "1袋"
  }),
  createMeal("ハンバーグ弁当", "洋風弁当", ["ハンバーグ", "ごはん"], {
    "合いびき肉": "250g",
    "玉ねぎ": "1個",
    "パン粉": "80g",
    "卵": "1個",
    "ごはん": "2合"
  }),
  createMeal("生姜焼き弁当", "肉弁当", ["豚の生姜焼き", "ごはん"], {
    "豚ロース": "250g",
    "玉ねぎ": "1個",
    "しょうが": "1個",
    "ごはん": "2合",
    "レタス": "1玉"
  }),
  createMeal("オムライス弁当", "洋食弁当", ["オムライス"], {
    "ごはん": "2合",
    "卵": "3個",
    "鶏もも肉": "180g",
    "玉ねぎ": "1個",
    "ケチャップ": "120g"
  })
];

const sideOptions = {
  breakfast: [
    createSide("ほうれん草のおひたし", { "ほうれん草": "1束" }),
    createSide("きゅうりの浅漬け", { "きゅうり": "2本" }),
    createSide("トマトサラダ", { "トマト": "2個" }),
    createSide("ゆで卵", { "卵": "2個" }),
    createSide("バナナ", { "バナナ": "1房" }),
    createSide("りんご", { "りんご": "2個" }),
    createSide("ヨーグルト", { "ヨーグルト": "1パック" }),
    createSide("ハッシュドポテト", { "じゃがいも": "2個" })
  ],
  breakfastSoup: [
    createSide("豆腐とわかめの味噌汁", { "味噌": "1パック", "豆腐": "1丁", "わかめ": "1袋" }),
    createSide("ねぎの味噌汁", { "味噌": "1パック", "ねぎ": "1束" }),
    createSide("コーンスープ", { "コーンスープ": "1箱" }),
    createSide("じゃがいもの味噌汁", { "味噌": "1パック", "じゃがいも": "2個" })
  ],
  lunch: [
    createSide("冷ややっこ", { "豆腐": "1丁" }),
    createSide("コールスロー", { "キャベツ": "0.5玉", "にんじん": "1本" }),
    createSide("小松菜のおひたし", { "小松菜": "1束" }),
    createSide("春雨サラダ", { "春雨": "1袋", "きゅうり": "2本" }),
    createSide("ちくわ磯辺焼き", { "ちくわ": "1袋" }),
    createSide("ポテトサラダ", { "じゃがいも": "3個", "きゅうり": "2本" }),
    createSide("ブロッコリーサラダ", { "ブロッコリー": "1株" })
  ],
  lunchSoup: [
    createSide("味噌汁", { "味噌": "1パック", "豆腐": "1丁" }),
    createSide("わかめスープ", { "わかめ": "1袋", "中華スープの素": "1袋" }),
    createSide("中華スープ", { "中華スープの素": "1袋", "卵": "2個" }),
    createSide("コンソメスープ", { "コンソメ": "1箱", "玉ねぎ": "1個" })
  ],
  bento: [
    createSide("ブロッコリーのおかか和え", { "ブロッコリー": "1株" }),
    createSide("きんぴらごぼう", { "ごぼう": "1本", "にんじん": "1本" }),
    createSide("卵焼き", { "卵": "2個" }),
    createSide("ポテトサラダ", { "じゃがいも": "3個", "きゅうり": "2本" }),
    createSide("ほうれん草のごま和え", { "ほうれん草": "1束", "すりごま": "1袋" }),
    createSide("ミニトマト", { "ミニトマト": "8個" })
  ],
  dinner: [
    createSide("ポテトサラダ", { "じゃがいも": "3個", "きゅうり": "2本" }),
    createSide("千切りキャベツ", { "キャベツ": "0.5玉" }),
    createSide("ひじき煮", { "ひじき": "1袋", "にんじん": "1本", "油揚げ": "1パック" }),
    createSide("もやしナムル", { "もやし": "1袋" }),
    createSide("ブロッコリーサラダ", { "ブロッコリー": "1株" }),
    createSide("冷ややっこ", { "豆腐": "1丁" }),
    createSide("ほうれん草のごま和え", { "ほうれん草": "1束", "すりごま": "1袋" }),
    createSide("きんぴらごぼう", { "ごぼう": "1本", "にんじん": "1本" }),
    createSide("ツナサラダ", { "ツナ缶": "1缶", "レタス": "1玉" }),
    createSide("マカロニサラダ", { "マカロニ": "1袋", "きゅうり": "2本", "ハム": "1パック" }),
    createSide("切り干し大根", { "切り干し大根": "1袋", "にんじん": "1本", "油揚げ": "1パック" }),
    createSide("白菜の浅漬け", { "白菜": "0.5玉" })
  ],
  dinnerSoup: [
    createSide("豆腐の味噌汁", { "味噌": "1パック", "豆腐": "1丁" }),
    createSide("卵スープ", { "卵": "2個", "中華スープの素": "1袋" }),
    createSide("コンソメスープ", { "コンソメ": "1箱", "玉ねぎ": "1個" }),
    createSide("なめこの味噌汁", { "味噌": "1パック", "なめこ": "1袋" }),
    createSide("白菜スープ", { "白菜": "0.5玉", "コンソメ": "1箱" }),
    createSide("大根の味噌汁", { "味噌": "1パック", "大根": "0.5本" })
  ]
};

const seasonalPreferences = {
  spring: {
    breakfast: ["しらすごはん朝食", "たまごサンド朝食", "ヨーグルト朝食"],
    lunch: ["親子丼ランチ", "中華丼ランチ", "ナポリタンランチ", "焼き鳥丼ランチ"],
    dinner: ["鮭の焼き魚定食", "チキン南蛮定食", "肉じゃが定食", "ハンバーグ定食"],
    breakfastSide: ["トマトサラダ", "ヨーグルト", "りんご"],
    breakfastSoup: ["豆腐とわかめの味噌汁", "コーンスープ"],
    lunchSide: ["ブロッコリーサラダ", "小松菜のおひたし", "コールスロー"],
    lunchSoup: ["コンソメスープ", "味噌汁"],
    dinnerSide: ["ブロッコリーサラダ", "ほうれん草のごま和え", "ツナサラダ"],
    dinnerSoup: ["豆腐の味噌汁", "コンソメスープ"]
  },
  summer: {
    breakfast: ["ヨーグルト朝食", "お茶漬け朝食", "しらすごはん朝食"],
    lunch: ["焼きそばランチ", "ビビンバ丼ランチ", "中華丼ランチ", "焼き鳥丼ランチ"],
    dinner: ["サバの塩焼き定食", "豚しょうが焼き定食", "麻婆豆腐定食", "野菜炒め定食"],
    breakfastSide: ["バナナ", "トマトサラダ", "ヨーグルト"],
    breakfastSoup: ["ねぎの味噌汁", "豆腐とわかめの味噌汁"],
    lunchSide: ["冷ややっこ", "春雨サラダ", "ブロッコリーサラダ"],
    lunchSoup: ["わかめスープ", "中華スープ"],
    dinnerSide: ["冷ややっこ", "もやしナムル", "千切りキャベツ", "白菜の浅漬け"],
    dinnerSoup: ["大根の味噌汁", "卵スープ"]
  },
  autumn: {
    breakfast: ["鮭おにぎり朝食", "納豆ごはん朝食", "フレンチトースト朝食"],
    lunch: ["牛丼ランチ", "焼き鳥丼ランチ", "天津飯ランチ", "うどんランチ"],
    dinner: ["鮭の焼き魚定食", "回鍋肉定食", "ハンバーグ定食", "塩さば定食"],
    breakfastSide: ["りんご", "ハッシュドポテト", "ゆで卵"],
    breakfastSoup: ["じゃがいもの味噌汁", "豆腐とわかめの味噌汁"],
    lunchSide: ["ポテトサラダ", "ちくわ磯辺焼き", "小松菜のおひたし"],
    lunchSoup: ["味噌汁", "コンソメスープ"],
    dinnerSide: ["きんぴらごぼう", "切り干し大根", "ひじき煮", "マカロニサラダ"],
    dinnerSoup: ["なめこの味噌汁", "大根の味噌汁"]
  },
  winter: {
    breakfast: ["納豆ごはん朝食", "鮭おにぎり朝食", "フレンチトースト朝食"],
    lunch: ["うどんランチ", "親子丼ランチ", "中華丼ランチ", "天津飯ランチ"],
    dinner: ["鶏団子鍋", "クリームシチュー献立", "肉じゃが定食", "麻婆豆腐定食"],
    breakfastSide: ["ゆで卵", "ハッシュドポテト", "りんご"],
    breakfastSoup: ["じゃがいもの味噌汁", "ねぎの味噌汁", "コーンスープ"],
    lunchSide: ["ちくわ磯辺焼き", "コールスロー", "ポテトサラダ"],
    lunchSoup: ["味噌汁", "中華スープ"],
    dinnerSide: ["ひじき煮", "切り干し大根", "白菜の浅漬け", "ポテトサラダ"],
    dinnerSoup: ["なめこの味噌汁", "白菜スープ", "豆腐の味噌汁"]
  }
};

const weekdayNames = ["日", "月", "火", "水", "木", "金", "土"];
quantityNormalizationGuide = {
  "鮭フレーク": { fromUnit: "袋", toUnit: "g", multiplier: 50 },
  "食パン": { fromUnit: "斤", toUnit: "枚", multiplier: 6 },
  "バター": { fromUnit: "箱", toUnit: "g", multiplier: 200 },
  "ヨーグルト": { fromUnit: "パック", toUnit: "g", multiplier: 400 },
  "バナナ": { fromUnit: "房", toUnit: "本", multiplier: 4 },
  "グラノーラ": { fromUnit: "袋", toUnit: "g", multiplier: 350 },
  "はちみつ": { fromUnit: "本", toUnit: "g", multiplier: 250 },
  "納豆": { fromUnit: "パック", toUnit: "個", multiplier: 1 },
  "味噌": { fromUnit: "パック", toUnit: "g", multiplier: 750 },
  "ねぎ": { fromUnit: "束", toUnit: "g", multiplier: 100 },
  "ハム": { fromUnit: "パック", toUnit: "枚", multiplier: 8 },
  "スライスチーズ": { fromUnit: "パック", toUnit: "枚", multiplier: 7 },
  "しらす": { fromUnit: "パック", toUnit: "g", multiplier: 80 },
  "マヨネーズ": { fromUnit: "本", toUnit: "g", multiplier: 400 },
  "お茶漬けの素": { fromUnit: "袋", toUnit: "食分", multiplier: 4 },
  "もやし": { fromUnit: "袋", toUnit: "g", multiplier: 200 },
  "焼豚": { fromUnit: "パック", toUnit: "g", multiplier: 120 },
  "油揚げ": { fromUnit: "パック", toUnit: "枚", multiplier: 2 },
  "めんつゆ": { fromUnit: "本", toUnit: "ml", multiplier: 500 },
  "カレールウ": { fromUnit: "箱", toUnit: "皿分", multiplier: 8 },
  "スパゲッティ": { fromUnit: "袋", toUnit: "g", multiplier: 300 },
  "ウインナー": { fromUnit: "袋", toUnit: "g", multiplier: 120 },
  "ケチャップ": { fromUnit: "本", toUnit: "g", multiplier: 500 },
  "ほうれん草": { fromUnit: "束", toUnit: "g", multiplier: 200 },
  "かにかま": { fromUnit: "パック", toUnit: "g", multiplier: 70 },
  "中華スープの素": { fromUnit: "袋", toUnit: "食分", multiplier: 10 },
  "麻婆豆腐の素": { fromUnit: "箱", toUnit: "食分", multiplier: 3 },
  "しらたき": { fromUnit: "袋", toUnit: "g", multiplier: 200 },
  "シチュールウ": { fromUnit: "箱", toUnit: "皿分", multiplier: 8 },
  "タルタルソース": { fromUnit: "本", toUnit: "g", multiplier: 200 },
  "パン粉": { fromUnit: "袋", toUnit: "g", multiplier: 200 },
  "白菜": { fromUnit: "玉", toUnit: "g", multiplier: 1200 },
  "えのき": { fromUnit: "袋", toUnit: "g", multiplier: 100 },
  "回鍋肉の素": { fromUnit: "箱", toUnit: "食分", multiplier: 3 },
  "わかめ": { fromUnit: "袋", toUnit: "g", multiplier: 40 },
  "コーンスープ": { fromUnit: "箱", toUnit: "食分", multiplier: 4 },
  "小松菜": { fromUnit: "束", toUnit: "g", multiplier: 200 },
  "春雨": { fromUnit: "袋", toUnit: "g", multiplier: 100 },
  "ちくわ": { fromUnit: "袋", toUnit: "本", multiplier: 4 },
  "コンソメ": { fromUnit: "箱", toUnit: "個", multiplier: 8 },
  "ひじき": { fromUnit: "袋", toUnit: "g", multiplier: 30 },
  "すりごま": { fromUnit: "袋", toUnit: "g", multiplier: 60 },
  "ツナ缶": { fromUnit: "缶", toUnit: "g", multiplier: 70 },
  "マカロニ": { fromUnit: "袋", toUnit: "g", multiplier: 200 },
  "切り干し大根": { fromUnit: "袋", toUnit: "g", multiplier: 40 },
  "なめこ": { fromUnit: "袋", toUnit: "g", multiplier: 100 },
  "いんげん": { fromUnit: "袋", toUnit: "g", multiplier: 100 }
};
ingredientPriceGuide = {
  "ごはん": { unit: "合", pricePerUnit: 90 },
  "鮭フレーク": { unit: "g", pricePerUnit: 5 },
  "食パン": { unit: "枚", pricePerUnit: 36.7 },
  "卵": { unit: "個", pricePerUnit: 35 },
  "バター": { unit: "g", pricePerUnit: 2.25 },
  "レタス": { unit: "玉", pricePerUnit: 220 },
  "ヨーグルト": { unit: "g", pricePerUnit: 0.45 },
  "バナナ": { unit: "本", pricePerUnit: 55 },
  "グラノーラ": { unit: "g", pricePerUnit: 1.86 },
  "はちみつ": { unit: "g", pricePerUnit: 3.12 },
  "納豆": { unit: "個", pricePerUnit: 110 },
  "味噌": { unit: "g", pricePerUnit: 0.43 },
  "ねぎ": { unit: "g", pricePerUnit: 1.2 },
  "ハム": { unit: "枚", pricePerUnit: 22.5 },
  "スライスチーズ": { unit: "枚", pricePerUnit: 34.3 },
  "トマト": { unit: "個", pricePerUnit: 120 },
  "しらす": { unit: "g", pricePerUnit: 3.75 },
  "マヨネーズ": { unit: "g", pricePerUnit: 0.7 },
  "お茶漬けの素": { unit: "食分", pricePerUnit: 45 },
  "牛乳": { unit: "本", pricePerUnit: 250 },
  "鶏もも肉": { unit: "g", pricePerUnit: 1.3 },
  "玉ねぎ": { unit: "個", pricePerUnit: 60 },
  "焼きそば麺": { unit: "玉", pricePerUnit: 45 },
  "豚こま肉": { unit: "g", pricePerUnit: 1.6 },
  "キャベツ": { unit: "玉", pricePerUnit: 260 },
  "もやし": { unit: "g", pricePerUnit: 0.225 },
  "焼豚": { unit: "g", pricePerUnit: 2.67 },
  "うどん": { unit: "玉", pricePerUnit: 55 },
  "長ねぎ": { unit: "本", pricePerUnit: 120 },
  "油揚げ": { unit: "枚", pricePerUnit: 70 },
  "めんつゆ": { unit: "ml", pricePerUnit: 0.56 },
  "カレールウ": { unit: "皿分", pricePerUnit: 32.5 },
  "じゃがいも": { unit: "個", pricePerUnit: 50 },
  "にんじん": { unit: "本", pricePerUnit: 60 },
  "鶏ひき肉": { unit: "g", pricePerUnit: 1.2 },
  "スパゲッティ": { unit: "g", pricePerUnit: 0.77 },
  "ウインナー": { unit: "g", pricePerUnit: 2 },
  "ピーマン": { unit: "個", pricePerUnit: 70 },
  "ケチャップ": { unit: "g", pricePerUnit: 0.44 },
  "牛こま肉": { unit: "g", pricePerUnit: 2.2 },
  "ひき肉": { unit: "g", pricePerUnit: 1.4 },
  "ほうれん草": { unit: "g", pricePerUnit: 0.9 },
  "かにかま": { unit: "g", pricePerUnit: 1.86 },
  "中華スープの素": { unit: "食分", pricePerUnit: 18 },
  "豚ロース": { unit: "g", pricePerUnit: 2.3 },
  "しょうが": { unit: "個", pricePerUnit: 120 },
  "サバ": { unit: "切れ", pricePerUnit: 180 },
  "大根": { unit: "本", pricePerUnit: 200 },
  "レモン": { unit: "個", pricePerUnit: 130 },
  "豆腐": { unit: "丁", pricePerUnit: 60 },
  "麻婆豆腐の素": { unit: "食分", pricePerUnit: 73.4 },
  "しらたき": { unit: "g", pricePerUnit: 0.55 },
  "シチュールウ": { unit: "皿分", pricePerUnit: 35 },
  "鮭": { unit: "切れ", pricePerUnit: 220 },
  "タルタルソース": { unit: "g", pricePerUnit: 1.6 },
  "合いびき肉": { unit: "g", pricePerUnit: 1.8 },
  "パン粉": { unit: "g", pricePerUnit: 0.9 },
  "白菜": { unit: "g", pricePerUnit: 0.27 },
  "えのき": { unit: "g", pricePerUnit: 1 },
  "回鍋肉の素": { unit: "食分", pricePerUnit: 80 },
  "塩さば": { unit: "切れ", pricePerUnit: 190 },
  "きゅうり": { unit: "本", pricePerUnit: 80 },
  "りんご": { unit: "個", pricePerUnit: 160 },
  "わかめ": { unit: "g", pricePerUnit: 4.5 },
  "コーンスープ": { unit: "食分", pricePerUnit: 57.5 },
  "小松菜": { unit: "g", pricePerUnit: 0.8 },
  "春雨": { unit: "g", pricePerUnit: 1.8 },
  "ちくわ": { unit: "本", pricePerUnit: 30 },
  "ブロッコリー": { unit: "株", pricePerUnit: 220 },
  "コンソメ": { unit: "個", pricePerUnit: 28.8 },
  "ひじき": { unit: "g", pricePerUnit: 5.34 },
  "すりごま": { unit: "g", pricePerUnit: 2.34 },
  "ごぼう": { unit: "本", pricePerUnit: 150 },
  "ツナ缶": { unit: "g", pricePerUnit: 2.29 },
  "マカロニ": { unit: "g", pricePerUnit: 0.9 },
  "切り干し大根": { unit: "g", pricePerUnit: 4.5 },
  "なめこ": { unit: "g", pricePerUnit: 1.2 }
  ,
  "片栗粉": { unit: "g", pricePerUnit: 0.5 },
  "焼きのり": { unit: "枚", pricePerUnit: 18 },
  "いんげん": { unit: "g", pricePerUnit: 1.8 },
  "ミニトマト": { unit: "個", pricePerUnit: 25 }
};

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    document.getElementById("year").value = today.getFullYear();
    document.getElementById("month").value = today.getMonth() + 1;

    document.getElementById("menu-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const year = Number(document.getElementById("year").value);
      const month = Number(document.getElementById("month").value);
      const kidsCount = Math.max(0, Number(document.getElementById("kids-count").value) || 0);
      const adultCount = Math.max(0, Number(document.getElementById("adult-count").value) || 0);
      const tomariName = document.getElementById("bento-name-tomari").value.trim() || "とまりのお弁当";
      const sosodoName = document.getElementById("bento-name-sosodo").value.trim() || "そそどのお弁当";
      const manualBentoDaysInput = document.getElementById("manual-bento-days").value;
      const manualBentoName = document.getElementById("manual-bento-name").value.trim() || "持っていくお弁当";
      renderPlan(
        year,
        month,
        { tomari: tomariName, sosodo: sosodoName },
        kidsCount,
        adultCount,
        {
          days: parseManualBentoDays(manualBentoDaysInput, year, month),
          name: manualBentoName
        }
      );
    });

    document.getElementById("print-menu").addEventListener("click", () => {
      printSection("menu");
    });

    document.getElementById("print-shopping").addEventListener("click", () => {
      printSection("shopping");
    });

    renderPlan(today.getFullYear(), today.getMonth() + 1, {
      tomari: "とまりのお弁当",
      sosodo: "そそどのお弁当"
    }, 2, 1, {
      days: [],
      name: "持っていくお弁当"
    });
  });
}

function createMeal(name, note, dishes, ingredients) {
  return { name, note, dishes, ingredients: normalizeIngredientMap(ingredients) };
}

function createSide(name, ingredients) {
  return { name, ingredients: normalizeIngredientMap(ingredients) };
}

function renderPlan(year, month, bentoNames, kidsCount, adultCount, manualBentoConfig = { days: [], name: "持っていくお弁当" }) {
  const plan = generateMonthlyPlan(year, month, bentoNames, kidsCount, adultCount, manualBentoConfig);
  renderSummary(plan, bentoNames, manualBentoConfig);
  renderMonthlyMenu(plan.days);
  renderWeeklyShopping(plan.weeks);
}

function generateMonthlyPlan(year, month, bentoNames, kidsCount = 2, adultCount = 1, manualBentoConfig = { days: [], name: "持っていくお弁当" }) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = [];
  const weeks = [];
  const season = getSeason(month);
  const seasonPref = seasonalPreferences[season];
  const manualBentoDays = new Set(
    (manualBentoConfig.days || []).filter((day) => isManualBentoWeekday(year, month, day, daysInMonth))
  );
  const manualBentoName = manualBentoConfig.name || "持っていくお弁当";
  const specialMonthlyMeal = pickMonthlySpecial(year, month);
  const usage = {
    breakfast: new Map(),
    lunch: new Map(),
    dinner: new Map(),
    bento: new Map(),
    breakfastSide: new Map(),
    breakfastSoup: new Map(),
    lunchSide: new Map(),
    lunchSoup: new Map(),
    bentoSide: new Map(),
    dinnerSide: new Map(),
    dinnerSoup: new Map()
  };
  let currentWeek = null;
  let previousDayType = null;

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month - 1, day);
    const weekday = date.getDay();
    const isWeekend = weekday === 0 || weekday === 6;

    if (!currentWeek || weekday === 1) {
      currentWeek = {
        label: `第${weeks.length + 1}週`,
        start: day,
        end: day,
        ingredients: {},
        estimatedCost: 0,
        estimatedItemCount: 0
      };
      weeks.push(currentWeek);
    } else {
      currentWeek.end = day;
    }

    const meals = [];
    const breakfast = composeMeal(
      pickMeal(breakfastOptions, usage.breakfast, meals, null, "", seasonPref.breakfast),
      pickComponent(sideOptions.breakfast, usage.breakfastSide, meals, seasonPref.breakfastSide),
      pickComponent(sideOptions.breakfastSoup, usage.breakfastSoup, meals, seasonPref.breakfastSoup),
      kidsCount,
      adultCount
    );
    meals.push({ slot: "朝", ...breakfast });
    addIngredients(currentWeek.ingredients, breakfast.ingredients);
    addEstimatedCost(currentWeek, breakfast.estimatedCost, breakfast.estimatedItemCount);

    if (isWeekend) {
      const lunch = composeMeal(
        (() => {
          const lunchMain = shouldInsertMonthlySpecial(day, daysInMonth, days, specialMonthlyMeal, "lunch")
            ? lunchOptions.find((meal) => meal.name === specialMonthlyMeal)
            : pickMeal(lunchOptions, usage.lunch, meals, previousDayType, "lunch", seasonPref.lunch);
          if (lunchMain.name === specialMonthlyMeal) {
            usage.lunch.set(lunchMain.name, (usage.lunch.get(lunchMain.name) || 0) + 1);
          }
          return lunchMain;
        })(),
        pickComponent(sideOptions.lunch, usage.lunchSide, meals, seasonPref.lunchSide),
        pickComponent(sideOptions.lunchSoup, usage.lunchSoup, meals, seasonPref.lunchSoup),
        kidsCount,
        adultCount
      );
      meals.push({ slot: "昼", ...lunch });
      addIngredients(currentWeek.ingredients, lunch.ingredients);
      addEstimatedCost(currentWeek, lunch.estimatedCost, lunch.estimatedItemCount);
    } else if (manualBentoDays.has(day)) {
      const manualBento = composePackedMeal(
        renameMeal(
          pickMeal(bentoOptions, usage.bento, meals, previousDayType, "", []),
          manualBentoName
        ),
        pickComponent(sideOptions.bento, usage.bentoSide, meals, []),
        kidsCount,
        adultCount
      );
      meals.push({ slot: "弁当", ...manualBento });
      addIngredients(currentWeek.ingredients, manualBento.ingredients);
      addEstimatedCost(currentWeek, manualBento.estimatedCost, manualBento.estimatedItemCount);
    }

    let dinner;
    if (isWeekend && shouldUseBento(date, days)) {
      const bentoName = pickBentoName(date, bentoNames);
      dinner = {
        ...createMeal(bentoName, "購入するごはん", ["お弁当", "付け合わせ", "汁物はなし"], {}),
        estimatedCost: estimateBentoCost(kidsCount, adultCount),
        estimatedItemCount: 1
      };
    } else {
      const dinnerMain = shouldInsertMonthlySpecial(day, daysInMonth, days, specialMonthlyMeal, "dinner")
        ? dinnerOptions.find((meal) => meal.name === specialMonthlyMeal)
        : pickMeal(dinnerOptions, usage.dinner, meals, previousDayType, "dinner", seasonPref.dinner);
      if (dinnerMain.name === specialMonthlyMeal) {
        usage.dinner.set(dinnerMain.name, (usage.dinner.get(dinnerMain.name) || 0) + 1);
      }
      dinner = composeMeal(
        dinnerMain,
        pickComponent(sideOptions.dinner, usage.dinnerSide, meals, seasonPref.dinnerSide),
        pickComponent(sideOptions.dinnerSoup, usage.dinnerSoup, meals, seasonPref.dinnerSoup),
        kidsCount,
        adultCount
      );
      addIngredients(currentWeek.ingredients, dinner.ingredients);
    }
    meals.push({ slot: "夜", ...dinner });
    addEstimatedCost(currentWeek, dinner.estimatedCost, dinner.estimatedItemCount);

    days.push({
      date,
      day,
      weekday,
      isWeekend,
      meals
    });

    previousDayType = getPrimaryTypesForDay(meals);
  }

  weeks.forEach((week) => {
    week.range = `${week.start}日 - ${week.end}日`;
  });

  return { year, month, season, kidsCount, adultCount, days, weeks, manualBentoDays: [...manualBentoDays], manualBentoName };
}

function composeMeal(mainMeal, sideDish, soupDish, kidsCount, adultCount) {
  const ingredients = scaleIngredientMap(
    mergeIngredientMaps(mainMeal.ingredients, sideDish.ingredients, soupDish.ingredients),
    kidsCount,
    adultCount
  );
  const estimate = estimateIngredientMapCost(ingredients);
  return {
    ...mainMeal,
    dishes: [mainMeal.dishes[0], sideDish.name, soupDish.name],
    ingredients,
    estimatedCost: estimate.total,
    estimatedItemCount: estimate.count
  };
}

function composePackedMeal(mainMeal, sideDish, kidsCount, adultCount) {
  const ingredients = scaleIngredientMap(
    mergeIngredientMaps(mainMeal.ingredients, sideDish.ingredients),
    kidsCount,
    adultCount
  );
  const estimate = estimateIngredientMapCost(ingredients);
  return {
    ...mainMeal,
    dishes: [...mainMeal.dishes, sideDish.name],
    ingredients,
    estimatedCost: estimate.total,
    estimatedItemCount: estimate.count
  };
}

function shouldUseBento(date, existingDays) {
  const weekday = date.getDay();
  if (weekday !== 0 && weekday !== 6) {
    return false;
  }

  const weekKey = getWeekendWeekKey(date);
  const hasBentoThisWeekend = existingDays.some((day) => {
    const meal = day.meals.find((item) => item.slot === "夜");
    return getWeekendWeekKey(day.date) === weekKey && meal.name.includes("お弁当");
  });

  if (hasBentoThisWeekend) {
    return false;
  }

  return weekday === 6 ? date.getDate() % 2 === 0 : true;
}

function getWeekendWeekKey(date) {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());
  return `${sunday.getFullYear()}-${sunday.getMonth() + 1}-${sunday.getDate()}`;
}

function pickMeal(options, usageMap, mealsSoFar, previousDayType = null, slotType = "", preferredNames = []) {
  const recentlyUsedNames = mealsSoFar.map((meal) => meal.name);
  const preferredSet = new Set(preferredNames);
  const ranked = options
    .filter((meal) => !isMonthlySpecialAlreadyUsed(meal.name, usageMap))
    .map((meal, index) => ({
      meal,
      index,
      count: usageMap.get(meal.name) || 0,
      sameNotePenalty: mealsSoFar.some((usedMeal) => usedMeal.note === meal.note) ? 1 : 0,
      sameDishPenalty: meal.dishes.some((dish) =>
        mealsSoFar.some((usedMeal) => usedMeal.dishes.includes(dish))
      ) ? 1 : 0,
      sameNamePenalty: recentlyUsedNames.includes(meal.name) ? 1 : 0,
      previousDayPenalty: previousDayType && previousDayType[slotType] === meal.note ? 1 : 0,
      seasonalPenalty: preferredSet.size > 0 && !preferredSet.has(meal.name) ? 1 : 0
    }))
    .sort((a, b) => {
      if (a.count !== b.count) {
        return a.count - b.count;
      }
      if (a.seasonalPenalty !== b.seasonalPenalty) {
        return a.seasonalPenalty - b.seasonalPenalty;
      }
      if (a.previousDayPenalty !== b.previousDayPenalty) {
        return a.previousDayPenalty - b.previousDayPenalty;
      }
      if (a.sameNamePenalty !== b.sameNamePenalty) {
        return a.sameNamePenalty - b.sameNamePenalty;
      }
      if (a.sameNotePenalty !== b.sameNotePenalty) {
        return a.sameNotePenalty - b.sameNotePenalty;
      }
      if (a.sameDishPenalty !== b.sameDishPenalty) {
        return a.sameDishPenalty - b.sameDishPenalty;
      }
      return a.index - b.index;
    });

  const selected = ranked[0].meal;
  usageMap.set(selected.name, (usageMap.get(selected.name) || 0) + 1);
  return selected;
}

function pickComponent(options, usageMap, mealsSoFar, preferredNames = []) {
  const usedDishNames = mealsSoFar.flatMap((meal) => meal.dishes || []);
  const preferredSet = new Set(preferredNames);
  const ranked = options
    .map((item, index) => ({
      item,
      index,
      count: usageMap.get(item.name) || 0,
      duplicatePenalty: usedDishNames.includes(item.name) ? 1 : 0,
      seasonalPenalty: preferredSet.size > 0 && !preferredSet.has(item.name) ? 1 : 0
    }))
    .sort((a, b) => {
      if (a.count !== b.count) {
        return a.count - b.count;
      }
      if (a.seasonalPenalty !== b.seasonalPenalty) {
        return a.seasonalPenalty - b.seasonalPenalty;
      }
      if (a.duplicatePenalty !== b.duplicatePenalty) {
        return a.duplicatePenalty - b.duplicatePenalty;
      }
      return a.index - b.index;
    });

  const selected = ranked[0].item;
  usageMap.set(selected.name, (usageMap.get(selected.name) || 0) + 1);
  return selected;
}

function mergeIngredientMaps(...sources) {
  const merged = {};
  sources.forEach((source) => {
    Object.entries(source).forEach(([name, quantity]) => {
      merged[name] = mergeQuantity(merged[name], quantity);
    });
  });
  return merged;
}

function scaleIngredientMap(source, kidsCount, adultCount) {
  const totalEquivalentAdults = (kidsCount * 0.8) + adultCount;
  const multiplier = totalEquivalentAdults / 2;
  const scaled = {};
  Object.entries(source).forEach(([name, quantity]) => {
    scaled[name] = scaleQuantity(quantity, multiplier);
  });
  return scaled;
}

function scaleQuantity(quantity, multiplier) {
  const match = quantity.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return quantity;
  }

  const scaledValue = Number(match[1]) * multiplier;
  return `${trimNumber(scaledValue)}${match[2]}`;
}

function isMonthlySpecialAlreadyUsed(mealName, usageMap) {
  if (mealName !== "カレーランチ" && mealName !== "クリームシチュー献立") {
    return false;
  }
  return (usageMap.get(mealName) || 0) >= 1;
}

function getPrimaryTypesForDay(meals) {
  const result = {};
  meals.forEach((meal) => {
    if (meal.slot === "昼") {
      result.lunch = meal.note;
    }
    if (meal.slot === "夜") {
      result.dinner = meal.note;
    }
  });
  return result;
}

function addIngredients(target, source) {
  Object.entries(source).forEach(([name, quantity]) => {
    target[name] = mergeQuantity(target[name], quantity);
  });
}

function addEstimatedCost(targetWeek, amount, itemCount) {
  targetWeek.estimatedCost += amount || 0;
  targetWeek.estimatedItemCount += itemCount || 0;
}

function mergeQuantity(existing, incoming) {
  if (!existing) {
    return incoming;
  }

  const existingMatch = existing.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const incomingMatch = incoming.match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!existingMatch || !incomingMatch || existingMatch[2] !== incomingMatch[2]) {
    return `${existing} + ${incoming}`;
  }

  const total = Number(existingMatch[1]) + Number(incomingMatch[1]);
  return `${trimNumber(total)}${existingMatch[2]}`;
}

function trimNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}

function normalizeIngredientMap(source) {
  const normalized = {};
  Object.entries(source).forEach(([name, quantity]) => {
    normalized[name] = normalizeQuantity(name, quantity);
  });
  return normalized;
}

function normalizeQuantity(name, quantity) {
  const guide = quantityNormalizationGuide[name];
  if (!guide || typeof quantity !== "string") {
    return quantity;
  }

  const match = quantity.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return quantity;
  }

  const amount = Number(match[1]);
  const unit = match[2];
  if (unit !== guide.fromUnit) {
    return quantity;
  }

  return `${trimNumber(amount * guide.multiplier)}${guide.toUnit}`;
}

function estimateIngredientMapCost(ingredients) {
  return Object.entries(ingredients).reduce((accumulator, [name, quantity]) => {
    const estimate = estimateIngredientCost(name, quantity);
    if (!estimate) {
      return accumulator;
    }
    accumulator.total += estimate.total;
    accumulator.count += 1;
    return accumulator;
  }, { total: 0, count: 0 });
}

function estimateIngredientCost(name, quantity) {
  const priceGuide = ingredientPriceGuide[name];
  if (!priceGuide || typeof quantity !== "string" || quantity.includes("+")) {
    return null;
  }

  const match = quantity.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return null;
  }

  const amount = Number(match[1]);
  const unit = match[2];
  if (unit !== priceGuide.unit) {
    return null;
  }

  return {
    total: amount * priceGuide.pricePerUnit
  };
}

function estimateBentoCost(kidsCount, adultCount) {
  return (kidsCount * 500) + (adultCount * 700);
}

function parseManualBentoDays(input, year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return [...new Set(
    String(input || "")
      .split(/[,\s、]+/)
      .map((value) => Number(value.trim()))
      .filter((value) => isManualBentoWeekday(year, month, value, daysInMonth))
  )].sort((a, b) => a - b);
}

function isManualBentoWeekday(year, month, day, daysInMonth = new Date(year, month, 0).getDate()) {
  if (!Number.isInteger(day) || day < 1 || day > daysInMonth) {
    return false;
  }

  const weekday = new Date(year, month - 1, day).getDay();
  return weekday !== 0 && weekday !== 6;
}

function createManualBentoMeal(name, kidsCount, adultCount) {
  return createMeal(name, "持参するお弁当", ["お弁当を準備"], {});
}

function renameMeal(meal, name) {
  return {
    ...meal,
    name,
    note: `${meal.note} / 持参するお弁当`
  };
}

function formatCurrency(value) {
  return `約${Math.round(value).toLocaleString("ja-JP")}円`;
}

function getSeason(month) {
  if (month >= 3 && month <= 5) {
    return "spring";
  }
  if (month >= 6 && month <= 8) {
    return "summer";
  }
  if (month >= 9 && month <= 11) {
    return "autumn";
  }
  return "winter";
}

function renderSummary(plan, bentoNames, manualBentoConfig) {
  const weekends = plan.days.filter((day) => day.isWeekend).length;
  const bentoCount = plan.days.filter((day) => day.meals.some((meal) =>
    meal.name === bentoNames.tomari || meal.name === bentoNames.sosodo
  )).length;
  const manualBentoCount = plan.days.filter((day) => day.meals.some((meal) =>
    meal.name === (manualBentoConfig.name || "持っていくお弁当")
  )).length;
  const monthlyEstimate = plan.weeks.reduce((total, week) => total + week.estimatedCost, 0);
  const seasonLabel = {
    spring: "春",
    summer: "夏",
    autumn: "秋",
    winter: "冬"
  }[plan.season];

  document.getElementById("summary-text").textContent =
    `${plan.year}年${plan.month}月は 子ども${plan.kidsCount}人・大人${plan.adultCount}人の${seasonLabel}向けで ${plan.days.length}日分の献立を作成しました。土日 ${weekends}日、${bentoNames.tomari} / ${bentoNames.sosodo} は合計 ${bentoCount}回、指定したお弁当日は ${manualBentoCount}日、月の食費目安は ${formatCurrency(monthlyEstimate)} です。`;
}

function renderMonthlyMenu(days) {
  const root = document.getElementById("monthly-menu");
  root.innerHTML = "";

  days.forEach((day) => {
    const mealsHtml = day.meals.map((meal) => `
      <div class="meal-item">
        <div class="meal-slot">${meal.slot}</div>
        <div>
          <div class="meal-name">${meal.name}</div>
          <div class="meal-note">${meal.dishes.join(" / ")}</div>
          <div class="meal-note">${meal.note}</div>
        </div>
      </div>
    `).join("");

    root.insertAdjacentHTML("beforeend", `
      <article class="day-card ${day.isWeekend ? "weekend" : ""}">
        <div class="day-head">
          <div class="day-title">${day.day}日 (${weekdayNames[day.weekday]})</div>
          <div class="tag">${day.isWeekend ? "土日3食" : "平日2食"}</div>
        </div>
        <div class="meal-list">${mealsHtml}</div>
      </article>
    `);
  });
}

function renderWeeklyShopping(weeks) {
  const root = document.getElementById("weekly-shopping");
  root.innerHTML = "";

  weeks.forEach((week) => {
    const items = Object.entries(week.ingredients)
      .sort(([a], [b]) => a.localeCompare(b, "ja"))
      .map(([name, qty]) => `
        <div class="ingredient-item">
          <div class="ingredient-name">${name}</div>
          <div class="ingredient-qty">${qty}</div>
        </div>
      `).join("");

    root.insertAdjacentHTML("beforeend", `
      <article class="week-card" data-week-label="${week.label}">
        <div class="week-head">
          <div>
            <h3>${week.label}</h3>
            <div class="week-range">${week.range}</div>
          </div>
          <div class="week-actions">
            <div class="week-cost">
              <div class="week-cost-label">買い物の目安</div>
              <div class="week-cost-value">${formatCurrency(week.estimatedCost)}</div>
            </div>
            <button type="button" class="print-button week-print-button" data-week-label="${week.label}">この週を印刷</button>
          </div>
        </div>
        <div class="week-cost-note">単価を設定できた ${week.estimatedItemCount} 品目からの概算です。地域や時期で前後します。</div>
        <div class="ingredients">${items}</div>
      </article>
    `);
  });

  root.querySelectorAll(".week-print-button").forEach((button) => {
    button.addEventListener("click", () => {
      printWeek(button.dataset.weekLabel);
    });
  });
}

function pickBentoName(date, bentoNames) {
  const weekIndex = Math.ceil(date.getDate() / 7);
  return weekIndex % 2 === 1 ? bentoNames.tomari : bentoNames.sosodo;
}

function pickMonthlySpecial(year, month) {
  return (year + month) % 2 === 0 ? "カレーランチ" : "クリームシチュー献立";
}

function shouldInsertMonthlySpecial(day, daysInMonth, existingDays, specialMealName, slotType) {
  const alreadyInserted = existingDays.some((plannedDay) => plannedDay.meals.some((meal) => meal.name === specialMealName));
  if (alreadyInserted) {
    return false;
  }

  if (slotType === "lunch" && specialMealName !== "カレーランチ") {
    return false;
  }

  if (slotType === "dinner" && specialMealName !== "クリームシチュー献立") {
    return false;
  }

  const preferredDay = Math.max(3, Math.floor(daysInMonth * 0.4));
  return day >= preferredDay;
}

function printSection(section) {
  const monthlyPanel = document.querySelector("#monthly-menu").closest(".panel");
  const shoppingPanel = document.querySelector("#weekly-shopping").closest(".panel");

  monthlyPanel.classList.toggle("print-hidden", section !== "menu");
  shoppingPanel.classList.toggle("print-hidden", section !== "shopping");

  window.print();

  monthlyPanel.classList.remove("print-hidden");
  shoppingPanel.classList.remove("print-hidden");
}

function printWeek(weekLabel) {
  const monthlyPanel = document.querySelector("#monthly-menu").closest(".panel");
  const shoppingPanel = document.querySelector("#weekly-shopping").closest(".panel");
  const weekCards = Array.from(document.querySelectorAll("#weekly-shopping .week-card"));

  monthlyPanel.classList.add("print-hidden");
  shoppingPanel.classList.remove("print-hidden");

  weekCards.forEach((card) => {
    card.classList.toggle("print-hidden", card.dataset.weekLabel !== weekLabel);
  });

  window.print();

  monthlyPanel.classList.remove("print-hidden");
  weekCards.forEach((card) => {
    card.classList.remove("print-hidden");
  });
}

if (typeof module !== "undefined") {
  module.exports = {
    generateMonthlyPlan,
    mergeQuantity,
    shouldUseBento,
    estimateIngredientCost,
    estimateBentoCost,
    parseManualBentoDays
  };
}

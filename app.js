let quantityNormalizationGuide = {};
let ingredientPriceGuide = {};
let renderedDays = [];

const recipeGuide = {
  "親子丼": ["鶏肉と玉ねぎを食べやすく切る。", "フライパンで鶏肉と玉ねぎを煮て火を通す。", "溶き卵を回し入れて半熟で止め、ごはんにのせる。"],
  "焼きそば": ["具材を切って肉から炒める。", "野菜と麺を加えてほぐしながら炒める。", "ソースで味を整えて仕上げる。"],
  "チャーハン": ["具材を刻み、卵を溶く。", "卵とごはんを手早く炒める。", "具材と調味料を加えて全体をまとめる。"],
  "きつねうどん": ["油揚げを軽く煮て味を含ませる。", "うどんをゆでて器に入れる。", "温かいつゆを注ぎ、油揚げとねぎをのせる。"],
  "カレーライス": ["野菜と肉を切って炒める。", "水を加えてやわらかく煮る。", "ルウを溶かしてとろみがつくまで温め、ごはんに添える。"],
  "鶏そぼろ丼": ["ひき肉をほぐしながら炒める。", "甘辛く味付けして汁気を飛ばす。", "炒り卵と一緒にごはんへ盛る。"],
  "ナポリタン": ["具材を切って炒める。", "ゆでたパスタを加える。", "ケチャップで全体を炒め合わせる。"],
  "牛丼": ["玉ねぎを薄切りにする。", "牛肉と玉ねぎを甘辛く煮る。", "ごはんにのせて汁を回しかける。"],
  "オムそば": ["焼きそばを作って皿にまとめる。", "薄焼き卵を作る。", "焼きそばに卵をかぶせて整える。"],
  "中華丼": ["具材を炒めて火を通す。", "スープで煮てとろみをつける。", "ごはんにかけて仕上げる。"],
  "焼き鳥丼": ["鶏肉とねぎを食べやすく切る。", "こんがり焼いて甘辛く味付けする。", "ごはんにのせる。"],
  "ビビンバ丼": ["具材をそれぞれ加熱して味をつける。", "ひき肉を炒めてそぼろ状にする。", "ごはんに彩りよく盛る。"],
  "天津飯": ["卵あん用の材料を用意する。", "ふんわり卵を焼いてごはんにのせる。", "あんを作って上からかける。"],
  "焼売": ["蒸し器かレンジの表示に合わせて加熱する。", "火が通ったら取り出す。", "ごはんや副菜と一緒に盛る。"],
  "ミートボール": ["袋やパッケージの表示に合わせて温める。", "ソースを全体にからめる。", "ごはんと一緒に盛る。"],
  "ミニグラタン": ["オーブンまたはトースターを温める。", "表示時間に合わせて加熱する。", "表面が温まり軽く焼き色がついたら仕上げる。"],
  "鶏の照り焼き": ["鶏肉の水気をふいて焼く。", "両面に火が通ったら調味料を加える。", "照りが出るまで煮からめる。"],
  "豚しょうが焼き": ["豚肉と玉ねぎを広げて焼く。", "しょうがだれを加える。", "汁気をからめて仕上げる。"],
  "サバの塩焼き": ["魚の水気をふく。", "グリルやフライパンで両面を焼く。", "火が通ったら盛る。"],
  "麻婆豆腐": ["ひき肉とねぎを炒める。", "豆腐を加えて崩さないよう温める。", "麻婆だれを加えてまとめる。"],
  "オムライス": ["チキンライスを作る。", "卵を半熟に焼く。", "チキンライスにのせて整える。"],
  "肉じゃが": ["具材を切って軽く炒める。", "だしで煮てやわらかくする。", "調味料を加えて味を含ませる。"],
  "クリームシチュー": ["具材を炒めて火を通す。", "水で煮てやわらかくする。", "ルウと牛乳を加えてとろみを出す。"],
  "鮭の塩焼き": ["鮭の水気をふく。", "グリルやフライパンで焼く。", "火が通ったら盛る。"],
  "チキン南蛮": ["鶏肉に火を通して揚げ焼きにする。", "甘酢にくぐらせる。", "タルタルソースを添える。"],
  "ハンバーグ": ["たねをこねて形を作る。", "両面を焼いて中まで火を通す。", "ソースをからめて仕上げる。"],
  "豚肉の野菜炒め": ["肉から炒めて火を通す。", "野菜を加えてさっと炒める。", "味付けして水気を飛ばす。"],
  "鶏団子鍋": ["鍋つゆを温める。", "鶏団子を入れて火を通す。", "野菜やきのこを加えて煮る。"],
  "回鍋肉": ["肉と野菜を順に炒める。", "回鍋肉のたれを加える。", "全体を手早くまとめる。"],
  "塩さば": ["表面の水気をふく。", "グリルやフライパンで焼く。", "焼き色がついたら盛る。"],
  "エビ寄せフライ": ["表示に合わせて揚げるか温める。", "油を切って盛る。", "付け合わせと一緒に出す。"],
  "春巻き": ["表示に合わせて揚げるか温める。", "中まで温まったら取り出す。", "食べやすく盛る。"],
  "コロッケ": ["表示に合わせて揚げるか温める。", "油を切る。", "千切り野菜などを添える。"],
  "唐揚げ": ["鶏肉に下味をつける。", "衣をまぶして揚げる。", "油を切って盛る。"],
  "焼き鮭": ["鮭の水気をふく。", "両面を焼いて火を通す。", "粗熱を取って盛る。"],
  "鶏そぼろ": ["ひき肉をほぐしながら炒める。", "甘辛く味付けする。", "汁気を飛ばして仕上げる。"],
  "豚の生姜焼き": ["豚肉を広げて焼く。", "しょうがだれを加える。", "つやが出たら止める。"]
};

const condimentGuide = {
  "親子丼": ["醤油", "みりん", "砂糖", "だし"],
  "焼きそば": ["焼きそばソース", "塩", "こしょう"],
  "チャーハン": ["塩", "こしょう", "醤油", "鶏がらスープの素"],
  "きつねうどん": ["めんつゆ", "醤油", "みりん"],
  "カレーライス": ["カレールウ", "塩", "こしょう"],
  "鶏そぼろ丼": ["醤油", "砂糖", "みりん"],
  "ナポリタン": ["ケチャップ", "塩", "こしょう"],
  "牛丼": ["醤油", "みりん", "砂糖", "だし"],
  "オムそば": ["ソース", "塩", "こしょう"],
  "中華丼": ["鶏がらスープの素", "醤油", "オイスターソース", "片栗粉"],
  "焼き鳥丼": ["醤油", "みりん", "砂糖"],
  "ビビンバ丼": ["ごま油", "醤油", "焼肉のたれ"],
  "天津飯": ["醤油", "酢", "砂糖", "片栗粉"],
  "焼売": ["からし", "醤油"],
  "ミートボール": ["ケチャップ", "ソース"],
  "ミニグラタン": ["塩", "こしょう"],
  "鶏の照り焼き": ["醤油", "みりん", "砂糖"],
  "豚しょうが焼き": ["醤油", "みりん", "しょうが"],
  "サバの塩焼き": ["塩"],
  "麻婆豆腐": ["麻婆豆腐の素", "ごま油"],
  "オムライス": ["ケチャップ", "塩", "こしょう"],
  "肉じゃが": ["醤油", "みりん", "砂糖", "だし"],
  "クリームシチュー": ["シチュールウ", "塩", "こしょう"],
  "鮭の塩焼き": ["塩"],
  "チキン南蛮": ["酢", "砂糖", "醤油", "タルタルソース"],
  "ハンバーグ": ["塩", "こしょう", "ケチャップ", "ソース"],
  "豚肉の野菜炒め": ["塩", "こしょう", "醤油"],
  "鶏団子鍋": ["だし", "醤油", "塩"],
  "回鍋肉": ["回鍋肉の素"],
  "塩さば": ["塩"],
  "エビ寄せフライ": ["中濃ソース", "タルタルソース"],
  "春巻き": ["醤油", "からし"],
  "コロッケ": ["中濃ソース"],
  "唐揚げ": ["醤油", "しょうが", "にんにく"],
  "焼き鮭": ["塩"],
  "鶏そぼろ": ["醤油", "みりん", "砂糖"],
  "豚の生姜焼き": ["醤油", "みりん", "しょうが"]
};

const preparedDishNames = new Set([
  "焼売",
  "ミートボール",
  "ミニグラタン",
  "エビ寄せフライ",
  "春巻き",
  "コロッケ",
  "ポテサラ",
  "マカロニサラダ惣菜",
  "きんぴらごぼう惣菜",
  "鮭フレーク",
  "そぼろ瓶",
  "お弁当",
  "お弁当を準備",
  "付け合わせ",
  "汁物はなし"
]);

const fullRecipeCatalog = {
  "鮭おにぎり": createRecipe(["塩", "鮭フレーク"], [
    "温かいごはんに塩少々を混ぜ、鮭フレークを全体に散らす。",
    "手を軽くぬらしてごはんを取り、具が真ん中にくるように握る。",
    "形を整え、必要ならのりを巻いて仕上げる。"
  ]),
  "バタートースト": createRecipe(["バター"], [
    "食パンをトースターでこんがり焼く。",
    "熱いうちにバターを全体へぬる。",
    "食べやすく切って出す。"
  ]),
  "ヨーグルト": createRecipe(["はちみつ"], [
    "器にヨーグルトを盛る。",
    "好みではちみつや果物を添える。",
    "冷たいまま出す。"
  ]),
  "納豆ごはん": createRecipe(["しょうゆ", "からし"], [
    "納豆をたれやからしとよく混ぜる。",
    "温かいごはんを茶碗によそう。",
    "納豆をのせ、好みでねぎを散らす。"
  ]),
  "ハムチーズトースト": createRecipe(["バター", "マヨネーズ"], [
    "食パンに薄くバターかマヨネーズをぬる。",
    "ハムとチーズをのせてトースターで焼く。",
    "チーズが溶けたら取り出して仕上げる。"
  ]),
  "しらすごはん": createRecipe(["しょうゆ"], [
    "温かいごはんを器によそう。",
    "しらすをのせる。",
    "好みでしょうゆを少したらして仕上げる。"
  ]),
  "たまごサンド": createRecipe(["マヨネーズ", "塩", "こしょう"], [
    "卵をゆでて殻をむき、粗くつぶす。",
    "マヨネーズ、塩、こしょうで和えて卵サラダを作る。",
    "食パンにはさんで切る。"
  ]),
  "鮭茶漬け": createRecipe(["お茶漬けの素"], [
    "ごはんを器によそう。",
    "鮭フレークとお茶漬けの素をのせる。",
    "熱いお茶または湯を注いで仕上げる。"
  ]),
  "フレンチトースト": createRecipe(["砂糖", "バター"], [
    "卵、牛乳、砂糖を混ぜて卵液を作る。",
    "食パンを卵液に浸してしみ込ませる。",
    "バターを溶かしたフライパンで両面を焼く。"
  ]),
  "親子丼": createRecipe(["しょうゆ", "みりん", "砂糖", "だし"], [
    "玉ねぎは薄切り、鶏肉はひと口大に切る。",
    "だしと調味料で玉ねぎと鶏肉を煮る。",
    "溶き卵を回し入れて半熟で止め、ごはんにのせる。"
  ]),
  "焼きそば": createRecipe(["焼きそばソース", "塩", "こしょう"], [
    "肉と野菜を順に炒める。",
    "麺を加えてほぐし、水少々を入れて蒸し焼きにする。",
    "ソースで味をつけて全体を炒め合わせる。"
  ]),
  "チャーハン": createRecipe(["塩", "こしょう", "しょうゆ", "鶏がらスープの素"], [
    "卵を炒めて半熟にし、ごはんを加えてほぐす。",
    "刻んだ具材を加えてさらに炒める。",
    "調味料で味を整え、仕上げにしょうゆを回しかける。"
  ]),
  "きつねうどん": createRecipe(["めんつゆ", "しょうゆ", "みりん"], [
    "油揚げは甘辛くさっと煮ておく。",
    "うどんをゆでるか温めて器に入れる。",
    "熱いつゆを注ぎ、油揚げとねぎをのせる。"
  ]),
  "カレーライス": createRecipe(["カレールウ", "塩", "こしょう"], [
    "肉、玉ねぎ、にんじん、じゃがいもを炒める。",
    "水を加えて野菜がやわらかくなるまで煮る。",
    "火を止めてルウを溶かし、再度温めてとろみを出す。"
  ]),
  "鶏そぼろ丼": createRecipe(["しょうゆ", "みりん", "砂糖"], [
    "鶏ひき肉をほぐしながら炒める。",
    "しょうゆ、みりん、砂糖で甘辛く味付けする。",
    "汁気を飛ばし、ごはんにのせる。"
  ]),
  "ナポリタン": createRecipe(["ケチャップ", "塩", "こしょう", "バター"], [
    "パスタをゆでる。",
    "玉ねぎ、ピーマン、ウインナーを炒める。",
    "パスタを加えてケチャップで炒め合わせ、味を整える。"
  ]),
  "牛丼": createRecipe(["しょうゆ", "みりん", "砂糖", "だし"], [
    "玉ねぎを薄切りにし、牛肉は食べやすくする。",
    "だしと調味料で玉ねぎを煮て、牛肉を加える。",
    "アクを取りながら煮て、ごはんにのせる。"
  ]),
  "オムそば": createRecipe(["ソース", "塩", "こしょう", "ケチャップ"], [
    "焼きそばを作って皿にまとめる。",
    "卵を溶いて薄焼きにする。",
    "焼きそばに卵をかぶせ、好みでソースをかける。"
  ]),
  "中華丼": createRecipe(["鶏がらスープの素", "しょうゆ", "オイスターソース", "片栗粉"], [
    "肉と野菜を火の通りに合わせて炒める。",
    "スープと調味料を加えて煮る。",
    "水溶き片栗粉でとろみをつけ、ごはんにかける。"
  ]),
  "焼き鳥丼": createRecipe(["しょうゆ", "みりん", "砂糖"], [
    "鶏肉とねぎを食べやすく切る。",
    "フライパンで焼き目をつけ、調味料を加えて煮からめる。",
    "ごはんにのせる。"
  ]),
  "ビビンバ丼": createRecipe(["ごま油", "しょうゆ", "焼肉のたれ", "コチュジャン"], [
    "ひき肉を炒めて調味料で味をつける。",
    "野菜はそれぞれゆでるか炒めて下味をつける。",
    "ごはんに具を彩りよくのせる。"
  ]),
  "天津飯": createRecipe(["しょうゆ", "酢", "砂糖", "片栗粉", "鶏がらスープの素"], [
    "卵を溶き、かにかまを混ぜて半熟の卵焼きを作る。",
    "別鍋でスープと調味料を温める。",
    "水溶き片栗粉であんを作り、卵をのせたごはんにかける。"
  ]),
  "鶏の照り焼き": createRecipe(["しょうゆ", "みりん", "砂糖"], [
    "鶏肉の余分な水気をふき、皮目から焼く。",
    "裏返して中まで火を通す。",
    "調味料を加えて照りが出るまで煮からめる。"
  ]),
  "豚しょうが焼き": createRecipe(["しょうゆ", "みりん", "しょうが"], [
    "豚肉を広げて焼き、玉ねぎも一緒に炒める。",
    "火が通ったらしょうが入りのたれを加える。",
    "汁気を軽く煮詰めて仕上げる。"
  ]),
  "サバの塩焼き": createRecipe(["塩"], [
    "さばの水気をふき、塩をふる。",
    "グリルやフライパンで皮目から焼く。",
    "両面に火が通ったら盛る。"
  ]),
  "麻婆豆腐": createRecipe(["麻婆豆腐の素", "ごま油"], [
    "ひき肉とねぎを炒める。",
    "豆腐を加えて崩しすぎないよう温める。",
    "麻婆豆腐の素で味をまとめ、仕上げにごま油を加える。"
  ]),
  "オムライス": createRecipe(["ケチャップ", "塩", "こしょう", "バター"], [
    "鶏肉と玉ねぎを炒め、ごはんとケチャップでチキンライスを作る。",
    "卵を溶いてフライパンで半熟に焼く。",
    "チキンライスに卵をのせて包むかかぶせる。"
  ]),
  "肉じゃが": createRecipe(["しょうゆ", "みりん", "砂糖", "だし"], [
    "じゃがいも、玉ねぎ、にんじん、肉を切る。",
    "鍋で軽く炒めてからだしを加えて煮る。",
    "調味料を加え、汁気が落ち着くまで煮含める。"
  ]),
  "クリームシチュー": createRecipe(["シチュールウ", "塩", "こしょう"], [
    "肉と野菜をバターや油で炒める。",
    "水を加えて具材がやわらかくなるまで煮る。",
    "ルウと牛乳を加えてとろみがつくまで温める。"
  ]),
  "鮭の塩焼き": createRecipe(["塩"], [
    "鮭の水気をふき、塩をふる。",
    "グリルやフライパンで両面を焼く。",
    "中まで火が通ったら仕上げる。"
  ]),
  "チキン南蛮": createRecipe(["しょうゆ", "酢", "砂糖", "タルタルソース"], [
    "鶏肉に下味をつけて衣をまとわせ、揚げ焼きにする。",
    "しょうゆ、酢、砂糖で作った甘酢にくぐらせる。",
    "器に盛ってタルタルソースを添える。"
  ]),
  "ハンバーグ": createRecipe(["塩", "こしょう", "ケチャップ", "中濃ソース"], [
    "ひき肉に塩を加えてよく練り、玉ねぎ、卵、パン粉を混ぜる。",
    "小判形にして中央をくぼませ、両面を焼く。",
    "ふたをして中まで火を通し、ソースをかける。"
  ]),
  "豚肉の野菜炒め": createRecipe(["塩", "こしょう", "しょうゆ", "ごま油"], [
    "豚肉を先に炒めて取り出す。",
    "野菜を強めの火でさっと炒める。",
    "豚肉を戻し、調味料で手早くまとめる。"
  ]),
  "鶏団子鍋": createRecipe(["だし", "しょうゆ", "塩"], [
    "鍋にだしを温める。",
    "鶏団子を入れて火を通す。",
    "白菜やねぎ、えのきを加えて煮る。"
  ]),
  "回鍋肉": createRecipe(["回鍋肉の素"], [
    "豚肉を炒めて一度取り出す。",
    "キャベツとピーマンを炒める。",
    "肉を戻し、回鍋肉の素で全体を炒め合わせる。"
  ]),
  "塩さば": createRecipe(["塩"], [
    "塩さばの水気をふく。",
    "皮目から香ばしく焼く。",
    "裏返して中まで火を通す。"
  ]),
  "唐揚げ": createRecipe(["しょうゆ", "しょうが", "にんにく", "片栗粉"], [
    "鶏肉を食べやすく切り、しょうゆ、しょうが、にんにくで下味をつける。",
    "片栗粉をまぶす。",
    "油で揚げて中まで火を通す。"
  ]),
  "焼き鮭": createRecipe(["塩"], [
    "鮭の水気をふく。",
    "グリルやフライパンで両面を焼く。",
    "火が通ったら取り出す。"
  ]),
  "鶏そぼろ": createRecipe(["しょうゆ", "みりん", "砂糖"], [
    "鶏ひき肉をフライパンへ入れ、ほぐしながら加熱する。",
    "しょうゆ、みりん、砂糖を加える。",
    "汁気が少なくなるまで炒りつける。"
  ]),
  "豚の生姜焼き": createRecipe(["しょうゆ", "みりん", "しょうが"], [
    "豚肉を広げて焼く。",
    "しょうがを利かせたたれを加える。",
    "つやが出るまでからめる。"
  ]),
  "ほうれん草のおひたし": createRecipe(["しょうゆ", "だし"], [
    "ほうれん草をさっとゆでて冷水に取る。",
    "水気をしっかり絞って食べやすく切る。",
    "だししょうゆをかけて仕上げる。"
  ]),
  "きゅうりの浅漬け": createRecipe(["塩", "酢"], [
    "きゅうりを薄切りにする。",
    "塩をまぶしてしばらく置き、水気を絞る。",
    "酢を加えて軽くなじませる。"
  ]),
  "トマトサラダ": createRecipe(["オリーブオイル", "塩", "こしょう"], [
    "トマトを食べやすく切る。",
    "器に盛って調味料を回しかける。",
    "冷やして出す。"
  ]),
  "ゆで卵": createRecipe(["塩"], [
    "卵を水から入れて加熱する。",
    "好みの固さになったら冷水に取る。",
    "殻をむいて仕上げる。"
  ]),
  "バナナ": createRecipe([], [
    "食べやすい長さに切る。",
    "必要なら皮をむいて器に盛る。",
    "そのまま出す。"
  ]),
  "りんご": createRecipe(["塩水"], [
    "りんごを洗ってくし形に切る。",
    "好みで皮をむき、変色防止に薄い塩水へさっとくぐらせる。",
    "水気を切って盛る。"
  ]),
  "ハッシュドポテト": createRecipe(["塩", "こしょう"], [
    "じゃがいもを細切りまたはすりおろして水気を切る。",
    "塩、こしょうで下味をつける。",
    "フライパンで両面をこんがり焼く。"
  ]),
  "豆腐とわかめの味噌汁": createRecipe(["味噌", "だし"], [
    "鍋でだしを温める。",
    "豆腐とわかめを加えて軽く煮る。",
    "火を弱めて味噌を溶き入れる。"
  ]),
  "ねぎの味噌汁": createRecipe(["味噌", "だし"], [
    "鍋でだしを温める。",
    "ねぎを加えてやわらかくする。",
    "味噌を溶き入れて仕上げる。"
  ]),
  "コーンスープ": createRecipe(["コンソメ", "塩", "こしょう"], [
    "鍋に水または牛乳とコーンを入れて温める。",
    "コンソメを加える。",
    "塩、こしょうで味を整える。"
  ]),
  "じゃがいもの味噌汁": createRecipe(["味噌", "だし"], [
    "じゃがいもを薄めに切る。",
    "だしでじゃがいもがやわらかくなるまで煮る。",
    "味噌を溶いて仕上げる。"
  ]),
  "冷ややっこ": createRecipe(["しょうゆ", "おろししょうが"], [
    "豆腐の水気を軽く切る。",
    "器に盛る。",
    "しょうゆやおろししょうがを添える。"
  ]),
  "コールスロー": createRecipe(["マヨネーズ", "酢", "塩", "こしょう"], [
    "キャベツとにんじんをせん切りにする。",
    "塩少々でもんで水気を絞る。",
    "マヨネーズと酢で和え、こしょうで整える。"
  ]),
  "小松菜のおひたし": createRecipe(["しょうゆ", "だし"], [
    "小松菜をさっとゆでる。",
    "冷水に取り、水気を絞って切る。",
    "だししょうゆで和える。"
  ]),
  "春雨サラダ": createRecipe(["酢", "しょうゆ", "砂糖", "ごま油"], [
    "春雨をゆでて水気を切る。",
    "きゅうりを細切りにする。",
    "調味料を合わせて全体を和える。"
  ]),
  "ちくわ磯辺焼き": createRecipe(["しょうゆ", "青のり"], [
    "ちくわを食べやすく切る。",
    "青のりを混ぜた衣をからめる。",
    "フライパンか揚げ焼きで火を通す。"
  ]),
  "ポテトサラダ": createRecipe(["マヨネーズ", "塩", "こしょう", "酢"], [
    "じゃがいもをやわらかくゆでて湯を切り、熱いうちにつぶす。",
    "薄切り玉ねぎは水にさらし、きゅうりは塩もみして水気を切る。",
    "じゃがいもに酢と塩で下味をつけ、具材とマヨネーズを混ぜてこしょうで整える。"
  ]),
  "ブロッコリーサラダ": createRecipe(["マヨネーズ", "塩", "こしょう"], [
    "ブロッコリーを小房に分けてゆでる。",
    "水気をよく切って粗熱を取る。",
    "調味料で和える。"
  ]),
  "味噌汁": createRecipe(["味噌", "だし"], [
    "鍋でだしを温める。",
    "具材を加えて火を通す。",
    "火を弱めて味噌を溶き入れる。"
  ]),
  "わかめスープ": createRecipe(["鶏がらスープの素", "塩", "こしょう"], [
    "鍋に湯を沸かしてスープの素を入れる。",
    "わかめを加えて戻す。",
    "塩、こしょうで味を整える。"
  ]),
  "中華スープ": createRecipe(["鶏がらスープの素", "塩", "こしょう", "ごま油"], [
    "鍋に湯を沸かしてスープの素を溶かす。",
    "溶き卵を細く流し入れる。",
    "ごま油少々で香りをつける。"
  ]),
  "コンソメスープ": createRecipe(["コンソメ", "塩", "こしょう"], [
    "鍋で湯を沸かし、コンソメを溶かす。",
    "玉ねぎなど具材を加えて煮る。",
    "塩、こしょうで味を整える。"
  ]),
  "ブロッコリーのおかか和え": createRecipe(["しょうゆ", "かつお節"], [
    "ブロッコリーを小房に分けてゆでる。",
    "水気を切って粗熱を取る。",
    "しょうゆとかつお節で和える。"
  ]),
  "きんぴらごぼう": createRecipe(["しょうゆ", "みりん", "ごま油", "赤唐辛子"], [
    "ごぼうとにんじんを細切りにする。",
    "ごま油で炒めてしんなりさせる。",
    "しょうゆとみりんで味をつけ、汁気が少なくなるまで炒める。"
  ]),
  "卵焼き": createRecipe(["砂糖", "しょうゆ", "塩"], [
    "卵を溶いて調味料を混ぜる。",
    "薄く油をひいた卵焼き器に数回に分けて流し入れる。",
    "巻きながら焼いて形を整える。"
  ]),
  "ほうれん草のごま和え": createRecipe(["すりごま", "しょうゆ", "砂糖"], [
    "ほうれん草をゆでて冷水に取り、水気を絞って切る。",
    "すりごま、しょうゆ、砂糖を混ぜる。",
    "ほうれん草を和えて仕上げる。"
  ]),
  "ミニトマト": createRecipe([], [
    "へたを取ってよく洗う。",
    "水気をふく。",
    "そのまま器に盛る。"
  ]),
  "千切りキャベツ": createRecipe(["塩", "好みでドレッシング"], [
    "キャベツを細くせん切りにする。",
    "冷水にさっとさらしてしゃきっとさせる。",
    "水気を切って盛る。"
  ]),
  "ひじき煮": createRecipe(["しょうゆ", "みりん", "砂糖", "だし"], [
    "ひじきを戻し、にんじんと油揚げを細切りにする。",
    "具材を炒めてだしを加える。",
    "調味料を加えて汁気が少なくなるまで煮る。"
  ]),
  "もやしナムル": createRecipe(["ごま油", "塩", "鶏がらスープの素"], [
    "もやしをさっとゆでる。",
    "水気をよく切る。",
    "ごま油、塩、スープの素で和える。"
  ]),
  "ツナサラダ": createRecipe(["マヨネーズ", "塩", "こしょう"], [
    "レタスを洗ってちぎる。",
    "ツナの油を軽く切る。",
    "全体を混ぜて調味料で整える。"
  ]),
  "マカロニサラダ": createRecipe(["マヨネーズ", "塩", "こしょう", "酢"], [
    "マカロニを表示通りにゆでる。",
    "きゅうりは塩もみし、ハムは細切りにする。",
    "粗熱を取ったマカロニと具材をマヨネーズで和える。"
  ]),
  "切り干し大根": createRecipe(["しょうゆ", "みりん", "砂糖", "だし"], [
    "切り干し大根を戻して水気を絞る。",
    "にんじん、油揚げと一緒に炒める。",
    "だしと調味料を加え、煮含める。"
  ]),
  "白菜の浅漬け": createRecipe(["塩", "昆布"], [
    "白菜を食べやすく切る。",
    "塩をまぶしてしばらく置く。",
    "水気を軽く絞り、昆布と一緒になじませる。"
  ]),
  "豆腐の味噌汁": createRecipe(["味噌", "だし"], [
    "鍋でだしを温める。",
    "豆腐を加えて温める。",
    "味噌を溶き入れる。"
  ]),
  "卵スープ": createRecipe(["鶏がらスープの素", "塩", "こしょう", "ごま油"], [
    "鍋でスープを温める。",
    "溶き卵を少しずつ流し入れる。",
    "塩、こしょうで味を整え、ごま油を落とす。"
  ]),
  "なめこの味噌汁": createRecipe(["味噌", "だし"], [
    "鍋でだしを温める。",
    "なめこを加えてさっと煮る。",
    "味噌を溶いて仕上げる。"
  ]),
  "白菜スープ": createRecipe(["コンソメ", "塩", "こしょう"], [
    "白菜を食べやすく切る。",
    "コンソメスープで白菜をやわらかく煮る。",
    "塩、こしょうで味を整える。"
  ]),
  "大根の味噌汁": createRecipe(["味噌", "だし"], [
    "大根を薄切りまたはいちょう切りにする。",
    "だしでやわらかくなるまで煮る。",
    "味噌を溶き入れる。"
  ])
};

const condimentAliasGuide = {
  "しょうゆ": "醤油",
  "だし": "和風だし",
  "ごま油": "ごま油",
  "オリーブオイル": "オリーブオイル",
  "マヨネーズ": "マヨネーズ",
  "ケチャップ": "ケチャップ",
  "中濃ソース": "中濃ソース",
  "焼きそばソース": "焼きそばソース",
  "鶏がらスープの素": "鶏がらスープの素",
  "コンソメ": "コンソメ",
  "味噌": "味噌",
  "砂糖": "砂糖",
  "塩": "塩",
  "こしょう": "こしょう",
  "酢": "酢",
  "片栗粉": "片栗粉",
  "バター": "バター",
  "にんにく": "にんにく",
  "しょうが": "しょうが",
  "コチュジャン": "コチュジャン",
  "タルタルソース": "タルタルソース",
  "回鍋肉の素": "回鍋肉の素",
  "麻婆豆腐の素": "麻婆豆腐の素",
  "からし": "からし",
  "昆布": "昆布",
  "かつお節": "かつお節",
  "赤唐辛子": "赤唐辛子",
  "焼肉のたれ": "焼肉のたれ"
};

const condimentAmountGuide = {
  "醤油": "10ml",
  "みりん": "10ml",
  "砂糖": "5g",
  "塩": "2g",
  "こしょう": "1g",
  "酢": "10ml",
  "和風だし": "400ml",
  "鶏がらスープの素": "1食分",
  "コンソメ": "1個",
  "ごま油": "5ml",
  "オリーブオイル": "5ml",
  "マヨネーズ": "24g",
  "すりごま": "12g",
  "ケチャップ": "30g",
  "中濃ソース": "15ml",
  "焼きそばソース": "30ml",
  "味噌": "36g",
  "片栗粉": "9g",
  "バター": "10g",
  "にんにく": "1片",
  "しょうが": "1片",
  "コチュジャン": "5g",
  "タルタルソース": "24g",
  "回鍋肉の素": "1箱",
  "麻婆豆腐の素": "1箱",
  "からし": "2g",
  "昆布": "5cm",
  "かつお節": "1袋",
  "赤唐辛子": "1本",
  "焼肉のたれ": "15ml"
};

function createRecipe(condiments, steps) {
  return { condiments, steps };
}

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
    "ヨーグルト": "200g",
    "バナナ": "2本",
    "グラノーラ": "100g",
    "食パン": "4枚",
    "はちみつ": "20g"
  }),
  createMeal("納豆ごはん朝食", "定番", ["納豆ごはん"], {
    "ごはん": "2合",
    "納豆": "3パック",
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
    "マヨネーズ": "40g"
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
    "ケチャップ": "60g"
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
  }),
  createMeal("焼売ランチ", "既製品", ["焼売", "ごはん"], {
    "焼売": "1袋",
    "ごはん": "3合",
    "ブロッコリー": "1株"
  }),
  createMeal("ミートボールランチ", "既製品", ["ミートボール", "ごはん"], {
    "ミートボール": "1袋",
    "ごはん": "3合",
    "卵": "3個"
  }),
  createMeal("ミニグラタンランチ", "既製品", ["ミニグラタン", "ごはん"], {
    "ミニグラタン": "1袋",
    "ごはん": "3合",
    "ミニトマト": "8個"
  })
];

const dinnerOptions = [
  createMeal("鶏の照り焼き定食", "主菜", ["鶏の照り焼き"], {
    "鶏もも肉": "2枚",
    "キャベツ": "0.5玉"
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
    "豆腐": "1丁",
    "長ねぎ": "1本",
    "麻婆豆腐の素": "1箱"
  }),
  createMeal("オムライスプレート", "洋食", ["オムライス"], {
    "ごはん": "3合",
    "卵": "4個",
    "鶏もも肉": "200g",
    "玉ねぎ": "1個",
    "ケチャップ": "60g"
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
  }),
  createMeal("エビ寄せフライ定食", "既製品", ["エビ寄せフライ"], {
    "エビ寄せフライ": "1袋",
    "ごはん": "2合",
    "キャベツ": "0.5玉"
  }),
  createMeal("春巻き定食", "既製品", ["春巻き"], {
    "春巻き": "1袋",
    "ごはん": "2合",
    "レタス": "1玉"
  }),
  createMeal("コロッケ定食", "既製品", ["コロッケ"], {
    "コロッケ": "1袋",
    "ごはん": "2合",
    "キャベツ": "0.5玉"
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
    "ケチャップ": "45g"
  })
];

const sideOptions = {
  breakfast: [
    createSide("ほうれん草のおひたし", { "ほうれん草": "1束" }),
    createSide("きゅうりの浅漬け", { "きゅうり": "2本" }),
    createSide("トマトサラダ", { "トマト": "2個" }),
    createSide("ゆで卵", { "卵": "2個" }),
    createSide("バナナ", { "バナナ": "2本" }),
    createSide("りんご", { "りんご": "2個" }),
    createSide("ヨーグルト", { "ヨーグルト": "200g" }),
    createSide("ハッシュドポテト", { "じゃがいも": "2個" })
  ],
  breakfastSoup: [
    createSide("豆腐とわかめの味噌汁", { "豆腐": "0.5丁", "わかめ": "4g" }),
    createSide("ねぎの味噌汁", { "ねぎ": "20g" }),
    createSide("コーンスープ", { "コーンスープ": "2食分" }),
    createSide("じゃがいもの味噌汁", { "じゃがいも": "1個" })
  ],
  lunch: [
    createSide("冷ややっこ", { "豆腐": "1丁" }),
    createSide("コールスロー", { "キャベツ": "0.5玉", "にんじん": "1本" }),
    createSide("小松菜のおひたし", { "小松菜": "1束" }),
    createSide("春雨サラダ", { "春雨": "1袋", "きゅうり": "2本" }),
    createSide("ちくわ磯辺焼き", { "ちくわ": "1袋" }),
    createSide("ポテトサラダ", { "じゃがいも": "3個", "きゅうり": "2本" }),
    createSide("ブロッコリーサラダ", { "ブロッコリー": "1株" }),
    createSide("ポテサラ", { "ポテトサラダ惣菜": "1パック" }),
    createSide("マカロニサラダ惣菜", { "マカロニサラダ惣菜": "1パック" }),
    createSide("きんぴらごぼう惣菜", { "きんぴらごぼう惣菜": "1パック" })
  ],
  lunchSoup: [
    createSide("味噌汁", { "豆腐": "0.5丁" }),
    createSide("わかめスープ", { "わかめ": "4g" }),
    createSide("中華スープ", { "卵": "2個" }),
    createSide("コンソメスープ", { "玉ねぎ": "0.5個" })
  ],
  bento: [
    createSide("ブロッコリーのおかか和え", { "ブロッコリー": "1株" }),
    createSide("きんぴらごぼう", { "ごぼう": "1本", "にんじん": "1本" }),
    createSide("卵焼き", { "卵": "2個" }),
    createSide("ポテトサラダ", { "じゃがいも": "3個", "きゅうり": "2本" }),
    createSide("ほうれん草のごま和え", { "ほうれん草": "1束" }),
    createSide("ミニトマト", { "ミニトマト": "8個" })
  ],
  dinner: [
    createSide("ポテトサラダ", { "じゃがいも": "3個", "きゅうり": "2本" }),
    createSide("ポテサラ", { "ポテトサラダ惣菜": "1パック" }),
    createSide("千切りキャベツ", { "キャベツ": "0.5玉" }),
    createSide("ひじき煮", { "ひじき": "1袋", "にんじん": "1本", "油揚げ": "1パック" }),
    createSide("もやしナムル", { "もやし": "1袋" }),
    createSide("ブロッコリーサラダ", { "ブロッコリー": "1株" }),
    createSide("冷ややっこ", { "豆腐": "1丁" }),
    createSide("ほうれん草のごま和え", { "ほうれん草": "1束" }),
    createSide("きんぴらごぼう", { "ごぼう": "1本", "にんじん": "1本" }),
    createSide("きんぴらごぼう惣菜", { "きんぴらごぼう惣菜": "1パック" }),
    createSide("ツナサラダ", { "ツナ缶": "1缶", "レタス": "1玉" }),
    createSide("マカロニサラダ", { "マカロニ": "1袋", "きゅうり": "2本", "ハム": "1パック" }),
    createSide("マカロニサラダ惣菜", { "マカロニサラダ惣菜": "1パック" }),
    createSide("切り干し大根", { "切り干し大根": "1袋", "にんじん": "1本", "油揚げ": "1パック" }),
    createSide("白菜の浅漬け", { "白菜": "0.5玉" }),
    createSide("鮭フレーク", { "鮭フレークパック": "1パック" }),
    createSide("そぼろ瓶", { "鶏そぼろ瓶": "1瓶" })
  ],
  dinnerSoup: [
    createSide("豆腐の味噌汁", { "豆腐": "0.5丁" }),
    createSide("卵スープ", { "卵": "2個" }),
    createSide("コンソメスープ", { "玉ねぎ": "0.5個" }),
    createSide("なめこの味噌汁", { "なめこ": "100g" }),
    createSide("白菜スープ", { "白菜": "200g" }),
    createSide("大根の味噌汁", { "大根": "150g" })
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
  "醤油": { fromUnit: "本", toUnit: "ml", multiplier: 1000 },
  "お茶漬けの素": { fromUnit: "袋", toUnit: "食分", multiplier: 4 },
  "もやし": { fromUnit: "袋", toUnit: "g", multiplier: 200 },
  "焼豚": { fromUnit: "パック", toUnit: "g", multiplier: 120 },
  "油揚げ": { fromUnit: "パック", toUnit: "枚", multiplier: 2 },
  "めんつゆ": { fromUnit: "本", toUnit: "ml", multiplier: 500 },
  "みりん": { fromUnit: "本", toUnit: "ml", multiplier: 500 },
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
  "鮭フレークパック": { unit: "パック", pricePerUnit: 637 },
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
  "醤油": { unit: "ml", pricePerUnit: 0.2 },
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
  "みりん": { unit: "ml", pricePerUnit: 0.4 },
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
  "なめこ": { unit: "g", pricePerUnit: 1.2 },
  "片栗粉": { unit: "g", pricePerUnit: 0.5 },
  "焼きのり": { unit: "枚", pricePerUnit: 18 },
  "いんげん": { unit: "g", pricePerUnit: 1.8 },
  "ミニトマト": { unit: "個", pricePerUnit: 25 },
  "エビ寄せフライ": { unit: "袋", pricePerUnit: 321 },
  "焼売": { unit: "袋", pricePerUnit: 975 },
  "ミートボール": { unit: "袋", pricePerUnit: 167 },
  "ポテトサラダ惣菜": { unit: "パック", pricePerUnit: 297 },
  "マカロニサラダ惣菜": { unit: "パック", pricePerUnit: 181 },
  "きんぴらごぼう惣菜": { unit: "パック", pricePerUnit: 181 },
  "鶏そぼろ瓶": { unit: "瓶", pricePerUnit: 464 },
  "ミニグラタン": { unit: "袋", pricePerUnit: 742 },
  "春巻き": { unit: "袋", pricePerUnit: 651 },
  "コロッケ": { unit: "袋", pricePerUnit: 1030 },
  "和風だし": { unit: "ml", pricePerUnit: 0.28 },
  "ごま油": { unit: "ml", pricePerUnit: 1.2 },
  "オリーブオイル": { unit: "ml", pricePerUnit: 1.6 },
  "砂糖": { unit: "g", pricePerUnit: 0.24 },
  "塩": { unit: "g", pricePerUnit: 0.06 },
  "こしょう": { unit: "g", pricePerUnit: 1.8 },
  "酢": { unit: "ml", pricePerUnit: 0.32 },
  "焼きそばソース": { unit: "ml", pricePerUnit: 0.48 },
  "からし": { unit: "g", pricePerUnit: 1.1 },
  "昆布": { unit: "cm", pricePerUnit: 5 },
  "かつお節": { unit: "袋", pricePerUnit: 35 },
  "赤唐辛子": { unit: "本", pricePerUnit: 12 },
  "焼肉のたれ": { unit: "ml", pricePerUnit: 0.55 },
  "コチュジャン": { unit: "g", pricePerUnit: 0.7 }
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
      const tomariDays = parseScheduledBentoDays(document.getElementById("bento-days-tomari").value, year, month);
      const sosodoName = document.getElementById("bento-name-sosodo").value.trim() || "そそどのお弁当";
      const sosodoDays = parseScheduledBentoDays(document.getElementById("bento-days-sosodo").value, year, month);
      const shimaName = document.getElementById("bento-name-shima").value.trim() || "島ばあちゃんのお弁当";
      const shimaDays = parseScheduledBentoDays(document.getElementById("bento-days-shima").value, year, month);
      const tomariPrice = Math.max(0, Number(document.getElementById("bento-price-tomari").value) || 0);
      const sosodoPrice = Math.max(0, Number(document.getElementById("bento-price-sosodo").value) || 0);
      const manualBentoDaysInput = document.getElementById("manual-bento-days").value;
      const manualBentoName = document.getElementById("manual-bento-name").value.trim() || "持っていくお弁当";
      renderPlan(
        year,
        month,
        {
          tomari: tomariName,
          sosodo: sosodoName,
          shima: shimaName,
          schedule: {
            [tomariName]: tomariDays,
            [sosodoName]: sosodoDays,
            [shimaName]: shimaDays
          },
          prices: {
            [tomariName]: tomariPrice,
            [sosodoName]: sosodoPrice
          }
        },
        kidsCount,
        adultCount,
        {
          days: parseManualBentoDays(manualBentoDaysInput, year, month),
          name: manualBentoName
        }
      );
    });

    document.getElementById("print-all").addEventListener("click", () => {
      printSection("all");
    });

    document.getElementById("monthly-menu").addEventListener("click", handleRecipeButtonClick);
    document.getElementById("recipe-close").addEventListener("click", closeRecipeDialog);
    document.getElementById("recipe-dialog").addEventListener("click", (event) => {
      if (event.target.id === "recipe-dialog") {
        closeRecipeDialog();
      }
    });

    renderPlan(today.getFullYear(), today.getMonth() + 1, {
      tomari: "とまりのお弁当",
      sosodo: "そそどのお弁当",
      shima: "島ばあちゃんのお弁当",
      schedule: {
        "とまりのお弁当": [],
        "そそどのお弁当": [],
        "島ばあちゃんのお弁当": []
      },
      prices: {
        "とまりのお弁当": 500,
        "そそどのお弁当": 500
      }
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
  renderedDays = plan.days;
  renderSummary(plan, bentoNames, manualBentoConfig);
  renderMonthlyMenu(plan.days);
  renderWeeklyShopping(plan.weeks);
  renderWeeklyPrintPages(plan);
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
      const firstBentoSide = pickComponent(sideOptions.bento, usage.bentoSide, meals, []);
      const secondBentoSide = pickComponent(
        sideOptions.bento,
        usage.bentoSide,
        meals.concat({ name: firstBentoSide.name, dishes: [firstBentoSide.name] }),
        []
      );
      const manualBento = composePackedMeal(
        renameMeal(
          pickMeal(bentoOptions.filter(isRiceBasedBentoMeal), usage.bento, meals, previousDayType, "", []),
          manualBentoName
        ),
        firstBentoSide,
        secondBentoSide,
        kidsCount,
        adultCount
      );
      meals.push({ slot: "弁当", ...manualBento });
      addIngredients(currentWeek.ingredients, manualBento.ingredients);
      addEstimatedCost(currentWeek, manualBento.estimatedCost, manualBento.estimatedItemCount);
    }

    let dinner;
    const scheduledBentoName = pickScheduledBentoName(day, bentoNames);
    if (scheduledBentoName) {
      dinner = {
        ...createMeal(scheduledBentoName, "", [], {}),
        estimatedCost: estimateBentoCost(scheduledBentoName, bentoNames),
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
      weekLabel: currentWeek.label,
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
  const condiments = getCondimentIngredientsForDishes([mainMeal.dishes[0], sideDish.name, soupDish.name]);
  const servingMultiplier = getServingMultiplier(kidsCount, adultCount);
  const ingredients = scaleIngredientMap(
    mergeIngredientMaps(
      removeDuplicateCondimentIngredients(mainMeal.ingredients, condiments),
      removeDuplicateCondimentIngredients(sideDish.ingredients, condiments),
      removeDuplicateCondimentIngredients(soupDish.ingredients, condiments),
      condiments
    ),
    kidsCount,
    adultCount
  );
  const estimate = estimateIngredientMapCost(ingredients);
  return {
    ...mainMeal,
    dishes: [mainMeal.dishes[0], sideDish.name, soupDish.name],
    ingredients,
    servingMultiplier,
    estimatedCost: estimate.total,
    estimatedItemCount: estimate.count
  };
}

function composePackedMeal(mainMeal, sideDish, extraSideDish, kidsCount, adultCount) {
  const condiments = getCondimentIngredientsForDishes([...mainMeal.dishes, sideDish.name, extraSideDish.name]);
  const servingMultiplier = getServingMultiplier(kidsCount, adultCount);
  const ingredients = scaleIngredientMap(
    mergeIngredientMaps(
      removeDuplicateCondimentIngredients(mainMeal.ingredients, condiments),
      removeDuplicateCondimentIngredients(sideDish.ingredients, condiments),
      removeDuplicateCondimentIngredients(extraSideDish.ingredients, condiments),
      condiments
    ),
    kidsCount,
    adultCount
  );
  const estimate = estimateIngredientMapCost(ingredients);
  return {
    ...mainMeal,
    dishes: [...mainMeal.dishes, sideDish.name, extraSideDish.name],
    ingredients,
    servingMultiplier,
    estimatedCost: estimate.total,
    estimatedItemCount: estimate.count
  };
}

function removeDuplicateCondimentIngredients(ingredients, condiments) {
  if (!ingredients || !condiments) {
    return ingredients;
  }

  return Object.fromEntries(
    Object.entries(ingredients).filter(([name]) => !(name in condiments))
  );
}

function getServingMultiplier(kidsCount, adultCount) {
  return ((kidsCount * 0.8) + adultCount) / 2;
}

function isRiceBasedBentoMeal(meal) {
  const dishes = meal?.dishes || [];
  return !dishes.some((dish) => /(パスタ|スパゲッティ|うどん|そば|焼きそば|麺)/.test(dish));
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
      merged[name] = mergeQuantity(merged[name], normalizeQuantity(name, quantity));
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
    target[name] = mergeQuantity(target[name], normalizeQuantity(name, quantity));
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

  const combined = simplifyQuantityExpression([existing, incoming]);
  if (combined) {
    return combined;
  }

  return `${existing} + ${incoming}`;
}

function isApproximateQuantity(quantity) {
  return quantity === "少々" || quantity === "適量";
}

function simplifyQuantityExpression(parts) {
  const tokens = parts
    .flatMap((part) => String(part).split("+"))
    .map((part) => part.trim())
    .filter(Boolean);

  if (tokens.length === 0) {
    return "";
  }

  const numericParts = [];
  let approximateOnly = true;

  for (const token of tokens) {
    if (isApproximateQuantity(token)) {
      continue;
    }

    approximateOnly = false;
    const match = normalizeQuantityText(token).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return null;
    }

    numericParts.push({
      value: Number(match[1]),
      unit: normalizeUnitLabel(match[2])
    });
  }

  if (approximateOnly) {
    return "適量";
  }

  if (numericParts.length === 0) {
    return null;
  }

  const [first, ...rest] = numericParts;
  if (rest.some((part) => part.unit !== first.unit)) {
    return null;
  }

  const total = numericParts.reduce((sum, part) => sum + part.value, 0);
  return `${trimNumber(total)}${first.unit}`;
}

function normalizeUnitLabel(unit) {
  const normalized = String(unit || "").trim().toLowerCase();
  const unitMap = {
    "g": "g",
    "ｇ": "g",
    "グラム": "g",
    "gram": "g",
    "grams": "g",
    "ml": "ml",
    "ｍｌ": "ml",
    "cc": "ml",
    "milliliter": "ml",
    "milliliters": "ml",
    "l": "L",
    "ℓ": "L",
    "ｌ": "L",
    "cm": "cm",
    "ｃｍ": "cm",
    "個": "個",
    "こ": "個",
    "コ": "個",
    "ヶ": "個",
    "片": "個",
    "袋": "袋",
    "パック": "パック",
    "pkg": "パック",
    "箱": "箱",
    "本": "本",
    "枚": "枚",
    "束": "束",
    "缶": "缶",
    "瓶": "瓶",
    "丁": "丁",
    "株": "株",
    "切れ": "切れ",
    "玉": "玉",
    "食分": "食分",
    "皿分": "皿分",
    "合": "合"
  };

  return unitMap[normalized] || unit;
}

function normalizeQuantityText(quantity) {
  return String(quantity || "")
    .replace(/[０-９．]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 65248))
    .replace(/\s+/g, "");
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

  const normalizedQuantity = normalizeQuantityText(quantity);
  const match = normalizedQuantity.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return quantity;
  }

  const amount = Number(match[1]);
  const unit = normalizeUnitLabel(match[2]);
  if (unit !== normalizeUnitLabel(guide.fromUnit)) {
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

function estimateBentoCost(bentoName, bentoNames) {
  if (bentoNames && bentoNames.prices && Number.isFinite(bentoNames.prices[bentoName])) {
    return bentoNames.prices[bentoName];
  }
  return 500;
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

function parseScheduledBentoDays(input, year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return [...new Set(
    String(input || "")
      .split(/[,\s、]+/)
      .map((value) => Number(value.trim()))
      .filter((value) => Number.isInteger(value) && value >= 1 && value <= daysInMonth)
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

function pickScheduledBentoName(day, bentoNames) {
  const scheduleEntries = Object.entries(bentoNames.schedule || {});
  const matched = scheduleEntries.find(([, days]) => Array.isArray(days) && days.includes(day));
  return matched ? matched[0] : null;
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
    meal.name === bentoNames.tomari || meal.name === bentoNames.sosodo || meal.name === bentoNames.shima
  )).length;
  const tomariCount = plan.days.filter((day) => day.meals.some((meal) => meal.name === bentoNames.tomari)).length;
  const sosodoCount = plan.days.filter((day) => day.meals.some((meal) => meal.name === bentoNames.sosodo)).length;
  const shimaCount = plan.days.filter((day) => day.meals.some((meal) => meal.name === bentoNames.shima)).length;
  const tomariCost = (bentoNames.prices?.[bentoNames.tomari] || 0) * tomariCount;
  const sosodoCost = (bentoNames.prices?.[bentoNames.sosodo] || 0) * sosodoCount;
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
    `${plan.year}年${plan.month}月は 子ども${plan.kidsCount}人・大人${plan.adultCount}人の${seasonLabel}向けで ${plan.days.length}日分の献立を作成しました。土日 ${weekends}日、${bentoNames.tomari} は ${tomariCount}回で ${formatCurrency(tomariCost)}、${bentoNames.sosodo} は ${sosodoCount}回で ${formatCurrency(sosodoCost)}、${bentoNames.shima} は ${shimaCount}回、購入弁当は合計 ${bentoCount}回、指定したお弁当日は ${manualBentoCount}日、月の食費目安は ${formatCurrency(monthlyEstimate)} です。`;
}

function renderMonthlyMenu(days) {
  const root = document.getElementById("monthly-menu");
  root.innerHTML = "";

  days.forEach((day) => {
    const mealsHtml = day.meals.map((meal, mealIndex) => `
      <div class="meal-item">
        <div class="meal-slot">${meal.slot}</div>
        <div>
          <div class="meal-name">${meal.name}</div>
          ${meal.dishes && meal.dishes.length ? `<div class="meal-note">${meal.dishes.join(" / ")}</div>` : ""}
          ${meal.note ? `<div class="meal-note">${meal.note}</div>` : ""}
          ${Object.keys(meal.ingredients || {}).length > 0 ? `<button type="button" class="recipe-button" data-day="${day.day}" data-meal-index="${mealIndex}">作り方を見る</button>` : ""}
        </div>
      </div>
    `).join("");

    root.insertAdjacentHTML("beforeend", `
      <article class="day-card ${day.isWeekend ? "weekend" : ""}" data-week-label="${day.weekLabel}">
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
            <button type="button" class="print-button week-shopping-print-button" data-week-label="${week.label}">この週の買い物</button>
          </div>
        </div>
        <div class="week-cost-note">単価を設定できた ${week.estimatedItemCount} 品目からの概算です。地域や時期で前後します。</div>
        <div class="ingredients">${items}</div>
      </article>
    `);
  });

  root.querySelectorAll(".week-shopping-print-button").forEach((button) => {
    button.addEventListener("click", () => {
      printShoppingWeek(button.dataset.weekLabel);
    });
  });
}

function renderWeeklyPrintPages(plan) {
  const root = document.getElementById("weekly-print-pages");
  if (!root) {
    return;
  }

  root.innerHTML = "";

  for (let index = 0; index < plan.weeks.length; index += 2) {
    const pair = plan.weeks.slice(index, index + 2);
    const pairHtml = pair.map((week) => {
      const weekDays = plan.days.filter((day) => day.weekLabel === week.label);
      const menuHtml = weekDays.map((day) => {
        const mealsHtml = day.meals.map((meal) => `
          <div class="print-week-meal">
            <div class="print-week-slot">${meal.slot}</div>
            <div>
              <div class="print-week-meal-name">${meal.name}</div>
              <div class="print-week-meal-note">${meal.dishes.join(" / ")}</div>
            </div>
          </div>
        `).join("");

        return `
          <article class="print-week-day">
            <div class="print-week-day-head">
              <div class="print-week-day-title">${day.day}日 (${weekdayNames[day.weekday]})</div>
              <div class="tag">${day.isWeekend ? "土日3食" : "平日2食"}</div>
            </div>
            <div class="print-week-meals">${mealsHtml}</div>
          </article>
        `;
      }).join("");

      return `
        <section class="print-fortnight-week">
          <header class="print-week-page-head">
            <div>
              <h2>${plan.year}年${plan.month}月 ${week.label}</h2>
              <div class="week-range">${week.range}</div>
            </div>
          </header>
          <div class="print-week-days">${menuHtml}</div>
        </section>
      `;
    }).join("");

    root.insertAdjacentHTML("beforeend", `
      <article class="print-week-page">
        <div class="print-fortnight-layout">${pairHtml}</div>
      </article>
    `);
  }
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
  const weeklyPrintPages = document.getElementById("weekly-print-pages");
  const dayCards = Array.from(document.querySelectorAll("#monthly-menu .day-card"));
  const weekCards = Array.from(document.querySelectorAll("#weekly-shopping .week-card"));

  document.body.classList.toggle("print-all-weeks", section === "all");
  document.body.classList.remove("print-shopping-week");

  monthlyPanel.classList.toggle("print-hidden", section !== "all");
  shoppingPanel.classList.toggle("print-hidden", true);
  if (weeklyPrintPages) {
    weeklyPrintPages.classList.toggle("print-hidden", section !== "all");
  }
  dayCards.forEach((card) => card.classList.remove("print-hidden"));
  weekCards.forEach((card) => card.classList.remove("print-hidden"));

  window.print();

  document.body.classList.remove("print-all-weeks");
  monthlyPanel.classList.remove("print-hidden");
  shoppingPanel.classList.remove("print-hidden");
  if (weeklyPrintPages) {
    weeklyPrintPages.classList.add("print-hidden");
  }
}

function printShoppingWeek(weekLabel) {
  const shoppingPanel = document.querySelector("#weekly-shopping").closest(".panel");
  const monthlyPanel = document.querySelector("#monthly-menu").closest(".panel");
  const weeklyPrintPages = document.getElementById("weekly-print-pages");
  const weekCards = Array.from(document.querySelectorAll("#weekly-shopping .week-card"));

  document.body.classList.remove("print-all-weeks");
  document.body.classList.add("print-shopping-week");
  monthlyPanel.classList.add("print-hidden");
  if (weeklyPrintPages) {
    weeklyPrintPages.classList.add("print-hidden");
  }
  shoppingPanel.classList.remove("print-hidden");

  weekCards.forEach((card) => {
    card.classList.toggle("print-hidden", card.dataset.weekLabel !== weekLabel);
  });

  window.print();

  document.body.classList.remove("print-shopping-week");
  monthlyPanel.classList.remove("print-hidden");
  weekCards.forEach((card) => {
    card.classList.remove("print-hidden");
  });
}

function handleRecipeButtonClick(event) {
  const button = event.target.closest(".recipe-button");
  if (!button) {
    return;
  }

  const day = renderedDays.find((item) => item.day === Number(button.dataset.day));
  const meal = day?.meals?.[Number(button.dataset.mealIndex)];
  if (!meal) {
    return;
  }

  openRecipeDialog(meal);
}

function openRecipeDialog(meal) {
  const dialog = document.getElementById("recipe-dialog");
  const recipes = getRecipesForMeal(meal);
  document.getElementById("recipe-title").textContent = meal.name;
  document.getElementById("recipe-subtitle").textContent = `${meal.slot}ごはんの作り方`;
  document.getElementById("recipe-ingredients").innerHTML = Object.entries(meal.ingredients)
    .map(([name, quantity]) => `<div class="recipe-ingredient-item"><span>${name}</span><span>${quantity}</span></div>`)
    .join("");
  document.getElementById("recipe-sections").innerHTML = recipes.map((recipe) => `
    <article class="recipe-section-card">
      <h4>${recipe.title}</h4>
      <div class="recipe-section-label">調味料</div>
      <div class="recipe-condiments-list recipe-condiments-grid">
        ${Object.entries(recipe.condiments).map(([name, quantity]) => `<div class="recipe-ingredient-item"><span>${name}</span><span>${quantity}</span></div>`).join("")}
      </div>
      <div class="recipe-section-label">作り方</div>
      <ol class="recipe-steps">
        ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </article>
  `).join("");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "open");
  }
}

function closeRecipeDialog() {
  const dialog = document.getElementById("recipe-dialog");
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function getRecipesForMeal(meal) {
  const dishes = (meal.dishes || [])
    .filter((dish) => dish && !preparedDishNames.has(dish) && dish !== "ごはん" && dish !== "のりごはん")
    .filter((dish, index, list) => list.indexOf(dish) === index);

  if (dishes.length === 0) {
    return [{
      title: meal.name,
      condiments: scaleCondimentMap(normalizeCondiments(["塩", "こしょう", "醤油"]), meal.servingMultiplier || 1),
      steps: [
        "必要な料理を温めるか準備する。",
        "食べる順に盛り付ける。",
        "全体のバランスを見て仕上げる。"
      ]
    }];
  }

  return dishes.map((dish) => {
    const recipe = getRecipeForDish(dish, meal);
    return {
      ...recipe,
      condiments: scaleCondimentMap(recipe.condiments, meal.servingMultiplier || 1)
    };
  });
}

function getRecipeForDish(dish, meal) {
  if (fullRecipeCatalog[dish]) {
    return {
      title: dish,
      steps: fullRecipeCatalog[dish].steps,
      condiments: normalizeCondiments(fullRecipeCatalog[dish].condiments)
    };
  }

  if (dish.includes("丼")) {
    return {
      title: dish,
      condiments: normalizeCondiments(["醤油", "みりん", "砂糖"]),
      steps: [
        "具材を食べやすく切って火を通す。",
        "味付けして汁気を整える。",
        "ごはんにのせて仕上げる。"
      ]
    };
  }

  if (dish.includes("うどん") || dish.includes("そば") || dish.includes("パスタ")) {
    return {
      title: dish,
      condiments: normalizeCondiments(["塩", "こしょう", "コンソメ"]),
      steps: [
        "麺を表示通りにゆでる。",
        "具材やソースを別に用意して温める。",
        "麺と合わせて盛り付ける。"
      ]
    };
  }

  return {
    title: dish,
    condiments: normalizeCondiments(getFallbackCondiments(meal, dish)),
    steps: [
      "材料を食べやすく切って用意する。",
      "フライパンや鍋で火を通しながら味を整える。",
      "器に盛り付けて仕上げる。"
    ]
  };
}

function getFallbackCondiments(meal, primaryDish) {
  if (primaryDish.includes("味噌汁")) {
    return ["味噌", "だし"];
  }
  if (primaryDish.includes("スープ")) {
    return ["コンソメ または 鶏がらスープの素", "塩", "こしょう"];
  }
  if (primaryDish.includes("焼き") || primaryDish.includes("炒め")) {
    return ["塩", "こしょう", "醤油"];
  }
  if (primaryDish.includes("鍋") || primaryDish.includes("スープ")) {
    return ["だし", "塩", "醤油"];
  }
  if (primaryDish.includes("揚げ") || primaryDish.includes("フライ") || primaryDish.includes("コロッケ")) {
    return ["塩", "中濃ソース"];
  }
  if (meal.note.includes("パン") || meal.note.includes("朝食")) {
    return ["塩", "こしょう", "バター"];
  }
  return ["塩", "こしょう", "醤油"];
}

function normalizeCondiments(condiments) {
  return (condiments || []).reduce((accumulator, name) => {
    const normalizedName = condimentAliasGuide[name] || name;
    const quantity = condimentAmountGuide[normalizedName] || "少々";
    accumulator[normalizedName] = mergeQuantity(accumulator[normalizedName], quantity);
    return accumulator;
  }, {});
}

function scaleCondimentMap(condiments, multiplier) {
  const scaled = {};
  Object.entries(condiments || {}).forEach(([name, quantity]) => {
    scaled[name] = scaleQuantity(quantity, multiplier);
  });
  return scaled;
}

function getCondimentIngredientsForDishes(dishes) {
  return (dishes || []).reduce((accumulator, dish) => {
    if (!dish || preparedDishNames.has(dish) || dish === "ごはん" || dish === "のりごはん") {
      return accumulator;
    }

    const recipe = getRecipeForDish(dish, { note: "", slot: "" });
    Object.entries(recipe.condiments).forEach(([name, quantity]) => {
      accumulator[name] = mergeQuantity(accumulator[name], quantity);
    });
    return accumulator;
  }, {});
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

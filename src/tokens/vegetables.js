// Most common vegetables in Japanese
//
// The other array includes different meanings for the japanese word.
//
// Generated by Grok 3, not checked for correctness yet.

const vegetables = [
  { japanese: "にんじん", romaji: "ninjin", english: "carrot", other: [] },
  { japanese: "たまねぎ", romaji: "tamanegi", english: "onion", other: [] },
  { japanese: "じゃがいも", romaji: "jagaimo", english: "potato", other: [] },
  { japanese: "キャベツ", romaji: "kyabetsu", english: "cabbage", other: [] },
  { japanese: "トマト", romaji: "tomato", english: "tomato", other: [] }, // Botanically a fruit, but commonly a vegetable
  { japanese: "きゅうり", romaji: "kyuuri", english: "cucumber", other: [] },
  { japanese: "なす", romaji: "nasu", english: "eggplant", other: [] },
  {
    japanese: "ほうれんそう",
    romaji: "hourensou",
    english: "spinach",
    other: [],
  },
  {
    japanese: "ブロッコリー",
    romaji: "burokkorii",
    english: "broccoli",
    other: [],
  },
  {
    japanese: "カリフラワー",
    romaji: "karifurawaa",
    english: "cauliflower",
    other: [],
  },
  { japanese: "ピーマン", romaji: "piiman", english: "bell pepper", other: [] },
  { japanese: "レタス", romaji: "retasu", english: "lettuce", other: [] },
  { japanese: "ねぎ", romaji: "negi", english: "green onion", other: ["leek"] },
  {
    japanese: "だいこん",
    romaji: "daikon",
    english: "daikon radish",
    other: [],
  },
  { japanese: "かぼちゃ", romaji: "kabocha", english: "pumpkin", other: [] },
  {
    japanese: "さつまいも",
    romaji: "satsumaimo",
    english: "sweet potato",
    other: [],
  },
  {
    japanese: "アスパラガス",
    romaji: "asuparagasu",
    english: "asparagus",
    other: [],
  },
  { japanese: "セロリ", romaji: "serori", english: "celery", other: [] },
  { japanese: "ごぼう", romaji: "gobou", english: "burdock root", other: [] },
  {
    japanese: "たけのこ",
    romaji: "takenoko",
    english: "bamboo shoot",
    other: [],
  },
  {
    japanese: "しいたけ",
    romaji: "shiitake",
    english: "shiitake mushroom",
    other: [],
  },
  { japanese: "えのき", romaji: "enoki", english: "enoki mushroom", other: [] },
  {
    japanese: "まいたけ",
    romaji: "maitake",
    english: "maitake mushroom",
    other: [],
  },
  {
    japanese: "しめじ",
    romaji: "shimeji",
    english: "shimeji mushroom",
    other: [],
  },
  { japanese: "オクラ", romaji: "okura", english: "okra", other: [] },
  { japanese: "もやし", romaji: "moyashi", english: "bean sprouts", other: [] },
  {
    japanese: "ズッキーニ",
    romaji: "zukkiini",
    english: "zucchini",
    other: [],
  },
  { japanese: "かぶ", romaji: "kabu", english: "turnip", other: [] },
  { japanese: "れんこん", romaji: "renkon", english: "lotus root", other: [] },
  {
    japanese: "チンゲンサイ",
    romaji: "chingensai",
    english: "bok choy",
    other: [],
  },
  {
    japanese: "はくさい",
    romaji: "hakusai",
    english: "napa cabbage",
    other: [],
  },
  { japanese: "みずな", romaji: "mizuna", english: "mizuna greens", other: [] },
  {
    japanese: "こまつな",
    romaji: "komatsuna",
    english: "komatsuna greens",
    other: [],
  },
  { japanese: "パセリ", romaji: "paseri", english: "parsley", other: [] },
  { japanese: "クレソン", romaji: "kureson", english: "watercress", other: [] },
  { japanese: "にら", romaji: "nira", english: "garlic chives", other: [] },
  { japanese: "にんにく", romaji: "ninniku", english: "garlic", other: [] },
  { japanese: "しょうが", romaji: "shouga", english: "ginger", other: [] },
  {
    japanese: "らっきょう",
    romaji: "rakkyou",
    english: "japanese shallot",
    other: [],
  },
  {
    japanese: "エシャロット",
    romaji: "esharotto",
    english: "shallot",
    other: [],
  },
  { japanese: "リーキ", romaji: "riiki", english: "leek", other: [] },
  {
    japanese: "アーティチョーク",
    romaji: "aatichooku",
    english: "artichoke",
    other: [],
  },
  { japanese: "ビーツ", romaji: "biitsu", english: "beetroot", other: [] },
  {
    japanese: "ラディッシュ",
    romaji: "radisshu",
    english: "radish",
    other: [],
  },
  {
    japanese: "さやえんどう",
    romaji: "sayaendou",
    english: "snap peas",
    other: [],
  },
  {
    japanese: "えだまめ",
    romaji: "edamame",
    english: "edamame (green soybeans)",
    other: [],
  },
  {
    japanese: "そらまめ",
    romaji: "soramame",
    english: "broad beans",
    other: [],
  },
  {
    japanese: "グリーンピース",
    romaji: "guriinpiisu",
    english: "green peas",
    other: [],
  },
  {
    japanese: "とうもろこし",
    romaji: "toumorokoshi",
    english: "corn",
    other: [],
  },
  { japanese: "やまいも", romaji: "yamaimo", english: "yam", other: [] },
  { japanese: "さといも", romaji: "satoimo", english: "taro", other: [] },
  {
    japanese: "こんにゃく",
    romaji: "konnyaku",
    english: "konjac root",
    other: [],
  },
  {
    japanese: "パプリカ",
    romaji: "papurika",
    english: "paprika (bell pepper)",
    other: [],
  },
  { japanese: "ケール", romaji: "keeru", english: "kale", other: [] },
  { japanese: "ルッコラ", romaji: "rukkora", english: "arugula", other: [] },
  {
    japanese: "スイスチャード",
    romaji: "suisuchaado",
    english: "swiss chard",
    other: [],
  },
  { japanese: "フェンネル", romaji: "fenneru", english: "fennel", other: [] },
  {
    japanese: "コラードグリーン",
    romaji: "koraadoguriin",
    english: "collard greens",
    other: [],
  },
  { japanese: "セリ", romaji: "seri", english: "japanese parsley", other: [] },
  {
    japanese: "三つ葉",
    romaji: "mitsuba",
    english: "mitsuba (japanese herb)",
    other: [],
  },
  { japanese: "しそ", romaji: "shiso", english: "shiso (perilla)", other: [] },
  { japanese: "わさび", romaji: "wasabi", english: "wasabi", other: [] },
  {
    japanese: "みょうが",
    romaji: "myouga",
    english: "myoga (japanese ginger)",
    other: [],
  },
  { japanese: "ふき", romaji: "fuki", english: "butterbur", other: [] },
  {
    japanese: "うど",
    romaji: "udo",
    english: "udo (mountain yam)",
    other: ["noodles"],
  },
  {
    japanese: "ぜんまい",
    romaji: "zenmai",
    english: "royal fern",
    other: ["spring (mechanism)"],
  },
  { japanese: "わらび", romaji: "warabi", english: "bracken fern", other: [] },
  {
    japanese: "つわぶき",
    romaji: "tsuwabuki",
    english: "tsuwabuki (farfugium)",
    other: [],
  },
  { japanese: "よもぎ", romaji: "yomogi", english: "mugwort", other: [] },
  {
    japanese: "かんぞう",
    romaji: "kanzou",
    english: "daylily",
    other: ["liver"],
  },
  { japanese: "くわい", romaji: "kuwai", english: "arrowhead", other: [] },
  { japanese: "じねんじょ", romaji: "jinenjo", english: "wild yam", other: [] },
  { japanese: "つくし", romaji: "tsukushi", english: "horsetail", other: [] },
  {
    japanese: "たらのめ",
    romaji: "taranome",
    english: "aralia sprout",
    other: [],
  },
  { japanese: "こごみ", romaji: "kogomi", english: "ostrich fern", other: [] },
  {
    japanese: "サラダ菜",
    romaji: "saradana",
    english: "butterhead lettuce",
    other: [],
  },
  {
    japanese: "サンチュ",
    romaji: "sanchu",
    english: "red leaf lettuce",
    other: [],
  },
  { japanese: "エンダイブ", romaji: "endaibu", english: "endive", other: [] },
  { japanese: "チコリ", romaji: "chikori", english: "chicory", other: [] },
  { japanese: "バジル", romaji: "bajiru", english: "basil", other: [] },
  { japanese: "タイム", romaji: "taimu", english: "thyme", other: ["time"] },
  {
    japanese: "ローズマリー",
    romaji: "roozumarii",
    english: "rosemary",
    other: [],
  },
  { japanese: "オレガノ", romaji: "oregano", english: "oregano", other: [] },
  { japanese: "ディル", romaji: "diru", english: "dill", other: [] },
  { japanese: "チャイブ", romaji: "chaibu", english: "chives", other: [] },
  {
    japanese: "マッシュルーム",
    romaji: "masshuruumu",
    english: "button mushroom",
    other: [],
  },
  {
    japanese: "ポルチーニ",
    romaji: "poruchiini",
    english: "porcini mushroom",
    other: [],
  },
  { japanese: "トリュフ", romaji: "toryufu", english: "truffle", other: [] },
  {
    japanese: "ひじき",
    romaji: "hijiki",
    english: "hijiki (sea vegetable)",
    other: [],
  },
  {
    japanese: "わかめ",
    romaji: "wakame",
    english: "wakame (seaweed)",
    other: [],
  },
  { japanese: "こんぶ", romaji: "konbu", english: "konbu (kelp)", other: [] },
  { japanese: "のり", romaji: "nori", english: "nori (seaweed)", other: [] },
  {
    japanese: "もずく",
    romaji: "mozuku",
    english: "mozuku (seaweed)",
    other: [],
  },
  {
    japanese: "あおさ",
    romaji: "aosa",
    english: "aosa (sea lettuce)",
    other: [],
  },
  {
    japanese: "ひらたけ",
    romaji: "hiratake",
    english: "oyster mushroom",
    other: [],
  },
  {
    japanese: "なめこ",
    romaji: "nameko",
    english: "nameko mushroom",
    other: [],
  },
  {
    japanese: "エリンギ",
    romaji: "eringi",
    english: "king oyster mushroom",
    other: [],
  },
  {
    japanese: "くろきくらげ",
    romaji: "kurokikurage",
    english: "wood ear mushroom",
    other: [],
  },
];

export default vegetables;

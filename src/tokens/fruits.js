// Most common fruits in Japanese
//
// The other array includes different meanings for the japanese word.
//
// Generated by Grok 3, not checked for correctness yet.

const fruits = [
  { japanese: "りんご", romaji: "ringo", english: "apple", other: [] },
  {
    japanese: "みかん",
    romaji: "mikan",
    english: "mandarin orange",
    other: [],
  },
  { japanese: "バナナ", romaji: "banana", english: "banana", other: [] },
  { japanese: "いちご", romaji: "ichigo", english: "strawberry", other: [] },
  { japanese: "すいか", romaji: "suika", english: "watermelon", other: [] },
  { japanese: "もも", romaji: "momo", english: "peach", other: ["thigh"] },
  {
    japanese: "なし",
    romaji: "nashi",
    english: "pear",
    other: ["none", "without"],
  },
  { japanese: "ぶどう", romaji: "budou", english: "grape", other: [] },
  { japanese: "メロン", romaji: "meron", english: "melon", other: [] },
  { japanese: "キウイ", romaji: "kiui", english: "kiwi", other: [] },
  { japanese: "オレンジ", romaji: "orenji", english: "orange", other: [] },
  { japanese: "レモン", romaji: "remon", english: "lemon", other: [] },
  { japanese: "さくらんぼ", romaji: "sakuranbo", english: "cherry", other: [] },
  {
    japanese: "パイナップル",
    romaji: "painappuru",
    english: "pineapple",
    other: [],
  },
  { japanese: "マンゴー", romaji: "mangoo", english: "mango", other: [] },
  { japanese: "かき", romaji: "kaki", english: "persimmon", other: ["oyster"] },
  { japanese: "ざくろ", romaji: "zakuro", english: "pomegranate", other: [] },
  {
    japanese: "グレープフルーツ",
    romaji: "gureepufuruutsu",
    english: "grapefruit",
    other: [],
  },
  {
    japanese: "びわ",
    romaji: "biwa",
    english: "loquat",
    other: ["biwa (lute instrument)"],
  },
  { japanese: "あんず", romaji: "anzu", english: "apricot", other: [] },
  { japanese: "すもも", romaji: "sumomo", english: "plum", other: [] },
  { japanese: "ドリアン", romaji: "dorian", english: "durian", other: [] },
  { japanese: "ライチ", romaji: "raichi", english: "lychee", other: [] },
  { japanese: "パパイヤ", romaji: "papaiya", english: "papaya", other: [] },
  {
    japanese: "ゆず",
    romaji: "yuzu",
    english: "yuzu (citrus fruit)",
    other: [],
  },
  { japanese: "いちじく", romaji: "ichijiku", english: "fig", other: [] },
  {
    japanese: "ブルーベリー",
    romaji: "buruuberii",
    english: "blueberry",
    other: [],
  },
  {
    japanese: "ラズベリー",
    romaji: "razuberii",
    english: "raspberry",
    other: [],
  },
  {
    japanese: "ブラックベリー",
    romaji: "burakkuberii",
    english: "blackberry",
    other: [],
  },
  {
    japanese: "クランベリー",
    romaji: "kuranberii",
    english: "cranberry",
    other: [],
  },
  { japanese: "グアバ", romaji: "guaba", english: "guava", other: [] },
  {
    japanese: "スターフルーツ",
    romaji: "sutaafuruutsu",
    english: "starfruit",
    other: [],
  },
  {
    japanese: "ドラゴンフルーツ",
    romaji: "doragonfuruutsu",
    english: "dragon fruit",
    other: [],
  },
  { japanese: "アボカド", romaji: "abokado", english: "avocado", other: [] },
  { japanese: "ライム", romaji: "raimu", english: "lime", other: [] },
  {
    japanese: "ジャックフルーツ",
    romaji: "jakkufuruutsu",
    english: "jackfruit",
    other: [],
  },
  {
    japanese: "クムクワット",
    romaji: "kumukuwatto",
    english: "kumquat",
    other: [],
  },
  {
    japanese: "デート",
    romaji: "deeto",
    english: "date (fruit)",
    other: ["date (appointment)"],
  },
  { japanese: "オリーブ", romaji: "oriibu", english: "olive", other: [] },
  {
    japanese: "ココナッツ",
    romaji: "kokonattsu",
    english: "coconut",
    other: [],
  },
  {
    japanese: "アセロラ",
    romaji: "aserora",
    english: "acerola (barbados cherry)",
    other: [],
  },
  {
    japanese: "カシューナッツ",
    romaji: "kashuunattsu",
    english: "cashew fruit",
    other: ["cashew nut"],
  },
  {
    japanese: "ランブータン",
    romaji: "ranbuutan",
    english: "rambutan",
    other: [],
  },
  {
    japanese: "マンゴスチン",
    romaji: "mangosuchin",
    english: "mangosteen",
    other: [],
  },
  { japanese: "ねこ", romaji: "neko", english: "quince", other: ["cat"] }, // Note: "かりん" (karin) is more common for quince, but "ねこ" is an alternate
  {
    japanese: "うめ",
    romaji: "ume",
    english: "ume (japanese plum)",
    other: [],
  },
  { japanese: "スグリ", romaji: "suguri", english: "currant", other: [] },
  {
    japanese: "エルダーベリー",
    romaji: "erudaaberii",
    english: "elderberry",
    other: [],
  },
  {
    japanese: "グーズベリー",
    romaji: "guuzuberii",
    english: "gooseberry",
    other: [],
  },
  {
    japanese: "ハックルベリー",
    romaji: "hakkuruberii",
    english: "huckleberry",
    other: [],
  },
  {
    japanese: "マルベリー",
    romaji: "maruberii",
    english: "mulberry",
    other: [],
  },
  {
    japanese: "タマリンド",
    romaji: "tamarindo",
    english: "tamarind",
    other: [],
  },
  { japanese: "カカオ", romaji: "kakao", english: "cacao (fruit)", other: [] },
  {
    japanese: "サポディーヤ",
    romaji: "sapodiiya",
    english: "sapodilla",
    other: [],
  },
  {
    japanese: "パッションフルーツ",
    romaji: "passhonfuruutsu",
    english: "passion fruit",
    other: [],
  },
  {
    japanese: "サクランボ",
    romaji: "sakuranbo",
    english: "sweet cherry",
    other: [],
  }, // Alternate term for cherry
  {
    japanese: "シークワーサー",
    romaji: "shiikwaasaa",
    english: "shiikwasa (flat lemon)",
    other: [],
  },
  {
    japanese: "ナツメ",
    romaji: "natsume",
    english: "jujube",
    other: ["date palm"],
  },
  {
    japanese: "プルーン",
    romaji: "puruun",
    english: "prune (dried plum)",
    other: [],
  },
  {
    japanese: "アプリコット",
    romaji: "apurikotto",
    english: "apricot",
    other: [],
  }, // Alternate katakana term
  { japanese: "カリン", romaji: "karin", english: "quince", other: [] }, // More common term for quince
  {
    japanese: "ベルガモット",
    romaji: "berugamotto",
    english: "bergamot orange",
    other: [],
  },
  {
    japanese: "ブラッドオレンジ",
    romaji: "buraddoorenji",
    english: "blood orange",
    other: [],
  },
  {
    japanese: "クレメンタイン",
    romaji: "kurementain",
    english: "clementine",
    other: [],
  },
  {
    japanese: "タンジェリン",
    romaji: "tanjerin",
    english: "tangerine",
    other: [],
  },
  {
    japanese: "サツマ",
    romaji: "satsuma",
    english: "satsuma (citrus)",
    other: [],
  },
  {
    japanese: "ポンカン",
    romaji: "ponkan",
    english: "ponkan (citrus)",
    other: [],
  },
  {
    japanese: "ハッサク",
    romaji: "hassaku",
    english: "hassaku orange",
    other: [],
  },
  {
    japanese: "イヨカン",
    romaji: "iyokan",
    english: "iyokan (citrus)",
    other: [],
  },
  {
    japanese: "デコポン",
    romaji: "dekopon",
    english: "dekopon (citrus hybrid)",
    other: [],
  },
  {
    japanese: "カボス",
    romaji: "kabosu",
    english: "kabosu (citrus)",
    other: [],
  },
  {
    japanese: "スダチ",
    romaji: "sudachi",
    english: "sudachi (citrus)",
    other: [],
  },
  {
    japanese: "ヘーゼルナッツ",
    romaji: "heezurunattsu",
    english: "hazelnut fruit",
    other: ["hazelnut"],
  },
  {
    japanese: "ピスタチオ",
    romaji: "pisutachio",
    english: "pistachio fruit",
    other: ["pistachio nut"],
  },
  {
    japanese: "アーモンド",
    romaji: "aamondo",
    english: "almond fruit",
    other: ["almond nut"],
  },
  {
    japanese: "チェリモヤ",
    romaji: "cherimoya",
    english: "cherimoya",
    other: [],
  },
  {
    japanese: "サラック",
    romaji: "sarakku",
    english: "salak (snake fruit)",
    other: [],
  },
  {
    japanese: "バンレイシ",
    romaji: "banreishi",
    english: "soursop",
    other: [],
  },
  { japanese: "アテモヤ", romaji: "atemoya", english: "atemoya", other: [] },
  { japanese: "ノニ", romaji: "noni", english: "noni fruit", other: [] },
  { japanese: "ビラ", romaji: "bira", english: "bael fruit", other: [] },
  { japanese: "ルバーブ", romaji: "rubaabu", english: "rhubarb", other: [] }, // Often used as a fruit in cooking
  { japanese: "カムカム", romaji: "kamukamu", english: "camu camu", other: [] },
  { japanese: "アサイー", romaji: "asaii", english: "açaí", other: [] },
  { japanese: "ガラナ", romaji: "garana", english: "guarana", other: [] },
  {
    japanese: "ヤマモモ",
    romaji: "yamamomo",
    english: "yangmei (waxberry)",
    other: [],
  },
  {
    japanese: "シャカトウ",
    romaji: "shakatou",
    english: "custard apple",
    other: [],
  },
  { japanese: "トマト", romaji: "tomato", english: "tomato", other: [] }, // Botanically a fruit
  {
    japanese: "ナシ",
    romaji: "nashi",
    english: "asian pear",
    other: ["none", "without"],
  }, // Specific variety
  {
    japanese: "セイヨウナシ",
    romaji: "seiyounashi",
    english: "western pear",
    other: [],
  },
  {
    japanese: "スイートレモン",
    romaji: "suiitoremon",
    english: "sweet lemon",
    other: [],
  },
  {
    japanese: "マラクジャ",
    romaji: "marakujya",
    english: "maracuya (passion fruit)",
    other: [],
  },
  {
    japanese: "カラマンシー",
    romaji: "karamanshii",
    english: "calamansi",
    other: [],
  },
  {
    japanese: "ウグイスカズラ",
    romaji: "uguisukazura",
    english: "cloudberry",
    other: [],
  },
  {
    japanese: "サンザシ",
    romaji: "sanzashi",
    english: "hawthorn berry",
    other: [],
  },
  {
    japanese: "ローズヒップ",
    romaji: "roozuhippu",
    english: "rose hip",
    other: [],
  },
  {
    japanese: "ユスラウメ",
    romaji: "yusuraume",
    english: "chinese plum",
    other: [],
  },
  {
    japanese: "グミ",
    romaji: "gumi",
    english: "silverberry",
    other: ["gummy candy"],
  },
];

export default fruits;

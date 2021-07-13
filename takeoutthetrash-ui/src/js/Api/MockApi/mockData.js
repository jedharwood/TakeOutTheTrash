const cities = [
  {
    id: 1,
    name: "Yokohama",
    hasRules: true,
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
  },
  {
    id: 2,
    name: "Fujisawa",
    hasRules: false,
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
  },
  {
    id: 3,
    name: "Zushi",
    hasRules: true,
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
  },
  {
    id: 4,
    name: "Koenji",
    hasRules: true,
    prefecture: {
      id: 41,
      name: "Tokyo",
    },
  },
  {
    id: 5,
    name: "Shinjuku",
    hasRules: true,
    prefecture: {
      id: 41,
      name: "Tokyo",
    },
  },
  {
    id: 6,
    name: "Sapporo",
    hasRules: true,
    prefecture: {
      id: 12,
      name: "Hokkaido",
    },
  },
];

const prefectures = [
  {
    id: 1,
    name: "Aichi",
    hasCities: false,
  },
  {
    id: 2,
    name: "Akita",
    hasCities: false,
  },
  {
    id: 3,
    name: "Aomori",
    hasCities: false,
  },
  {
    id: 4,
    name: "Chiba",
    hasCities: false,
  },
  {
    id: 5,
    name: "Ehime",
    hasCities: false,
  },
  {
    id: 6,
    name: "Fukui",
    hasCities: false,
  },
  {
    id: 7,
    name: "Fukuoka",
    hasCities: false,
  },
  {
    id: 8,
    name: "Fukushima",
    hasCities: false,
  },
  {
    id: 9,
    name: "Gifu",
    hasCities: false,
  },
  {
    id: 10,
    name: "Gunma",
    hasCities: false,
  },
  {
    id: 11,
    name: "Hiroshima",
    hasCities: false,
  },
  {
    id: 12,
    name: "Hokkaido",
    hasCities: true,
  },
  {
    id: 13,
    name: "Hyōgo",
    hasCities: false,
  },
  {
    id: 14,
    name: "Ibaraki",
    hasCities: false,
  },
  {
    id: 15,
    name: "Ishikawa",
    hasCities: false,
  },
  {
    id: 16,
    name: "Iwate",
    hasCities: false,
  },
  {
    id: 17,
    name: "Kagawa",
    hasCities: false,
  },
  {
    id: 18,
    name: "Kagoshima",
    hasCities: false,
  },
  {
    id: 19,
    name: "Kanagawa",
    hasCities: true,
  },
  {
    id: 20,
    name: "Kōchi",
    hasCities: false,
  },
  {
    id: 21,
    name: "Kumamoto",
    hasCities: false,
  },
  {
    id: 22,
    name: "Kyoto",
    hasCities: false,
  },
  {
    id: 23,
    name: "Mie",
    hasCities: false,
  },
  {
    id: 24,
    name: "Miyagi",
    hasCities: false,
  },
  {
    id: 25,
    name: "Miyazaki",
    hasCities: false,
  },
  {
    id: 26,
    name: "Nagano",
    hasCities: false,
  },
  {
    id: 27,
    name: "Nagasaki",
    hasCities: false,
  },
  {
    id: 28,
    name: "Nara",
    hasCities: false,
  },
  {
    id: 29,
    name: "Niigata",
    hasCities: false,
  },
  {
    id: 30,
    name: "Ōita",
    hasCities: false,
  },
  {
    id: 31,
    name: "Okayama",
    hasCities: false,
  },
  {
    id: 32,
    name: "Okinawa",
    hasCities: false,
  },
  {
    id: 33,
    name: "Osaka",
    hasCities: false,
  },
  {
    id: 34,
    name: "Saga",
    hasCities: false,
  },
  {
    id: 35,
    name: "Saitama",
    hasCities: false,
  },
  {
    id: 36,
    name: "Shiga",
    hasCities: false,
  },
  {
    id: 37,
    name: "Shimane",
    hasCities: false,
  },
  {
    id: 38,
    name: "Shizuoka",
    hasCities: false,
  },
  {
    id: 39,
    name: "Tochigi",
    hasCities: false,
  },
  {
    id: 40,
    name: "Tokushima",
    hasCities: false,
  },
  {
    id: 41,
    name: "Tokyo",
    hasCities: true,
  },
  {
    id: 42,
    name: "Tottori",
    hasCities: false,
  },
  {
    id: 43,
    name: "Toyama",
    hasCities: false,
  },
  {
    id: 44,
    name: "Wakayama",
    hasCities: false,
  },
  {
    id: 45,
    name: "Yamagata",
    hasCities: false,
  },
  {
    id: 46,
    name: "Yamaguchi",
    hasCities: false,
  },
  {
    id: 47,
    name: "Yamanashi",
    hasCities: false,
  },
];

module.exports = {
  cities,
  prefectures,
};

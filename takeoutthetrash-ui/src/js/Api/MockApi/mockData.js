const cities = [
  {
    id: 1,
    name: "Yokohama",
    rules: [
      {
        PETBottles: {
          collectionDay: 1,
          instructions: "Wash, remove label and cap.",
        },
        aluminiumCans: {
          collectionDay: 2,
          instructions: "Wash.",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Fujisawa",
    rules: [],
  },
  {
    id: 3,
    name: "Zushi",
    rules: [],
  },
  {
    id: 4,
    name: "Koenji",
    rules: [],
  },
  {
    id: 5,
    name: "Shinjuku",
    rules: [],
  },
  {
    id: 6,
    name: "Sapporo",
    rules: [],
  },
];

const prefectures = [
  {
    id: 1,
    name: "Aichi",
    cities: [],
  },
  {
    id: 2,
    name: "Akita",
    cities: [],
  },
  {
    id: 3,
    name: "Aomori",
    cities: [],
  },
  {
    id: 4,
    name: "Chiba",
    cities: [],
  },
  {
    id: 5,
    name: "Ehime",
    cities: [],
  },
  {
    id: 6,
    name: "Fukui",
    cities: [],
  },
  {
    id: 7,
    name: "Fukuoka",
    cities: [],
  },
  {
    id: 8,
    name: "Fukushima",
    cities: [],
  },
  {
    id: 9,
    name: "Gifu",
    cities: [],
  },
  {
    id: 10,
    name: "Gunma",
    cities: [],
  },
  {
    id: 11,
    name: "Hiroshima",
    cities: [],
  },
  {
    id: 12,
    name: "Hokkaido",
    cities: [
      {
        id: 6,
        name: "Sapporo",
        rules: [],
      },
    ],
  },
  {
    id: 13,
    name: "Hyōgo",
    cities: [],
  },
  {
    id: 14,
    name: "Ibaraki",
    cities: [],
  },
  {
    id: 15,
    name: "Ishikawa",
    cities: [],
  },
  {
    id: 16,
    name: "Iwate",
    cities: [],
  },
  {
    id: 17,
    name: "Kagawa",
    cities: [],
  },
  {
    id: 18,
    name: "Kagoshima",
    cities: [],
  },
  {
    id: 19,
    name: "Kanagawa",
    cities: [
      {
        id: 1,
        name: "Yokohama",
        rules: [
          {
            PETBottles: {
              collectionDay: 1,
              instructions: "Wash, remove label and cap.",
            },
            aluminiumCans: {
              collectionDay: 2,
              instructions: "Wash.",
            },
          },
        ],
      },
      {
        id: 2,
        name: "Fujisawa",
        rules: [],
      },
      {
        id: 3,
        name: "Zushi",
        rules: [],
      },
    ],
  },
  {
    id: 20,
    name: "Kōchi",
    cities: [],
  },
  {
    id: 21,
    name: "Kumamoto",
    cities: [],
  },
  {
    id: 22,
    name: "Kyoto",
    cities: [],
  },
  {
    id: 23,
    name: "Mie",
    cities: [],
  },
  {
    id: 24,
    name: "Miyagi",
    cities: [],
  },
  {
    id: 25,
    name: "Miyazaki",
    cities: [],
  },
  {
    id: 26,
    name: "Nagano",
    cities: [],
  },
  {
    id: 27,
    name: "Nagasaki",
    cities: [],
  },
  {
    id: 28,
    name: "Nara",
    cities: [],
  },
  {
    id: 29,
    name: "Niigata",
    cities: [],
  },
  {
    id: 30,
    name: "Ōita",
    cities: [],
  },
  {
    id: 31,
    name: "Okayama",
    cities: [],
  },
  {
    id: 32,
    name: "Okinawa",
    cities: [],
  },
  {
    id: 33,
    name: "Osaka",
    cities: [],
  },
  {
    id: 34,
    name: "Saga",
    cities: [],
  },
  {
    id: 35,
    name: "Saitama",
    cities: [],
  },
  {
    id: 36,
    name: "Shiga",
    cities: [],
  },
  {
    id: 37,
    name: "Shimane",
    cities: [],
  },
  {
    id: 38,
    name: "Shizuoka",
    cities: [],
  },
  {
    id: 39,
    name: "Tochigi",
    cities: [],
  },
  {
    id: 40,
    name: "Tokushima",
    cities: [],
  },
  {
    id: 41,
    name: "Tokyo",
    cities: [
      {
        id: 4,
        name: "Koenji",
        rules: [],
      },
      {
        id: 5,
        name: "Shinjuku",
        rules: [],
      },
    ],
  },
  {
    id: 42,
    name: "Tottori",
    cities: [],
  },
  {
    id: 43,
    name: "Toyama",
    cities: [],
  },
  {
    id: 44,
    name: "Wakayama",
    cities: [],
  },
  {
    id: 45,
    name: "Yamagata",
    cities: [],
  },
  {
    id: 46,
    name: "Yamaguchi",
    cities: [],
  },
  {
    id: 47,
    name: "Yamanashi",
    cities: [],
  },
];

module.exports = {
  cities,
  prefectures,
};

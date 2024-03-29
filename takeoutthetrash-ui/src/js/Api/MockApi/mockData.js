const cities = [
  {
    id: 1,
    name: "Yokohama",
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
    rating: 0,
    rules: [
      {
        id: 1,
        name: "Monday",
        types: [
          {
            name: "Burnable waste",
            description:
              "Food waste, fabric (shoes & clothes), used paper (kitchen paper, tissues & envolopes), small plastic items.",
            instructions: "Place outside before 8am in a translucent 45L bag.",
            irregularFrequency: "",
          },
          {
            name: "Non-burnable waste",
            description:
              "Ceramics, metal cookwares, umbrellas, broken glass, neon lights, light bulbs, small appliances, CDs, cassetts tapes, aerosols.",
            instructions: "",
            irregularFrequency: "",
          },
          {
            name: "Batteries",
            description: "Batteries.",
            instructions: "",
            irregularFrequency: "",
          },
        ],
      },
      {
        id: 2,
        name: "Tuesday",
        types: [
          {
            name: "Steel cans",
            description:
              "Food & drink cans made from steel (check with a magnet if unsure).",
            instructions: "Washed with labels removed.",
            irregularFrequency: "",
          },
          {
            name: "Glass bottles",
            description: "Glass bottles and jars.",
            instructions: "Washed with labels & lids removed.",
            irregularFrequency: "",
          },
          {
            name: "PET bottles",
            description: "Bottles and other containers made from PET.",
            instructions: "Washed with labels & lids removed.",
            irregularFrequency: "",
          },
          {
            name: "Sharp objects",
            description: "Knives, scissors & other bladed tools.",
            instructions: "Wrapped and carefully labelled.",
            irregularFrequency: "",
          },
        ],
      },
      {
        id: 3,
        name: "Wednesday",
        types: [],
      },
      {
        id: 4,
        name: "Thursday",
        types: [
          {
            name: "Cardboard & paper",
            description: "Cardboard and paper.",
            instructions: "Clean cardboard and paper bundled with string.",
            irregularFrequency: "1st and 3rd Thursday of the month.",
          },
          {
            name: "Aluminium cans",
            description: "Food & drink cans made from Aluminium.",
            instructions: "Washed with labels removed.",
            irregularFrequency: "1st and 3rd Thursday of the month.",
          },
        ],
      },
      {
        id: 5,
        name: "Friday",
        types: [
          {
            name: "Burnable waste",
            description:
              "Food waste, fabric (shoes & clothes), used paper (kitchen paper, tissues & envolopes), small plastic items.",
            instructions: "Place outside before 8am in a translucent 45L bag.",
            irregularFrequency: "",
          },
        ],
      },
      {
        id: 6,
        name: "Saturday",
        types: [
          {
            name: "Plastic",
            description:
              "Food containers, cups, shampoo bottles, bags, trays, tofu containers, lunch boxes, polystyrene, egg boxes & plastic wrappers.",
            instructions: "Washed with any paper labels removed.",
            irregularFrequency: "",
          },
        ],
      },
      {
        id: 7,
        name: "Sunday",
        types: [],
      },
    ],
  },
  {
    id: 2,
    name: "Fujisawa",
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
    rating: 0,
    rules: [],
  },
  {
    id: 3,
    name: "Zushi",
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
    rating: 0,
    rules: [],
  },
  {
    id: 4,
    name: "Koenji",
    prefecture: {
      id: 41,
      name: "Tokyo",
    },
    rating: 0,
    rules: [],
  },
  {
    id: 5,
    name: "Shinjuku",
    prefecture: {
      id: 41,
      name: "Tokyo",
    },
    rating: 0,
    rules: [],
  },
  {
    id: 6,
    name: "Sapporo",
    prefecture: {
      id: 12,
      name: "Hokkaido",
    },
    rating: 0,
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
        prefecture: {
          id: 12,
          name: "Hokkaido",
        },
        rating: 0,
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
        prefecture: {
          id: 19,
          name: "Kanagawa",
        },
        rating: 0,
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
        prefecture: {
          id: 19,
          name: "Kanagawa",
        },
        rating: 0,
        rules: [],
      },
      {
        id: 3,
        name: "Zushi",
        prefecture: {
          id: 19,
          name: "Kanagawa",
        },
        rating: 0,
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
        prefecture: {
          id: 41,
          name: "Tokyo",
        },
        rating: 0,
        rules: [],
      },
      {
        id: 5,
        name: "Shinjuku",
        prefecture: {
          id: 41,
          name: "Tokyo",
        },
        rating: 0,
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

const feedback = [
  {
    id: 1,
    cityId: 1,
    feedbackFormValues: {
      comment: "A comment.",
      email: "user@domain.com",
    },
    createdAt: 1643979302823,
  },
];

module.exports = {
  cities,
  prefectures,
  feedback,
};

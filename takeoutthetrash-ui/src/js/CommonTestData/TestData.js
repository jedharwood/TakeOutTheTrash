export const arrayOfPrefectures = [
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
    id: 19,
    name: "Aomori",
    cities: [
      {
        id: 1,
        name: "Yokohama",
        prefecture: {
          id: 19,
          name: "Kanagawa",
        },
        rating: 0,
        rules: [],
      },
      {
        id: 2,
        name: "City Two",
        prefecture: {
          id: 19,
          name: "Kanagawa",
        },
        rating: 0,
        rules: [],
      },
    ],
  },
];

export const arrayOfCities = [
  {
    id: 1,
    name: "Yokohama",
    prefecture: {
      id: 19,
      name: "Kanagawa",
    },
    rating: 0,
    rules: [],
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
];

export const aCity = {
  id: 1,
  name: "Yokohama",
  prefecture: {
    id: 19,
    name: "Kanagawa",
  },
  rating: 0,
  rules: [],
};

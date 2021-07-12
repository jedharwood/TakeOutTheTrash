const cities = [
  {
    id: 1,
    name: "Yokohama",
    hasRules: true,
    prefecture: {
      id: 1,
      name: "Kanagawa",
    },
  },
  {
    id: 2,
    name: "Fujisawa",
    hasRules: false,
    prefecture: {
      id: 2,
      name: "Shonan",
    },
  },
  {
    id: 3,
    name: "Zushi",
    hasRules: true,
    prefecture: {
      id: 2,
      name: "Shonan",
    },
  },
];

module.exports = {
  cities,
};

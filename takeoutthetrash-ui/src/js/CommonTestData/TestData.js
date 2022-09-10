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

export const prefectureWithCities = {
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
};

export const prefectureWithNoCities = {
  id: 1,
  name: "Aichi",
  cities: [],
};

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

export const cityWithRules = {
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
};

export const cityWithNoRules = {
  id: 2,
  name: "Fujisawa",
  prefecture: {
    id: 19,
    name: "Kanagawa",
  },
  rating: 0,
  rules: [],
};

export const feedbackFormValues = {
  comment: "It's all in the reflexes.",
  email: "jackburton@porkchopexpress.com",
};

export const emptyFeedbackFormValues = {
  comment: "",
  email: "",
};

export const whitespaceFeedbackFormValues = {
  comment: " ",
  email: " ",
};

export const commentWith149Characters = {
  comment: "A comment with one hundred and fourty nine characters. A comment with one hundred and fourty nine characters. A comment with one hundred and fourt...",
  email: "",
};

export const commentWith150Characters = {
  comment: "A comment with one hundred and fifty characters. A comment with one hundred and fifty characters. A comment with one hundred and fifty characters.....",
  email: "",
};

export const commentWith151Characters = {
  comment: "A comment with one hundred and fifty one characters. A comment with one hundred and fifty one characters. A comment with one hundred and fifty one c...",
  email: "",
};

export const invalidEmailAddressFormValues = {
  comment: "A comment with an...",
  email: "...invalid email address",
};

export const tooltipTypeDefault = {
  description: "A description.",
  instructions: "",
  irregularFrequency: "Sometimes do a thing but not always, y'know?",
};

export const tooltipTypeWithDescriptionAndInstructions = {
  description: "A description.",
  instructions: "Some instructions.",
  irregularFrequency: "Sometimes do a thing but not always, y'know?",
};

export const tooltipTypeWithNoDescriptionButInstructions = {
  description: "",
  instructions: "Some instructions.",
  irregularFrequency: "Sometimes do a thing but not always, y'know?",
};

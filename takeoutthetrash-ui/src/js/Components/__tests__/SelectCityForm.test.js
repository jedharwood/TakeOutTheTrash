import { ArrayIsEmpty } from "../SelectCityForm";

describe("Select city form", () => {
  [
    {
      prefecture: { id: 45, name: "Yamagata", cities: [] },
      expectedResult: true,
    },
    {
      prefecture: {
        id: 41,
        name: "Tokyo",
        cities: [{ id: 4, name: "Koenji", rules: [] }],
      },
      expectedResult: false,
    },
  ].forEach((params) => {
    test(`ArrayIsEmpty should return ${params.expectedResult} if prefecture's cities array is populated/unpopulated`, () => {
      // Act
      const result = ArrayIsEmpty(params.prefecture.cities);

      //Assert
      expect(result).toEqual(params.expectedResult);
    });
  });

  [
    {
      city: { id: 2, name: "Fujisawa", rules: [] },
      expectedResult: true,
    },
    {
      city: {
        id: 1,
        name: "Yokohama",
        rules: [{ PETBottles: { collectionDay: 1 } }],
      },
      expectedResult: false,
    },
  ].forEach((params) => {
    test(`ArrayIsEmpty should return ${params.expectedResult} if city's rules array is populated/unpopulated`, () => {
      // Act
      const result = ArrayIsEmpty(params.city.rules);

      //Assert
      expect(result).toEqual(params.expectedResult);
    });
  });
});

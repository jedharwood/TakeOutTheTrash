import { ArrayIsEmpty } from "../SelectCityForm";
import * as testData from "../../CommonTestData/TestData";

describe("Select city form", () => {
  [
    {
      prefecture: testData.prefectureWithNoCities,
      expectedResult: true,
    },
    {
      prefecture: testData.prefectureWithCities,
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
      city: testData.cityWithNoRules,
      expectedResult: true,
    },
    {
      city: testData.cityWithRules,
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

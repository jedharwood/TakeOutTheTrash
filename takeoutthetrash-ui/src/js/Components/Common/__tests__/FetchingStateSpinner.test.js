import { getSpinnerLegend } from "../FetchingStateSpinner";
import * as testData from "../../../CommonTestData/TestData";

describe("getSpinnerLegend", () => {
  test("should return null if isFetchingCities is false", () => {
    // Arrange
    const isFetchingCities = false;
    const prefecture = {};

    // Act
    const result = getSpinnerLegend(isFetchingCities, prefecture);

    //Assert
    expect(result).toEqual(null);
  });

  test("should return 'Retrieving cities for selected prefecture' if isFetchingCities is true but prefecture is {}", () => {
    // Arrange
    const isFetchingCities = true;
    const prefecture = {};

    // Act
    const result = getSpinnerLegend(isFetchingCities, prefecture);

    //Assert
    expect(result).toEqual("Retrieving cities for selected prefecture");
  });

  test("should interpolate name of prefecture prefecture is populated in state", () => {
    // Arrange
    const isFetchingCities = true;
    const prefecture = testData.arrayOfPrefectures[0];

    // Act
    const result = getSpinnerLegend(isFetchingCities, prefecture);

    //Assert
    expect(result).toEqual("Retrieving cities for Aichi");
  });
});

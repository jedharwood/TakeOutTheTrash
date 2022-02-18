import * as sut from "../SpinnerLegend";
import * as testData from "../../../CommonTestData/TestData";

describe("getSpinnerLegend", () => {
  test("should return null if isFetchingCities, isPostingFeedbackForm and isFetchingCity are false", () => {
    // Arrange
    const isFetchingCities = false;
    const isPostingFeedbackForm = false;
    const prefecture = {};
    const isFetchingCity = false;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm,
      isFetchingCity
    );

    //Assert
    expect(result).toEqual(null);
  });

  test("should return 'Retrieving cities for selected prefecture' if isFetchingCities is true but prefecture is {}", () => {
    // Arrange
    const isFetchingCities = true;
    const isPostingFeedbackForm = false;
    const prefecture = {};
    const isFetchingCity = false;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm,
      isFetchingCity
    );

    //Assert
    expect(result).toEqual("Retrieving cities for selected prefecture");
  });

  test("should interpolate name of prefecture if prefecture is populated in state", () => {
    // Arrange
    const isFetchingCities = true;
    const isPostingFeedbackForm = false;
    const prefecture = testData.arrayOfPrefectures[0];
    const isFetchingCity = false;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm,
      isFetchingCity
    );

    //Assert
    expect(result).toEqual("Retrieving cities for Aichi");
  });

  test("should return 'Retrieving rules for selected city' if isFetchingCities is true but selectedCityId is out of range", () => {
    // Arrange
    const isFetchingCities = false;
    const isPostingFeedbackForm = false;
    const prefecture = testData.prefectureWithCities;
    const isFetchingCity = true;
    const selectedCityId = 4;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm,
      isFetchingCity,
      selectedCityId
    );

    //Assert
    expect(result).toEqual("Retrieving rules for selected city");
  });

  test("should interpolate name of city if city is populated in state", () => {
    // Arrange
    const isFetchingCities = false;
    const isPostingFeedbackForm = false;
    const prefecture = testData.prefectureWithCities;
    const isFetchingCity = true;
    const selectedCityId = 1;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm,
      isFetchingCity,
      selectedCityId
    );

    //Assert
    expect(result).toEqual("Retrieving rules for Yokohama");
  });

  test("should return 'Posting feedback' if isPostingFeedbackForm: true", () => {
    // Arrange
    const isFetchingCities = false;
    const isPostingFeedbackForm = true;
    const prefecture = {};
    const isFetchingCity = false;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm,
      isFetchingCity
    );

    //Assert
    expect(result).toEqual("Posting feedback");
  });
});

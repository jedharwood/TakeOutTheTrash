import * as sut from "../SpinnerLegend";
import * as testData from "../../../CommonTestData/TestData";

const defaultTestState = {
  isFetchingCities: false,
  prefecture: {},
  isPostingFeedbackForm: false,
  isFetchingCity: false,
  selectedCityId: undefined,
  postingFeedbackFormFailed: false,
  postFailureCount: 0,
};

describe("getSpinnerLegend", () => {
  test("should return null if isFetchingCities, isPostingFeedbackForm, isFetchingCity and postingFeedbackFormFailed are false", () => {
    // Act
    const result = sut.getSpinnerLegend(
      defaultTestState.isFetchingCities,
      defaultTestState.prefecture,
      defaultTestState.isPostingFeedbackForm,
      defaultTestState.isFetchingCity,
      defaultTestState.selectedCityId,
      defaultTestState.postingFeedbackFormFailed,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual(null);
  });

  test("should return 'Retrieving cities for selected prefecture' if isFetchingCities is true but prefecture is {}", () => {
    // Arrange
    const isFetchingCities = true;

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      defaultTestState.prefecture,
      defaultTestState.isPostingFeedbackForm,
      defaultTestState.isFetchingCity,
      defaultTestState.selectedCityId,
      defaultTestState.postingFeedbackFormFailed,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual("Retrieving cities for selected prefecture");
  });

  test("should interpolate name of prefecture if prefecture is populated in state", () => {
    // Arrange
    const isFetchingCities = true;
    const prefecture = testData.arrayOfPrefectures[0];

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      defaultTestState.isPostingFeedbackForm,
      defaultTestState.isFetchingCity,
      defaultTestState.selectedCityId,
      defaultTestState.postingFeedbackFormFailed,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual("Retrieving cities for Aichi");
  });

  test("should return 'Retrieving rules for selected city' if isFetchingCities is true but selectedCityId is out of range", () => {
    // Arrange
    const prefecture = testData.prefectureWithCities;
    const isFetchingCity = true;
    const selectedCityId = 4;

    // Act
    const result = sut.getSpinnerLegend(
      defaultTestState.isFetchingCities,
      prefecture,
      defaultTestState.isPostingFeedbackForm,
      isFetchingCity,
      selectedCityId,
      defaultTestState.postingFeedbackFormFailed,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual("Retrieving rules for selected city");
  });

  test("should interpolate name of city if city is populated in state", () => {
    // Arrange
    const prefecture = testData.prefectureWithCities;
    const isFetchingCity = true;
    const selectedCityId = 1;

    // Act
    const result = sut.getSpinnerLegend(
      defaultTestState.isFetchingCities,
      prefecture,
      defaultTestState.isPostingFeedbackForm,
      isFetchingCity,
      selectedCityId,
      defaultTestState.postingFeedbackFormFailed,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual("Retrieving rules for Yokohama");
  });

  test("should return 'Posting feedback' if isPostingFeedbackForm: true", () => {
    // Arrange
    const isPostingFeedbackForm = true;

    // Act
    const result = sut.getSpinnerLegend(
      defaultTestState.isFetchingCities,
      defaultTestState.prefecture,
      isPostingFeedbackForm,
      defaultTestState.isFetchingCity,
      defaultTestState.selectedCityId,
      defaultTestState.postingFeedbackFormFailed,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual("Posting feedback");
  });

  test("should return 'Oops! Something went wrong...' if postingFeedbackFormFailed: true and postFailureCount < 3", () => {
    // Arrange
    const postingFeedbackFormFailed = true;
    const postFailureCount = 3;

    // Act
    const result = sut.getSpinnerLegend(
      defaultTestState.isFetchingCities,
      defaultTestState.prefecture,
      defaultTestState.isPostingFeedbackForm,
      defaultTestState.isFetchingCity,
      defaultTestState.selectedCityId,
      postingFeedbackFormFailed,
      postFailureCount
    );

    //Assert
    expect(result).toEqual("Oops! Something went wrong...");
  });

  test("should return 'Please try again later.' if postingFeedbackFormFailed: true and postFailureCount > 3", () => {
    // Arrange
    const postingFeedbackFormFailed = true;
    const postFailureCount = 4;

    // Act
    const result = sut.getSpinnerLegend(
      defaultTestState.isFetchingCities,
      defaultTestState.prefecture,
      defaultTestState.isPostingFeedbackForm,
      defaultTestState.isFetchingCity,
      defaultTestState.selectedCityId,
      postingFeedbackFormFailed,
      postFailureCount
    );

    //Assert
    expect(result).toEqual("Please try again later.");
  });
});

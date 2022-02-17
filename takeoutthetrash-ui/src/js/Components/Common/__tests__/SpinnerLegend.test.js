import * as sut from "../SpinnerLegend";
import * as testData from "../../../CommonTestData/TestData";

describe("getSpinnerLegend", () => {
  test("should return null if isFetchingCities and isPostingFeedbackForm are false", () => {
    // Arrange
    const isFetchingCities = false;
    const isPostingFeedbackForm = false;
    const prefecture = {};

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm
    );

    //Assert
    expect(result).toEqual(null);
  });

  test("should return 'Retrieving cities for selected prefecture' if isFetchingCities is true but prefecture is {}", () => {
    // Arrange
    const isFetchingCities = true;
    const isPostingFeedbackForm = false;
    const prefecture = {};

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm
    );

    //Assert
    expect(result).toEqual("Retrieving cities for selected prefecture");
  });

  test("should interpolate name of prefecture prefecture is populated in state", () => {
    // Arrange
    const isFetchingCities = true;
    const isPostingFeedbackForm = false;
    const prefecture = testData.arrayOfPrefectures[0];

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm
    );

    //Assert
    expect(result).toEqual("Retrieving cities for Aichi");
  });

  test("should return 'Posting feedback' if isPostingFeedbackForm: true", () => {
    // Arrange
    const isFetchingCities = false;
    const isPostingFeedbackForm = true;
    const prefecture = {};

    // Act
    const result = sut.getSpinnerLegend(
      isFetchingCities,
      prefecture,
      isPostingFeedbackForm
    );

    //Assert
    expect(result).toEqual("Posting feedback");
  });
});

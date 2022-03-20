import * as sut from "../FeedbackForm";
import * as testData from "../../CommonTestData/TestData";

describe("preventFormSubmission", () => {
  test("should return true if formValues: comment is an empty string", () => {
    // Arrange
    const formValues = testData.emptyFeedbackFormValues;
    const city = testData.cityWithRules;
    const errors = {};

    // Act
    const result = sut.preventFormSubmission(formValues, city, errors);

    //Assert
    expect(result).toEqual(true);
  });

  test("should return true if city is an empty object", () => {
    // Arrange
    const formValues = testData.feedbackFormValues;
    const city = {};
    const errors = {};

    // Act
    const result = sut.preventFormSubmission(formValues, city, errors);

    //Assert
    expect(result).toEqual(true);
  });

  test("should return true if errors is populated", () => {
    // Arrange
    const formValues = testData.feedbackFormValues;
    const city = testData.cityWithRules;
    const errors = { comment: "Error message" };

    // Act
    const result = sut.preventFormSubmission(formValues, city, errors);

    //Assert
    expect(result).toEqual(true);
  });

  test("should return false if conditions are satisfied", () => {
    // Arrange
    const formValues = testData.feedbackFormValues;
    const city = testData.cityWithRules;
    const errors = {};

    // Act
    const result = sut.preventFormSubmission(formValues, city, errors);

    //Assert
    expect(result).toEqual(false);
  });
});

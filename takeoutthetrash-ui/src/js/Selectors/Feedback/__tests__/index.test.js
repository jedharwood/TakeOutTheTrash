import * as sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("feedback selectors", () => {
  describe("getFeedbackFormValues", () => {
    test("when feedbackFormValues are not set selector should default to an empty object", () => {
      // Arrange
      const state = {
        feedback: {},
      };

      // Act
      const result = sut.getFeedbackFormValues(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when feedbackFormValues is an empty object selector should default to an empty object", () => {
      // Arrange
      const state = {
        feedback: {
          feedbackFormValues: {},
        },
      };

      // Act
      const result = sut.getFeedbackFormValues(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when feedbackFormValues are set selector should return a populated object", () => {
      // Arrange
      const state = {
        feedback: {
          feedbackFormValues: testData.feedbackFormValues,
        },
      };

      // Act
      const result = sut.getFeedbackFormValues(state);

      // Assert
      expect(result).toEqual(testData.feedbackFormValues);
    });
  });
});

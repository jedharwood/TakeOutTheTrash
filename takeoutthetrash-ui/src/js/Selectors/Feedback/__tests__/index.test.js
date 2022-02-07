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

  describe("isPostingFeedbackForm", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when isPostingFeedbackForm is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          feedback: {
            isPostingFeedbackForm: value,
          },
        };

        // Act
        const result = sut.isPostingFeedbackForm(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when isPostingFeedbackForm is true should return true", () => {
      // Arrange
      const state = {
        feedback: {
          isPostingFeedbackForm: true,
        },
      };

      // Act
      const result = sut.isPostingFeedbackForm(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("postingFeedbackFormSucceeded", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when postingFeedbackFormSucceeded is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          feedback: {
            postingFeedbackFormSucceeded: value,
          },
        };

        // Act
        const result = sut.postingFeedbackFormSucceeded(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when postingFeedbackFormSucceeded is true should return true", () => {
      // Arrange
      const state = {
        feedback: {
          postingFeedbackFormSucceeded: true,
        },
      };

      // Act
      const result = sut.postingFeedbackFormSucceeded(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("postingFeedbackFormFailed", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when postingFeedbackFormFailed is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          feedback: {
            postingFeedbackFormFailed: value,
          },
        };

        // Act
        const result = sut.postingFeedbackFormFailed(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when postingFeedbackFormFailed is true should return true", () => {
      // Arrange
      const state = {
        feedback: {
          postingFeedbackFormFailed: true,
        },
      };

      // Act
      const result = sut.postingFeedbackFormFailed(state);

      // Assert
      expect(result).toEqual(true);
    });
  });
});

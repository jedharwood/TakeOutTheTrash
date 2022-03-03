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

  describe("getPostFailureCount", () => {
    test("should default to zero", () => {
      // Arrange
      const state = {
        feedback: {},
      };

      // Act
      const result = sut.getPostFailureCount(state);

      // Assert
      expect(result).toEqual(0);
    });

    test("should return postFailureCount", () => {
      // Arrange
      const state = {
        feedback: {
          postFailureCount: 3,
        },
      };

      // Act
      const result = sut.getPostFailureCount(state);

      // Assert
      expect(result).toEqual(3);
    });
  });

  describe("displayRetryFailureMessage", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when displayRetryFailureMessage is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          feedback: {
            displayRetryFailureMessage: value,
          },
        };

        // Act
        const result = sut.displayRetryFailureMessage(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when displayRetryFailureMessage is true should return true", () => {
      // Arrange
      const state = {
        feedback: {
          displayRetryFailureMessage: true,
        },
      };

      // Act
      const result = sut.displayRetryFailureMessage(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("emailFormFieldEnabled", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when emailFormFieldEnabled is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          feedback: {
            emailFormFieldEnabled: value,
          },
        };

        // Act
        const result = sut.emailFormFieldEnabled(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when emailFormFieldEnabled is true should return true", () => {
      // Arrange
      const state = {
        feedback: {
          emailFormFieldEnabled: true,
        },
      };

      // Act
      const result = sut.emailFormFieldEnabled(state);

      // Assert
      expect(result).toEqual(true);
    });
  });
});

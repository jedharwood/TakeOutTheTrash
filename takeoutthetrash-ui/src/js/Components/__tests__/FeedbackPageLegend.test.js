import * as sut from "../FeedbackPageLegend";

const defaultTestState = {
  displayRetryFailureMessage: false,
  postFailureCount: 0,
};

describe("getFeedbackPageLegend", () => {
  test("should return success message if displayRetryFailureMessage: false", () => {
    // Arrange

    // Act
    const result = sut.getFeedbackPageLegend(
      defaultTestState.displayRetryFailureMessage,
      defaultTestState.postFailureCount
    );
    // Will move these strings into resource file for readability's sake
    //Assert
    expect(result).toEqual(
      "Thankyou for submitting your feedback. If you checked the radio button on the form to request email notification then we will be in contact to let you know when your request has been actioned."
    );
  });

  test("should return failure message if displayRetryFailureMessage: true", () => {
    // Arrange
    const displayRetryFailureMessage = true;

    // Act
    const result = sut.getFeedbackPageLegend(
      displayRetryFailureMessage,
      defaultTestState.postFailureCount
    );

    //Assert
    expect(result).toEqual(
      "Sorry, it appears something went wrong. We will work to resolve the problem as quickly as possible."
    );
  });

  test("should return maxRetries message if displayRetryFailureMessage: true and postFailureCount > 3", () => {
    // Arrange
    const displayRetryFailureMessage = true;
    const postFailureCount = 4;

    // Act
    const result = sut.getFeedbackPageLegend(
      displayRetryFailureMessage,
      postFailureCount
    );

    //Assert
    expect(result).toEqual(
      "We're experiencing server side difficulties. We will work to resolve the problem as quickly as possible. Please try again later."
    );
  });
});

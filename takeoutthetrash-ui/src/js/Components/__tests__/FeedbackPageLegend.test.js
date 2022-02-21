import * as sut from "../FeedbackPageLegend";

describe("getFeedbackPageLegend", () => {
  test("should return success message if displayRetryFailureMessage: false", () => {
    // Arrange
    const displayRetryFailureMessage = false;

    // Act
    const result = sut.getFeedbackPageLegend(displayRetryFailureMessage);
    // Will move these strings into resource file for readability's sake
    //Assert
    expect(result).toEqual(
      "Thankyou for subitting your feedback. If you checked the radio button on the form (that I haven't made yet) to request email notification then we will be in contact to let you know when your request has been actioned."
    );
  });

  test("should return failure message if displayRetryFailureMessage: false", () => {
    // Arrange
    const displayRetryFailureMessage = true;

    // Act
    const result = sut.getFeedbackPageLegend(displayRetryFailureMessage);

    //Assert
    expect(result).toEqual(
      "Sorry, it appears something went wrong. We will work to resolve the problem as quickly as possible."
    );
  });
});

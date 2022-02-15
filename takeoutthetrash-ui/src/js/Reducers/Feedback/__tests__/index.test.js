import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("feedback reducer", () => {
  test("should return initial state", () => {
    // Arrange
    // Act
    const result = sut(undefined, {});

    // Assert
    expect(result).toEqual({ feedbackFormValues: {} });
  });

  test("when handling a FEEDBACK_FORM_VALUES_UPDATED action should update feedbackFormValues", () => {
    // Arrange
    const feedbackFormValues = testData.feedbackFormValues;
    const action = {
      type: actionTypes.FEEDBACK_FORM_VALUES_UPDATED,
      feedbackFormValues,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      feedbackFormValues: testData.feedbackFormValues,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FEEDBACK_FORM_VALUES_UPDATED action with empty payload should update feedbackFormValues", () => {
    // Arrange
    const feedbackFormValues = testData.emptyFeedbackFormValues;
    const action = {
      type: actionTypes.FEEDBACK_FORM_VALUES_UPDATED,
      feedbackFormValues,
    };

    const state = {
      foo: "bar",
      feedbackFormValues: testData.feedbackFormValues,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      feedbackFormValues: testData.emptyFeedbackFormValues,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_FEEDBACK_FORM_REQUESTED action should set isPostingFeedbackForm: true and postingFeedbackFormSucceeded: false", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      isPostingFeedbackForm: true,
      postingFeedbackFormSucceeded: false,
      postingFeedbackFormFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_FEEDBACK_FORM_REQUESTED action should update postingFeedbackFormSucceeded from true to false", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
    };

    const state = {
      foo: "bar",
      postingFeedbackFormSucceeded: true,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      isPostingFeedbackForm: true,
      postingFeedbackFormSucceeded: false,
      postingFeedbackFormFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_FEEDBACK_FORM_REQUESTED action should update postingFeedbackFormFailed from true to false", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
    };

    const state = {
      foo: "bar",
      postingFeedbackFormSucceeded: false,
      postingFeedbackFormFailed: true,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      isPostingFeedbackForm: true,
      postingFeedbackFormSucceeded: false,
      postingFeedbackFormFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_FEEDBACK_FORM_SUCCEEDED action should set isPostingFeedbackForm: false and postingFeedbackFormSucceeded: true", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_FEEDBACK_FORM_SUCCEEDED,
    };

    const state = {
      foo: "bar",
      isPostingFeedbackForm: true,
      postingFeedbackFormSucceeded: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      isPostingFeedbackForm: false,
      postingFeedbackFormSucceeded: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_FEEDBACK_FORM_FAILED action should set isPostingFeedbackForm: false and postingFeedbackFormFailed: true", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_FEEDBACK_FORM_FAILED,
    };

    const state = {
      foo: "bar",
      isPostingFeedbackForm: true,
      postingFeedbackFormFailed: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      isPostingFeedbackForm: false,
      postingFeedbackFormFailed: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a OPEN_FEEDBACK_FORM_BUTTON_CLICKED action should set postingFeedbackFormSucceeded: false", () => {
    // Arrange
    const action = {
      type: actionTypes.OPEN_FEEDBACK_FORM_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingFeedbackFormSucceeded: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a OPEN_FEEDBACK_FORM_BUTTON_CLICKED action should toggle postingFeedbackFormSucceeded from true to false", () => {
    // Arrange
    const action = {
      type: actionTypes.OPEN_FEEDBACK_FORM_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      postingFeedbackFormSucceeded: true,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingFeedbackFormSucceeded: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});

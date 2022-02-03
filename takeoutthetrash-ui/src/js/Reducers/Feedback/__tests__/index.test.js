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
    const payload = testData.feedbackFormValues;
    const action = {
      type: actionTypes.FEEDBACK_FORM_VALUES_UPDATED,
      payload,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      feedbackFormValues: payload,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FEEDBACK_FORM_VALUES_UPDATED action with empty payload should update feedbackFormValues", () => {
    // Arrange
    const payload = { comment: "", email: "" };
    const action = {
      type: actionTypes.FEEDBACK_FORM_VALUES_UPDATED,
      payload,
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
});

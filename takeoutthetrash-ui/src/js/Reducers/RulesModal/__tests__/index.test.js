import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";

describe("rules modal reducer", () => {
  test("should return initial state", () => {
    // Arrange
    // Act
    const result = sut(undefined, {});

    // Assert
    expect(result).toEqual({ showRulesModal: false });
  });

  test("when handling a OPEN_RULES_MODAL_BUTTON_CLICKED action should set showRulesModal to true", () => {
    // Arrange
    const action = {
      type: actionTypes.OPEN_RULES_MODAL_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      showRulesModal: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      showRulesModal: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a CLOSE_RULES_MODAL_BUTTON_CLICKED action should set showRulesModal to false", () => {
    // Arrange
    const action = {
      type: actionTypes.CLOSE_RULES_MODAL_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      showRulesModal: true,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      showRulesModal: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});

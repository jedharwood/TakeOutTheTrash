import * as sut from "../index";
import * as actionTypes from "../../../Constants/ActionType";

describe("rules modal action", () => {
  describe("openRulesModalButtonClicked", () => {
    test("should dispatch an OPEN_RULES_MODAL_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.openRulesModalButtonClicked();

      // Assert
      expect(result).toEqual({
        type: actionTypes.OPEN_RULES_MODAL_BUTTON_CLICKED,
      });
    });
  });

  describe("closeRulesModalButtonClicked", () => {
    test("should dispatch an CLOSE_RULES_MODAL_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.closeRulesModalButtonClicked();

      // Assert
      expect(result).toEqual({
        type: actionTypes.CLOSE_RULES_MODAL_BUTTON_CLICKED,
      });
    });
  });
});

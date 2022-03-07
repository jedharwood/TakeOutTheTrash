import * as sut from "../index";
import * as actionTypes from "../../../Constants/ActionType";

describe("home action", () => {
  describe("openHomePageButtonClicked", () => {
    test("should dispatch an OPEN_HOME_PAGE_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.openHomePageButtonClicked();

      // Assert
      expect(result).toEqual({
        type: actionTypes.OPEN_HOME_PAGE_BUTTON_CLICKED,
      });
    });
  });
});

import * as sut from "../index";

describe("rules modal selectors", () => {
  describe("showRulesModal", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when showRulesModal is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          rulesModal: {
            showRulesModal: value,
          },
        };

        // Act
        const result = sut.showRulesModal(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when showRulesModal is true should return true", () => {
      // Arrange
      const state = {
        rulesModal: {
          showRulesModal: true,
        },
      };

      // Act
      const result = sut.showRulesModal(state);

      // Assert
      expect(result).toEqual(true);
    });
  });
});

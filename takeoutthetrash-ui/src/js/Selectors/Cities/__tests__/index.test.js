import * as sut from "../index";

describe("cities selectors", () => {
  describe("isFetchingCities", () => {
    test("when isFetchigCities is true should return true", () => {
      // Arrange
      const state = {
        isFetchingCities: true,
      };

      // Act
      const result = sut.isFetchingCities(state);

      // Assert
      expect(result).toEqual(true);
    });
  });
});

import * as sut from "../index";

describe("cities selectors", () => {
  describe("isFetchingCities", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingCities is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          cities: {
            fetchingCities: value,
          },
        };

        // Act
        const result = sut.isFetchingCities(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingCities is true should return true", () => {
      // Arrange
      const state = {
        cities: {
          fetchingCities: true,
        },
      };

      // Act
      const result = sut.isFetchingCities(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("fetchingCitiesSucceeded", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingCitiesSucceeded is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          cities: {
            fetchingCitiesSucceeded: value,
          },
        };

        // Act
        const result = sut.fetchingCitiesSucceeded(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingCitiesSucceeded is true should return true", () => {
      // Arrange
      const state = {
        cities: {
          fetchingCitiesSucceeded: true,
        },
      };

      // Act
      const result = sut.fetchingCitiesSucceeded(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("fetchingCitiesFailed", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingCitiesFailed is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          cities: {
            fetchingCitiesFailed: value,
          },
        };

        // Act
        const result = sut.fetchingCitiesFailed(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingCitiesFailed is true should return true", () => {
      // Arrange
      const state = {
        cities: {
          fetchingCitiesFailed: true,
        },
      };

      // Act
      const result = sut.fetchingCitiesFailed(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("get cities", () => {
    test("when cities is not set selector should default to an empty array", () => {
      // Arrange
      const state = {
        cities: {},
      };

      // Act
      const result = sut.getCities(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when cities is an empty array selector should default to an empty array", () => {
      // Arrange
      const state = {
        cities: {
          cities: [],
        },
      };

      // Act
      const result = sut.getCities(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when cities is set selector should return an array of cities", () => {
      // Arrange
      const state = {
        cities: {
          cities: [
            {
              id: 1,
              name: "Yokohama",
              hasRules: true,
            },
            {
              id: 2,
              name: "Fujisawa",
              hasRules: false,
            },
            {
              id: 3,
              name: "Zushi",
              hasRules: true,
            },
          ],
        },
      };

      // Act
      const result = sut.getCities(state);

      // Assert
      expect(result).toEqual([
        {
          id: 1,
          name: "Yokohama",
          hasRules: true,
        },
        {
          id: 2,
          name: "Fujisawa",
          hasRules: false,
        },
        {
          id: 3,
          name: "Zushi",
          hasRules: true,
        },
      ]);
    });
  });
});

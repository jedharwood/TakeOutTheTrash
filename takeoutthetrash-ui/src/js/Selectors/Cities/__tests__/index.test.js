import * as sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

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

  describe("getCities", () => {
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
          cities: testData.arrayOfCities,
        },
      };

      // Act
      const result = sut.getCities(state);

      // Assert
      expect(result).toEqual(testData.arrayOfCities);
    });
  });

  describe("getSelectedCityId", () => {
    test("should return selectedCityId", () => {
      // Arrange
      const state = {
        cities: {
          selectedCityId: 1,
        },
      };

      // Act
      const result = sut.getSelectedCityId(state);

      // Assert
      expect(result).toEqual(1);
    });
  });

  describe("isFetchingCity", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingCity is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          cities: {
            fetchingCity: value,
          },
        };

        // Act
        const result = sut.isFetchingCities(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingCity is true should return true", () => {
      // Arrange
      const state = {
        cities: {
          fetchingCity: true,
        },
      };

      // Act
      const result = sut.isFetchingCity(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("fetchingCitySucceeded", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingCitySucceeded is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          cities: {
            fetchingCitySucceeded: value,
          },
        };

        // Act
        const result = sut.fetchingCitySucceeded(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingCitySucceeded is true should return true", () => {
      // Arrange
      const state = {
        cities: {
          fetchingCitySucceeded: true,
        },
      };

      // Act
      const result = sut.fetchingCitySucceeded(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("fetchingCityFailed", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingCityFailed is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          cities: {
            fetchingCityFailed: value,
          },
        };

        // Act
        const result = sut.fetchingCityFailed(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingCityFailed is true should return true", () => {
      // Arrange
      const state = {
        cities: {
          fetchingCityFailed: true,
        },
      };

      // Act
      const result = sut.fetchingCityFailed(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getCity", () => {
    test("when city is not set selector should default to an empty object", () => {
      // Arrange
      const state = {
        citiy: {},
      };

      // Act
      const result = sut.getCity(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when city is set selector should return selected city", () => {
      // Arrange
      const state = {
        cities: {
          city: testData.cityWithRules,
        },
      };

      // Act
      const result = sut.getCity(state);

      // Assert
      expect(result).toEqual(testData.cityWithRules);
    });
  });
});

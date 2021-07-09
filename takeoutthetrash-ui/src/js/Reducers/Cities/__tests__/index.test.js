import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";

describe("cities reducer", () => {
  test("should return initial state", () => {
    // Arrange
    // Act
    const result = sut(undefined, {});

    // Assert
    expect(result).toEqual({});
  });

  test("when handling a FETCH_CITIES_REQUESTED action should set fetchingCities to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITIES_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      fetchingCities: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_CITIES_SUCCEEDED action should set fetchingCities to false, fetchingCitiesSucceeded to true and return an array of cities", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITIES_SUCCEEDED,
      cities: [
        {
          id: 1,
          name: "Yokohama",
          hasRules: true,
          prefecture: {
            id: 1,
            name: "Kanagawa",
          },
        },
        {
          id: 2,
          name: "Fujisawa",
          hasRules: false,
          prefecture: {
            id: 2,
            name: "Shonan",
          },
        },
        {
          id: 3,
          name: "Zushi",
          hasRules: true,
          prefecture: {
            id: 2,
            name: "Shonan",
          },
        },
      ],
    };

    const state = {
      fetchingCities: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingCities: false,
      fetchingCitiesSucceeded: true,
      cities: [
        {
          id: 1,
          name: "Yokohama",
          hasRules: true,
          prefecture: {
            id: 1,
            name: "Kanagawa",
          },
        },
        {
          id: 2,
          name: "Fujisawa",
          hasRules: false,
          prefecture: {
            id: 2,
            name: "Shonan",
          },
        },
        {
          id: 3,
          name: "Zushi",
          hasRules: true,
          prefecture: {
            id: 2,
            name: "Shonan",
          },
        },
      ],
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_CITIES_FALED action should set fetchingCities to false and fetchingCitiesFailed to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITIES_FAILED,
    };

    const state = {
      fetchingCities: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingCities: false,
      fetchingCitiesFailed: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});

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

  test("when handling a FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED action should set fetchingCities to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED,
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

  test("when handling a FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED action should set fetchingCities to false, fetchingCitiesSucceeded to true and return an array of cities", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED,
      cities: [
        {
          id: 1,
          name: "Yokohama",
          rules: [],
        },
        {
          id: 2,
          name: "Fujisawa",
          rules: [],
        },
        {
          id: 3,
          name: "Zushi",
          rules: [],
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
          rules: [],
        },
        {
          id: 2,
          name: "Fujisawa",
          rules: [],
        },
        {
          id: 3,
          name: "Zushi",
          rules: [],
        },
      ],
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_CITIES_BY_PREFECTURE_ID_FAILED action should set fetchingCities to false and fetchingCitiesFailed to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_FAILED,
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

  test("when handling a CITY_SELECTED action should set selectedCityId", () => {
    // Arrange
    const action = {
      type: actionTypes.CITY_SELECTED,
      selectedCityId: 1,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      selectedCityId: 1,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_CITY_BY_ID_REQUESTED action should set fetchingCity to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITY_BY_ID_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      fetchingCity: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_CITY_BY_ID_SUCCEEDED action should set fetchingCity to false, fetchingCitySucceeded to true and return the selected city", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITY_BY_ID_SUCCEEDED,
      city: {
        id: 1,
        name: "Yokohama",
        rules: [],
      },
    };

    const state = {
      fetchingCity: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingCity: false,
      fetchingCitySucceeded: true,
      city: {
        id: 1,
        name: "Yokohama",
        rules: [],
      },
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_CITY_BY_ID_FAILED action should set fetchingCity to false and fetchingCityFailed to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_CITY_BY_ID_FAILED,
    };

    const state = {
      fetchingCity: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingCity: false,
      fetchingCityFailed: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});

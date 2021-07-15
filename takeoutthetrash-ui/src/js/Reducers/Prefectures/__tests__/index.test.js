import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";

describe("prefectures reducer", () => {
  test("should return initial state", () => {
    // Arrange
    // Act
    const result = sut(undefined, {});

    // Assert
    expect(result).toEqual({});
  });

  test("when handling a FETCH_PREFECTURES_REQUESTED action should set fetchingPrefectures to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_PREFECTURES_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      fetchingPrefectures: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_PREFECTURES_SUCCEEDED action should set fetchingPrefectures to false, fetchingPrefecturesSucceeded to true and return an array of prefectures", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_PREFECTURES_SUCCEEDED,
      prefectures: [
        {
          id: 1,
          name: "Aichi",
          cities: [],
        },
        {
          id: 2,
          name: "Akita",
          cities: [],
        },
        {
          id: 3,
          name: "Aomori",
          cities: [
            {
              id: 1,
              name: "City One",
              hasRules: true,
            },
            {
              id: 2,
              name: "City Two",
              hasRules: true,
            },
          ],
        },
      ],
    };

    const state = {
      fetchingPrefectures: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingPrefectures: false,
      fetchingPrefecturesSucceeded: true,
      prefectures: [
        {
          id: 1,
          name: "Aichi",
          cities: [],
        },
        {
          id: 2,
          name: "Akita",
          cities: [],
        },
        {
          id: 3,
          name: "Aomori",
          cities: [
            {
              id: 1,
              name: "City One",
              hasRules: true,
            },
            {
              id: 2,
              name: "City Two",
              hasRules: true,
            },
          ],
        },
      ],
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_PREFECTURES_FAILED action should set fetchingPrefectures to false and fetchingPrefecturesFailed to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_PREFECTURES_FAILED,
    };

    const state = {
      fetchingPrefectures: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingPrefectures: false,
      fetchingPrefecturesFailed: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a PREFECTURE_SELECTED action should set selectedPrefectureId", () => {
    // Arrange
    const action = {
      type: actionTypes.PREFECTURE_SELECTED,
      selectedPrefectureId: 1,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      selectedPrefectureId: 1,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});
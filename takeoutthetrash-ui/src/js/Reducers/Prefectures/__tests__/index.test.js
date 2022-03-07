import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";
import { getPrefecture } from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("getPrefecture", () => {
  test("if no prefectures and no selectedPrefectureId should return undefined", () => {
    // Arrange
    const state = {
      foo: "bar",
      prefectures: [],
    };

    const selectedPrefectureId = null;

    // Act
    const result = getPrefecture(state, selectedPrefectureId);

    // Assert
    expect(result).toEqual(undefined);
  });

  test.each([null, undefined, false, "A non-numerical string"])(
    "if state has prefectures but there is no selectedPrefectureId should return undefined",
    (value) => {
      // Arrange
      const state = {
        foo: "bar",
        prefectures: testData.arrayOfPrefectures,
      };

      const selectedPrefectureId = value;

      // Act
      const result = getPrefecture(state, selectedPrefectureId);

      // Assert
      expect(result).toEqual(undefined);
    }
  );

  test.each([null, undefined, []])(
    "if state has no prefectures but there is a selectedPrefectureId should return undefined",
    (value) => {
      // Arrange
      const state = {
        foo: "bar",
        prefectures: value,
      };

      const selectedPrefectureId = 19;

      // Act
      const result = getPrefecture(state, selectedPrefectureId);

      // Assert
      expect(result).toEqual(undefined);
    }
  );

  test("if state has prefectures but selectedPrefectureId is out of range should return undefined", () => {
    // Arrange
    const state = {
      foo: "bar",
      prefectures: testData.arrayOfPrefectures,
    };

    const selectedPrefectureId = 5000;

    // Act
    const result = getPrefecture(state, selectedPrefectureId);

    // Assert
    expect(result).toEqual(undefined);
  });

  test.each([1, "1"])(
    "if state has prefectures should return selected prefecture whether selectedPrefectureId is number or string",
    (value) => {
      // Arrange
      const state = {
        foo: "bar",
        prefectures: testData.arrayOfPrefectures,
      };

      const selectedPrefectureId = value;

      // Act
      const result = getPrefecture(state, selectedPrefectureId);

      // Assert
      expect(result).toEqual(testData.arrayOfPrefectures[0]);
    }
  );
});

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
      prefectures: testData.arrayOfPrefectures,
    };

    const state = {
      fetchingPrefectures: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingPrefectures: false,
      fetchingPrefecturesSucceeded: true,
      prefectures: testData.arrayOfPrefectures,
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

  test("when handling a PREFECTURE_SELECTED action should set selectedPrefectureId and prefecture", () => {
    // Arrange
    const action = {
      type: actionTypes.PREFECTURE_SELECTED,
      selectedPrefectureId: 1,
    };

    const state = {
      foo: "bar",
      prefectures: testData.arrayOfPrefectures,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      selectedPrefectureId: 1,
      prefecture: testData.arrayOfPrefectures[0],
      prefectures: testData.arrayOfPrefectures,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a PREFECTURE_SELECTED action should overwrite existing selectedPrefectureId and prefecture", () => {
    // Arrange
    const action = {
      type: actionTypes.PREFECTURE_SELECTED,
      selectedPrefectureId: 2,
    };

    const state = {
      foo: "bar",
      selectedPrefectureId: 1,
      prefecture: testData.arrayOfPrefectures[0],
      prefectures: testData.arrayOfPrefectures,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      selectedPrefectureId: 2,
      prefecture: testData.arrayOfPrefectures[1],
      prefectures: testData.arrayOfPrefectures,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a OPEN_HOME_PAGE_BUTTON_CLICKED action should set prefecture: {} and selectedPrefectureId: null", () => {
    // Arrange
    const action = {
      type: actionTypes.OPEN_HOME_PAGE_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      prefecture: testData.prefectureWithCities,
      selectedPrefectureId: testData.prefectureWithCities.id,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      prefecture: {},
      selectedPrefectureId: null,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});

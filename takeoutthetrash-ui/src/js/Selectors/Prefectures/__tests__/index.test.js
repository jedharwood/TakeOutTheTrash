import * as sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("prefectures selectors", () => {
  describe("isFetchingPrefectures", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingPrefectures is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          prefectures: {
            fetchingPrefectures: value,
          },
        };

        // Act
        const result = sut.isFetchingPrefectures(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingPrefectures is true should return true", () => {
      // Arrange
      const state = {
        prefectures: {
          fetchingPrefectures: true,
        },
      };

      // Act
      const result = sut.isFetchingPrefectures(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("fetchingPrefecturesSucceeded", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingPrefecturesSucceeded is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          prefectures: {
            fetchingPrefecturesSucceeded: value,
          },
        };

        // Act
        const result = sut.fetchingPrefecturesSucceeded(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingPrefecturesSucceeded is true should return true", () => {
      // Arrange
      const state = {
        prefectures: {
          fetchingPrefecturesSucceeded: true,
        },
      };

      // Act
      const result = sut.fetchingPrefecturesSucceeded(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("fetchingPrefecturesFailed", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])(
      "when fetchingPrefecturesFailed is false or otherwise invalid should return false",
      (value) => {
        // Arrange
        const state = {
          prefectures: {
            fetchingPrefecturesFailed: value,
          },
        };

        // Act
        const result = sut.fetchingPrefecturesFailed(state);

        // Assert
        expect(result).toEqual(false);
      }
    );

    test("when fetchingPrefecturesFailed is true should return true", () => {
      // Arrange
      const state = {
        prefectures: {
          fetchingPrefecturesFailed: true,
        },
      };

      // Act
      const result = sut.fetchingPrefecturesFailed(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getPrefectures", () => {
    test("when prefectures is not set selector should default to an empty array", () => {
      // Arrange
      const state = {
        prefectures: {},
      };

      // Act
      const result = sut.getPrefectures(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when prefectures is an empty array selector should default to an empty array", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: [],
        },
      };

      // Act
      const result = sut.getPrefectures(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when prefectures is set selector should return an array of prefectures", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: testData.arrayOfPrefectures,
        },
      };

      // Act
      const result = sut.getPrefectures(state);

      // Assert
      expect(result).toEqual(testData.arrayOfPrefectures);
    });
  });

  describe("getSelectedPrefectureId", () => {
    test("should return selectedPrefectureId", () => {
      // Arrange
      const state = {
        prefectures: {
          selectedPrefectureId: 1,
        },
      };

      // Act
      const result = sut.getSelectedPrefectureId(state);

      // Assert
      expect(result).toEqual(1);
    });
  });

  describe("getPrefecture", () => {
    test("when prefectures is empty should default to an empty object", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: [],
          selectedPrefectureId: 19,
        },
      };

      // Act
      const result = sut.getPrefecture(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when selectedPrefectureId is not set should default to an empty object", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: [],
        },
      };

      // Act
      const result = sut.getPrefecture(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when prefectures is populated but selectedPrefectureId is out of range should default to an empty object", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: testData.arrayOfPrefectures,
          selectedPrefectureId: 156,
        },
      };

      // Act
      const result = sut.getPrefecture(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when prefectures is populated but selectedPrefectureId is undefined should default to an empty object", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: testData.arrayOfPrefectures,
          selectedPrefectureId: undefined,
        },
      };

      // Act
      const result = sut.getPrefecture(state);

      // Assert
      expect(result).toEqual({});
    });

    test("should return prefecture", () => {
      // Arrange
      const state = {
        prefectures: {
          prefectures: testData.arrayOfPrefectures,
          selectedPrefectureId: 19,
        },
      };

      // Act
      const result = sut.getPrefecture(state);

      // Assert
      expect(result).toEqual(testData.arrayOfPrefectures[2]);
    });
  });
});

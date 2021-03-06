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
    test.each([[null], [undefined], [{}]])(
      "when prefecture is not set should return empty object",
      (value) => {
        // Arrange
        const state = {
          prefectures: {
            prefecture: value,
          },
        };

        // Act
        const result = sut.getPrefecture(state);

        // Assert
        expect(result).toEqual({});
      }
    );

    test("when prefecture is set should return prefecture", () => {
      // Arrange
      const state = {
        prefectures: {
          prefecture: testData.arrayOfPrefectures[0],
        },
      };

      // Act
      const result = sut.getPrefecture(state);

      // Assert
      expect(result).toEqual(testData.arrayOfPrefectures[0]);
    });
  });
});

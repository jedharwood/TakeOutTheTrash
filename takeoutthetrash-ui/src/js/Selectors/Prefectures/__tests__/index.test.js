import * as sut from "../index";

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
          prefectures: [
            {
              id: 1,
              name: "Aichi",
              hasCities: false,
            },
            {
              id: 2,
              name: "Akita",
              hasCities: false,
            },
            {
              id: 3,
              name: "Aomori",
              hasCities: false,
            },
          ],
        },
      };

      // Act
      const result = sut.getPrefectures(state);

      // Assert
      expect(result).toEqual([
        {
          id: 1,
          name: "Aichi",
          hasCities: false,
        },
        {
          id: 2,
          name: "Akita",
          hasCities: false,
        },
        {
          id: 3,
          name: "Aomori",
          hasCities: false,
        },
      ]);
    });
  });
});

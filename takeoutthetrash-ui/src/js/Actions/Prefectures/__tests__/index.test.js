import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";

describe("prefectures action", () => {
  describe("fetchPrefecturesList", () => {
    test("when result is not ok should dispatch a FETCH_PREFECTURES_FAILED action", async () => {
      // Arrange
      const prefecturesApiUrl = "prefecturesApiUrl";

      resourceUtilities.getPrefecturesApiUrl = jest
        .fn()
        .mockReturnValue(prefecturesApiUrl);

      const response = {
        ok: false,
      };

      fetch.getJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchPrefecturesList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_PREFECTURES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_PREFECTURES_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a FETCH_PREFECTURES_FAILED action", async () => {
      // Arrange
      const prefecturesApiUrl = "prefecturesApiUrl";

      resourceUtilities.getPrefecturesApiUrl = jest
        .fn()
        .mockReturnValue(prefecturesApiUrl);

      fetch.getJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchPrefecturesList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_PREFECTURES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_PREFECTURES_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a FETCH_PREFECTURES_SUCCEEDED action and an array of prefectures", async () => {
      // Arrange
      const prefecturesApiUrl = "prefecturesApiUrl";

      resourceUtilities.getPrefecturesApiUrl = jest
        .fn()
        .mockReturnValue(prefecturesApiUrl);

      const response = {
        ok: true,
        jsonData: [
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

      fetch.getJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchPrefecturesList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_PREFECTURES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
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
        },
      ]);
    });
  });

  describe("selectPrefecture", () => {
    test("should dispatch a PREFECTURE_SELECTED action", () => {
      // Arrange
      const selectedPrefectureId = 1;

      // Act
      const result = sut.selectPrefecture(selectedPrefectureId);

      // Assert
      expect(result).toEqual({
        type: actionTypes.PREFECTURE_SELECTED,
        selectedPrefectureId,
      });
    });
  });
});

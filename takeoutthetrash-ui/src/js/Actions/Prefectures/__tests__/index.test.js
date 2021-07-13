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
      ]);
    });
  });
});

import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";
import * as prefecturesSelectors from "../../../Selectors/Prefectures/index";

describe("cities action", () => {
  describe("fetchCitiesListByPrefectureId", () => {
    test("when result is not ok should dispatch a FETCH_CITIES_BY_PREFECTURE_ID_FAILED action", async () => {
      // Arrange
      const citiesByPrefectureIdApiUrl = "citiesByPrefectureIdApiUrl";

      const selectedPrefectureId = 1;

      prefecturesSelectors.getSelectedPrefectureId = jest
        .fn()
        .mockReturnValue(selectedPrefectureId);

      resourceUtilities.getCitiesByPrefectureIdApiUrl = jest
        .fn()
        .mockReturnValue(citiesByPrefectureIdApiUrl);

      const response = {
        ok: false,
      };

      fetch.getJsonByIdMock = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.fetchCitiesByPrefectureId()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a FETCH_CITIES_BY_PREFECTURE_ID_FAILED action", async () => {
      // Arrange
      const citiesByPrefectureIdApiUrl = "citiesByPrefectureIdApiUrl";

      const selectedPrefectureId = 1;

      prefecturesSelectors.getSelectedPrefectureId = jest
        .fn()
        .mockReturnValue(selectedPrefectureId);

      resourceUtilities.getCitiesByPrefectureIdApiUrl = jest
        .fn()
        .mockReturnValue(citiesByPrefectureIdApiUrl);

      fetch.getJsonByIdMock = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.fetchCitiesByPrefectureId()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED action and an array of cities", async () => {
      // Arrange
      const citiesByPrefectureIdApiUrl = "citiesByPrefectureIdApiUrl";

      const selectedPrefectureId = 1;

      prefecturesSelectors.getSelectedPrefectureId = jest
        .fn()
        .mockReturnValue(selectedPrefectureId);

      resourceUtilities.getCitiesByPrefectureIdApiUrl = jest
        .fn()
        .mockReturnValue(citiesByPrefectureIdApiUrl);

      const response = {
        ok: true,
        jsonData: [
          {
            id: 1,
            name: "Yokohama",
            hasRules: true,
          },
          {
            id: 2,
            name: "Fujisawa",
            hasRules: false,
          },
          {
            id: 3,
            name: "Zushi",
            hasRules: true,
          },
        ],
      };

      fetch.getJsonByIdMock = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.fetchCitiesByPrefectureId()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED,
          cities: [
            {
              id: 1,
              name: "Yokohama",
              hasRules: true,
            },
            {
              id: 2,
              name: "Fujisawa",
              hasRules: false,
            },
            {
              id: 3,
              name: "Zushi",
              hasRules: true,
            },
          ],
        },
      ]);
    });
  });

  describe("selectCity", () => {
    test("should dispatch a CITY_SELECTED action", () => {
      // Arrange
      const selectedCityId = 1;

      // Act
      const result = sut.selectCity(selectedCityId);

      // Assert
      expect(result).toEqual({
        type: actionTypes.CITY_SELECTED,
        selectedCityId,
      });
    });
  });
});

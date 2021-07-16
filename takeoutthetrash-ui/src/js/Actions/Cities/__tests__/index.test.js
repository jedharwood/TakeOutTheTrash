import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";
import * as prefecturesSelectors from "../../../Selectors/Prefectures/index";
import * as citiesSelectors from "../../../Selectors/Cities/index";

describe("cities action", () => {
  describe("fetchCitiesByPrefectureId", () => {
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

      fetch.getCitiesJsonByIdMock = jest.fn(
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

      fetch.getCitiesJsonByIdMock = jest.fn(
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

      fetch.getCitiesJsonByIdMock = jest.fn(
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

  describe("fetchCityById", () => {
    test("when result is not ok should dispatch a FETCH_CITY_BY_ID_FAILED action", async () => {
      // Arrange
      const cityByIdApiUrl = "cityByIdApiUrl";

      const selectedCityId = 1;

      citiesSelectors.getSelectedCityId = jest
        .fn()
        .mockReturnValue(selectedCityId);

      resourceUtilities.getCityByIdApiUrl = jest
        .fn()
        .mockReturnValue(cityByIdApiUrl);

      const response = {
        ok: false,
      };

      fetch.getJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.fetchCityById()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITY_BY_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITY_BY_ID_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a FETCH_CITY_BY_ID_FAILED action", async () => {
      // Arrange
      const cityByIdApiUrl = "cityByIdApiUrl";

      const selectedCityId = 1;

      citiesSelectors.getSelectedCityId = jest
        .fn()
        .mockReturnValue(selectedCityId);

      resourceUtilities.getCityByIdApiUrl = jest
        .fn()
        .mockReturnValue(cityByIdApiUrl);

      fetch.getJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.fetchCityById()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITY_BY_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITY_BY_ID_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a FETCH_CITY_BY_ID_SUCCEEDED action and the selected city", async () => {
      // Arrange
      const cityByIdApiUrl = "cityByIdApiUrl";

      const selectedCityId = 1;

      citiesSelectors.getSelectedCityId = jest
        .fn()
        .mockReturnValue(selectedCityId);

      resourceUtilities.getCityByIdApiUrl = jest
        .fn()
        .mockReturnValue(cityByIdApiUrl);

      const response = {
        ok: true,
        jsonData: {
          id: 1,
          name: "Yokohama",
          rules: [],
        },
      };

      fetch.getJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.fetchCityById()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITY_BY_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITY_BY_ID_SUCCEEDED,
          city: {
            id: 1,
            name: "Yokohama",
            rules: [],
          },
        },
      ]);
    });
  });
});

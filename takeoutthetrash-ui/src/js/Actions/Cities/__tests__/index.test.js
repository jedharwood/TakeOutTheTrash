import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";

describe("cities action", () => {
  describe("fetchCitiesList", () => {
    test("when result is not ok should dispatch a FETCH_CITIES_FAILED action", async () => {
      // Arrange
      const citiesApiUrl = "citiesApiUrl";

      resourceUtilities.getCitiesApiUrl = jest
        .fn()
        .mockReturnValue(citiesApiUrl);

      const response = {
        ok: false,
      };

      fetch.getJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchCitiesList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a FETCH_CITIES_FAILED action", async () => {
      // Arrange
      const citiesApiUrl = "citiesApiUrl";

      resourceUtilities.getCitiesApiUrl = jest
        .fn()
        .mockReturnValue(citiesApiUrl);

      fetch.getJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchCitiesList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a FETCH_CITIES_SUCCEEDED action and an array of cities", async () => {
      // Arrange
      const citiesApiUrl = "citiesApiUrl";

      resourceUtilities.getCitiesApiUrl = jest
        .fn()
        .mockReturnValue(citiesApiUrl);

      const response = {
        ok: true,
        jsonData: [
          {
            id: 1,
            name: "Yokohama",
            hasRules: true,
            prefecture: {
              id: 1,
              name: "Kanagawa",
            },
          },
          {
            id: 2,
            name: "Fujisawa",
            hasRules: false,
            prefecture: {
              id: 2,
              name: "Shonan",
            },
          },
          {
            id: 3,
            name: "Zushi",
            hasRules: true,
            prefecture: {
              id: 2,
              name: "Shonan",
            },
          },
        ],
      };

      fetch.getJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchCitiesList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_CITIES_SUCCEEDED,
          cities: [
            {
              id: 1,
              name: "Yokohama",
              hasRules: true,
              prefecture: {
                id: 1,
                name: "Kanagawa",
              },
            },
            {
              id: 2,
              name: "Fujisawa",
              hasRules: false,
              prefecture: {
                id: 2,
                name: "Shonan",
              },
            },
            {
              id: 3,
              name: "Zushi",
              hasRules: true,
              prefecture: {
                id: 2,
                name: "Shonan",
              },
            },
          ],
        },
      ]);
    });
  });
});

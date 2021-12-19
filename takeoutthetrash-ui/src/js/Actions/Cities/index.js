import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import * as resourceUtilities from "../../Utilities/ResourceUtilities";
import * as prefecturesSelectors from "../../Selectors/Prefectures";
import * as citiesSelectors from "../../Selectors/Cities";

const dispatchFetchCitiesByPrefectureIdFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_FAILED,
  });

const dispatchFetchCityByIdFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_CITY_BY_ID_FAILED,
  });

export const fetchCitiesByPrefectureId = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED,
    });

    const state = getState();

    const selectedPrefectureId =
      prefecturesSelectors.getSelectedPrefectureId(state);

    const url =
      resourceUtilities.getCitiesByPrefectureIdApiUrl(selectedPrefectureId);

    const response = await fetch.getCitiesJsonByIdMock(url);
    if (response.ok) {
      dispatch({
        type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED,
        cities: response.jsonData,
      });
      return;
    }

    dispatchFetchCitiesByPrefectureIdFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchCitiesByPrefectureIdFailedAction(dispatch);
  }
};

export const selectCity = (selectedCityId) => ({
  type: actionTypes.CITY_SELECTED,
  selectedCityId,
});

export const fetchCityById = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.FETCH_CITY_BY_ID_REQUESTED,
    });

    const state = getState();

    const selectedCityId = citiesSelectors.getSelectedCityId(state);

    const url = resourceUtilities.getCityByIdApiUrl(selectedCityId);

    const response = await fetch.getJson(url);
    if (response.ok) {
      dispatch({
        type: actionTypes.FETCH_CITY_BY_ID_SUCCEEDED,
        city: response.jsonData,
      });
      return;
    }

    dispatchFetchCityByIdFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchCityByIdFailedAction(dispatch);
  }
};

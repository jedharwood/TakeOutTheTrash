import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import * as resourceUtilities from "../../Utilities/ResourceUtilities";
import { getSelectedPrefectureId } from "../../Selectors/Prefectures";

const dispatchFetchCitiesFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_CITIES_FAILED, //spinner off
  });

const dispatchFetchCitiesByPrefectureIdFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_FAILED, //spinner off
  });

export const fetchCitiesList = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCH_CITIES_REQUESTED, //spinner on
    });

    const url = resourceUtilities.getCitiesApiUrl();

    const response = await fetch.getJson(url);
    if (response.ok) {
      dispatch({
        type: actionTypes.FETCH_CITIES_SUCCEEDED, //spinner off
        cities: response.jsonData,
      });
      return;
    }

    dispatchFetchCitiesFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchCitiesFailedAction(dispatch);
  }
};

export const fetchCitiesListByPrefectureId =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED, //spinner on
      });

      const state = getState();

      const selectedPrefectureId = getSelectedPrefectureId(state);

      const url =
        resourceUtilities.getCitiesByPrefectureIdApiUrl(selectedPrefectureId);

      const response = await fetch.getJsonByIdMock(url);
      if (response.ok) {
        dispatch({
          type: actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED, //spinner off
          cities: response.jsonData,
        });
        return;
      }

      dispatchFetchCitiesByPrefectureIdFailedAction(dispatch);
    } catch (exception) {
      dispatchFetchCitiesByPrefectureIdFailedAction(dispatch);
    }
  };

export const selectCity = () => async (dispatch) => {};

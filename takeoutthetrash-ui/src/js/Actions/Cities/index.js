import * as actionTypes from "../../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import { getCitiesApiUrl } from "../../Utilities/ResourceUtilities";

const dispatchFetchCitiesFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_CITIES_FAILED, //spinner off
  });

export const fetchCitiesList = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCH_CITIES_REQUESTED, //spinner on
    });

    const url = getCitiesApiUrl();

    const result = await fetch.get(url);

    if (result.ok) {
      dispatch({
        type: actionTypes.FETCH_CITIES_SUCCEEDED, //spinner off
        cities: result.jsonData,
      });
      return;
    }

    dispatchFetchCitiesFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchCitiesFailedAction(dispatch);
  }
};

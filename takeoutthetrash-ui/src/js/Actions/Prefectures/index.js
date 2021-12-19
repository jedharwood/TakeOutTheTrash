import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import { getPrefecturesApiUrl } from "../../Utilities/ResourceUtilities";

const dispatchFetchPrefecturesFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_PREFECTURES_FAILED,
  });

export const fetchPrefecturesList = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCH_PREFECTURES_REQUESTED,
    });

    const url = getPrefecturesApiUrl();

    const response = await fetch.getJson(url);
    if (response.ok) {
      dispatch({
        type: actionTypes.FETCH_PREFECTURES_SUCCEEDED,
        prefectures: response.jsonData,
      });
      return;
    }

    dispatchFetchPrefecturesFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchPrefecturesFailedAction(dispatch);
  }
};

export const selectPrefecture = (selectedPrefectureId) => ({
  type: actionTypes.PREFECTURE_SELECTED,
  selectedPrefectureId,
});

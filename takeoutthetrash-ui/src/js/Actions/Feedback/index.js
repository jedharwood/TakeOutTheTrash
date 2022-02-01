import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import { getFeedbackFormApiUrl } from "../../Utilities/ResourceUtilities";
import * as citySelectors from "../../Selectors/Cities/index";

const dispatchPostFeedbackFormFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.POST_FEEDBACK_FORM_FAILED,
  });

export const postFeedbackForm = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
    });

    const url = getFeedbackFormApiUrl();

    const city = citySelectors.getCity();

    const request = { city };

    const response = await fetch.postJson(url, request);
    if (response.ok) {
      dispatch({
        type: actionTypes.POST_FEEDBACK_FORM_SUCCEEDED,
      });
      return;
    }

    dispatchPostFeedbackFormFailedAction(dispatch);
  } catch (exception) {
    dispatchPostFeedbackFormFailedAction(dispatch);
  }
};

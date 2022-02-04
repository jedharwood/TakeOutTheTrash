import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import { getFeedbackFormApiUrl } from "../../Utilities/ResourceUtilities";
import * as citySelectors from "../../Selectors/Cities/index";
import * as feedbackSelectors from "../../Selectors/Feedback/index";

const dispatchPostFeedbackFormFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.POST_FEEDBACK_FORM_FAILED,
  });

export const feedbackFormValuesUpdated = (feedbackFormValues) => ({
  type: actionTypes.FEEDBACK_FORM_VALUES_UPDATED,
  feedbackFormValues,
});

export const postFeedbackForm = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
    });

    const url = getFeedbackFormApiUrl();

    const state = getState();

    const cityId = citySelectors.getCityId(state);
    const feedbackFormValues = feedbackSelectors.getFeedbackFormValues(state);

    const request = { cityId, feedbackFormValues };

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

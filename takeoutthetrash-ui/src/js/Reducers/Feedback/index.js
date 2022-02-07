import * as actionTypes from "../../Constants/ActionType";

const initialState = {
  feedbackFormValues: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FEEDBACK_FORM_VALUES_UPDATED:
      return {
        ...state,
        feedbackFormValues: action.feedbackFormValues,
      };
    case actionTypes.POST_FEEDBACK_FORM_REQUESTED:
      return {
        ...state,
        isPostingFeedbackForm: true,
        postingFeedbackFormSucceeded: false,
        postingFeedbackFormFailed: false,
      };
    case actionTypes.POST_FEEDBACK_FORM_SUCCEEDED:
      return {
        ...state,
        isPostingFeedbackForm: false,
        postingFeedbackFormSucceeded: true,
      };
    case actionTypes.POST_FEEDBACK_FORM_FAILED:
      return {
        ...state,
        isPostingFeedbackForm: false,
        postingFeedbackFormFailed: true,
        // implement counter here
      };
    default:
      return state;
  }
};

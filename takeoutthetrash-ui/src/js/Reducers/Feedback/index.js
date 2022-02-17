import * as actionTypes from "../../Constants/ActionType";
import { compose, defaultTo, prop, add } from "ramda";

const incrementPostFailureCount = compose(
  add(1),
  defaultTo(0),
  prop("postFailureCount")
);

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
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
        postFailureCount: 0,
      };
    case actionTypes.POST_FEEDBACK_FORM_FAILED:
      return {
        ...state,
        isPostingFeedbackForm: false,
        postingFeedbackFormFailed: true,
        postFailureCount: incrementPostFailureCount(state),
      };
    case actionTypes.OPEN_FEEDBACK_FORM_BUTTON_CLICKED:
      return {
        ...state,
        postingFeedbackFormSucceeded: false,
        feedbackFormValues: {},
        postFailureCount: 0,
      };
    default:
      return state;
  }
};

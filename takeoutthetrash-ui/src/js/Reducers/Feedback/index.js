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
        feedbackFormValues: action.payload,
      };
    default:
      return state;
  }
};

import * as actionTypes from "../../Constants/ActionType";

const initialState = {
  showRulesModal: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_RULES_MODAL_BUTTON_CLICKED:
      return {
        ...state,
        showRulesModal: true,
      };
    case actionTypes.CLOSE_RULES_MODAL_BUTTON_CLICKED:
      return {
        ...state,
        showRulesModal: false,
      };
    default:
      return state;
  }
};

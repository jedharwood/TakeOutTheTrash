import * as actionTypes from "../../Constants/ActionType";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PREFECTURES_REQUESTED:
      return {
        ...state,
        fetchingPrefectures: true,
      };
    case actionTypes.FETCH_PREFECTURES_SUCCEEDED:
      return {
        ...state,
        fetchingPrefectures: false,
        fetchingPrefecturesSucceeded: true,
        prefectures: action.prefectures,
      };
    case actionTypes.FETCH_PREFECTURES_FAILED:
      return {
        ...state,
        fetchingPrefectures: false,
        fetchingPrefecturesFailed: true,
      };
    default:
      return state;
  }
};

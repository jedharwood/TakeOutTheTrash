import * as actionTypes from "../../Constants/ActionType";

const initialState = {};

export const getPrefecture = (state, selectedPrefectureId) => {
  if (!selectedPrefectureId || !state.prefectures) {
    return;
  }

  return state.prefectures.find(
    (pref) => pref.id === parseInt(selectedPrefectureId)
  );
};

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
    case actionTypes.PREFECTURE_SELECTED:
      return {
        ...state,
        selectedPrefectureId: action.selectedPrefectureId,
        prefecture: getPrefecture(state, action.selectedPrefectureId),
      };
    default:
      return state;
  }
};

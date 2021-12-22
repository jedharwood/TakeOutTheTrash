import { prop, propEq, compose, defaultTo, find } from "ramda";

const getPrefecturesState = prop("prefectures");

export const isFetchingPrefectures = compose(
  propEq("fetchingPrefectures", true),
  getPrefecturesState
);

export const fetchingPrefecturesSucceeded = compose(
  propEq("fetchingPrefecturesSucceeded", true),
  getPrefecturesState
);

export const fetchingPrefecturesFailed = compose(
  propEq("fetchingPrefecturesFailed", true),
  getPrefecturesState
);

export const getPrefectures = compose(
  defaultTo([]),
  prop("prefectures"),
  getPrefecturesState
);

export const getSelectedPrefectureId = compose(
  prop("selectedPrefectureId"),
  getPrefecturesState
);

export const getPrefecture = (state) => {
  const selectedPrefectureId = getSelectedPrefectureId(state);

  if (selectedPrefectureId === undefined) {
    return;
  }

  return compose(
    defaultTo({}),
    find(propEq("id", selectedPrefectureId)),
    prop("prefectures"),
    getPrefecturesState
  )(state);
};

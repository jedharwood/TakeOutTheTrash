import { prop, propEq, compose, defaultTo } from "ramda";

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

export const getPrefecture = compose(
  defaultTo({}),
  prop("prefecture"),
  getPrefecturesState
);

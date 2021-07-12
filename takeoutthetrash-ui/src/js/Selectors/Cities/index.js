import { prop, propEq, compose, defaultTo } from "ramda";

const getCitiesState = prop("cities");

export const isFetchingCities = compose(
  propEq("fetchingCities", true),
  getCitiesState
);

export const fetchingCitiesSucceeded = compose(
  propEq("fetchingCitiesSucceeded", true),
  getCitiesState
);

export const fetchingCitiesFailed = compose(
  propEq("fetchingCitiesFailed", true),
  getCitiesState
);

export const getCities = compose(defaultTo([]), prop("cities"), getCitiesState);

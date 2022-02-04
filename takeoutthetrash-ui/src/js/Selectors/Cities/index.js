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

export const getSelectedCityId = compose(
  prop("selectedCityId"),
  getCitiesState
);

export const isFetchingCity = compose(
  propEq("fetchingCity", true),
  getCitiesState
);

export const fetchingCitySucceeded = compose(
  propEq("fetchingCitySucceeded", true),
  getCitiesState
);

export const fetchingCityFailed = compose(
  propEq("fetchingCityFailed", true),
  getCitiesState
);

export const getCity = compose(defaultTo({}), prop("city"), getCitiesState);

export const getCityId = (state) => {
  const city = getCity(state);
  return city.id;
};

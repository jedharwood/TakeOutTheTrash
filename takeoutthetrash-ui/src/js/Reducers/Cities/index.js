import * as actionTypes from "../../Constants/ActionType";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_REQUESTED:
      return {
        ...state,
        fetchingCities: true,
      };
    case actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_SUCCEEDED:
      return {
        ...state,
        fetchingCities: false,
        fetchingCitiesSucceeded: true,
        cities: action.cities,
      };
    case actionTypes.FETCH_CITIES_BY_PREFECTURE_ID_FAILED:
      return {
        ...state,
        fetchingCities: false,
        fetchingCitiesFailed: true,
      };
    case actionTypes.CITY_SELECTED:
      return {
        ...state,
        selectedCityId: action.selectedCityId,
      };
    case actionTypes.FETCH_CITY_BY_ID_REQUESTED:
      return {
        ...state,
        fetchingCity: true,
      };
    case actionTypes.FETCH_CITY_BY_ID_SUCCEEDED:
      return {
        ...state,
        fetchingCity: false,
        fetchingCitySucceeded: true,
        city: action.city,
      };
    case actionTypes.FETCH_CITY_BY_ID_FAILED:
      return {
        ...state,
        fetchingCity: false,
        fetchingCityFailed: true,
      };
    case actionTypes.PREFECTURE_SELECTED:
      return {
        ...state,
        fetchingCitySucceeded: false,
      };
    case actionTypes.OPEN_HOME_PAGE_BUTTON_CLICKED:
      return {
        ...state,
        fetchingCitySucceeded: false,
        city: {},
        selectedCityId: null,
      };
    default:
      return state;
  }
};

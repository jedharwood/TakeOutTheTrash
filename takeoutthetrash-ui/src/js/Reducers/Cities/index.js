import * as actionTypes from "../../Constants/ActionType";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
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
    default:
      return state;
  }
};

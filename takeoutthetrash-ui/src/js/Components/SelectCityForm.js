import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesActions from "../Actions/Cities/index";
import { connect } from "react-redux";
import { mapOptions } from "../Utilities/RamdaUtilities";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";

export const ArrayIsEmpty = (array) => {
  if (array.length > 0) {
    return false;
  }

  return true;
};

const SelectPrefecture = ({
  prefectures,
  selectPrefecture,
  getCitiesByPrefectureId,
}) => {
  return (
    <div>
      <select
        id="prefecture_select_input"
        onChange={(e) => {
          selectPrefecture(e.target.value);
          getCitiesByPrefectureId();
        }}
      >
        <option value="">Please select...</option>
        {prefectures.map((prefecture) => (
          <option
            key={prefecture.id}
            value={prefecture.id}
            disabled={ArrayIsEmpty(prefecture.cities)}
          >
            {prefecture.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const SelectCity = ({
  fetchingCitiesSucceeded,
  cities,
  selectCity,
  getCityById,
}) => {
  if (!fetchingCitiesSucceeded) {
    return null;
  }

  return (
    <div>
      <select
        id="city_select_input"
        onChange={(e) => {
          selectCity(e.target.value); //update to map based on rules when rules exist, then remove placeholder
          getCityById();
        }}
      >
        <option value="">Please select...</option>
        {mapOptions(cities)}
      </select>
    </div>
  );
};

const SelectCityForm = ({
  prefectures,
  selectPrefecture,
  getCitiesByPrefectureId,
  fetchingCitiesSucceeded,
  cities,
  selectCity,
  getCityById,
}) => {
  return (
    <Fragment>
      <SelectPrefecture
        prefectures={prefectures}
        selectPrefecture={selectPrefecture}
        getCitiesByPrefectureId={getCitiesByPrefectureId}
      />
      <SelectCity
        fetchingCitiesSucceeded={fetchingCitiesSucceeded}
        cities={cities}
        selectCity={selectCity}
        getCityById={getCityById}
      />
      <FetchingStateSpinner />
    </Fragment>
  );
};

SelectCityForm.propTypes = {
  prefectures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      hasCities: PropTypes.bool,
    }).isRequired
  ),
  selectPrefecture: PropTypes.func.isRequired,
  getCitiesByPrefectureId: PropTypes.func.isRequired,
  fetchingCitiesSucceeded: PropTypes.bool,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  selectCity: PropTypes.func.isRequired,
  getCityById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  prefectures: prefecturesSelectors.getPrefectures(state),
  fetchingCitiesSucceeded: citiesSelectors.fetchingCitiesSucceeded(state),
  cities: citiesSelectors.getCities(state),
});

const mapDispatchToProps = {
  selectPrefecture: prefecturesActions.selectPrefecture,
  getCitiesByPrefectureId: citiesActions.fetchCitiesByPrefectureId,
  selectCity: citiesActions.selectCity,
  getCityById: citiesActions.fetchCityById,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCityForm);

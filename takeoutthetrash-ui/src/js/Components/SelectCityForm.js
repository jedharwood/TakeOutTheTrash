import React from "react";
import PropTypes from "prop-types";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesActions from "../Actions/Cities/index";
import { connect } from "react-redux";
import { mapOptions } from "../Utilities/RamdaUtilities";

export const ArrayIsEmpty = (array) => {
  return array.length > 0 ? false : true;
};
// Note to self; It would be neat on the feedback page to have these fields pre-populated from state
const SelectPrefecture = ({
  prefectures,
  selectPrefecture,
  getCitiesByPrefectureId,
}) => {
  return (
    <div className="form-field">
      <select
        onChange={(e) => {
          selectPrefecture(e.target.value);
          getCitiesByPrefectureId();
        }}
        className="form-input"
      >
        <option value="default">Select Prefecture</option>
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
    <div className="form-field">
      <select
        onChange={(e) => {
          selectCity(e.target.value); //update to map based on rules when rules exist, then remove placeholder
          getCityById();
        }}
        className="form-input"
      >
        <option value="default">Select City</option>
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
    <div className="select-city-form">
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
    </div>
  );
};

SelectCityForm.propTypes = {
  prefectures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cities: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          rules: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string,
              description: PropTypes.string,
              instructions: PropTypes.string,
              irregularFrequency: PropTypes.string,
            })
          ),
        })
      ),
    }).isRequired
  ),
  selectPrefecture: PropTypes.func.isRequired,
  getCitiesByPrefectureId: PropTypes.func.isRequired,
  fetchingCitiesSucceeded: PropTypes.bool,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          description: PropTypes.string,
          instructions: PropTypes.string,
          irregularFrequency: PropTypes.string,
        })
      ),
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

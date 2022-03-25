import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SelectInput } from "./Common/SelectInput";
import * as citiesActions from "../Actions/Cities/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";

export const arrayIsEmpty = (array) => {
  return array.length > 0 ? false : true;
};

const mapOptions = (values, disableOptionIfEmpty) => {
  const children = values.map((child) => (
    <option
      key={child.id}
      value={child.id}
      disabled={arrayIsEmpty(child[disableOptionIfEmpty])}
    >
      {child.name}
    </option>
  ));
  return children;
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
    <SelectInput
      onChange={(e) => {
        selectCity(e.target.value);
        getCityById();
      }}
      required={true}
      placeholder="Select City"
      children={mapOptions(cities, "rules")}
    />
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
      <SelectInput
        onChange={(e) => {
          selectPrefecture(e.target.value);
          getCitiesByPrefectureId();
        }}
        required={true}
        placeholder="Select Prefecture"
        children={mapOptions(prefectures, "cities")}
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

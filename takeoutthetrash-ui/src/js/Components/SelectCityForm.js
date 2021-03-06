import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as R from "ramda";
import { SelectInput } from "./Common/SelectInput";
import * as citiesActions from "../Actions/Cities/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";

const mapOptions = (values, disableOptionIfEmpty) => {
  const children = values.map((child) => (
    <option
      key={child.id}
      value={child.id}
      disabled={R.isEmpty(child[disableOptionIfEmpty])}
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
  error,
  city,
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
      placeholder={city.name || "Select City"}
      children={mapOptions(cities, "rules")}
      error={error}
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
  errors,
  prefecture,
  city,
}) => {
  return (
    <div className="select-city-form">
      <SelectInput
        onChange={(e) => {
          selectPrefecture(e.target.value);
          getCitiesByPrefectureId();
        }}
        required={true}
        placeholder={prefecture.name || "Select Prefecture"}
        children={mapOptions(prefectures, "cities")}
        error={errors.prefecture}
      />
      <SelectCity
        fetchingCitiesSucceeded={fetchingCitiesSucceeded}
        cities={cities}
        selectCity={selectCity}
        getCityById={getCityById}
        error={errors.city}
        city={city}
      />
    </div>
  );
};

SelectCityForm.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ),
  city: PropTypes.shape({
    name: PropTypes.string,
  }),
  fetchingCitiesSucceeded: PropTypes.bool,
  prefecture: PropTypes.shape({
    name: PropTypes.string,
  }),
  prefectures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cities: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired
  ),
  getCityById: PropTypes.func.isRequired,
  getCitiesByPrefectureId: PropTypes.func.isRequired,
  selectCity: PropTypes.func.isRequired,
  selectPrefecture: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    city: PropTypes.string,
    prefecture: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  cities: citiesSelectors.getCities(state),
  city: citiesSelectors.getCity(state),
  fetchingCitiesSucceeded: citiesSelectors.fetchingCitiesSucceeded(state),
  prefecture: prefecturesSelectors.getPrefecture(state),
  prefectures: prefecturesSelectors.getPrefectures(state),
});

const mapDispatchToProps = {
  getCityById: citiesActions.fetchCityById,
  getCitiesByPrefectureId: citiesActions.fetchCitiesByPrefectureId,
  selectCity: citiesActions.selectCity,
  selectPrefecture: prefecturesActions.selectPrefecture,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCityForm);

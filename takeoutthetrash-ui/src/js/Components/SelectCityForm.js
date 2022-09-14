import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as R from "ramda";
import * as citiesActions from "../Actions/Cities/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import Select from "react-select";

const customTheme = (theme) => {
  return {
    ...theme,
    borderRadius: 6,
    borderColor: "#d1d5db", //$gray-300
    colors: {
      ...theme.colors,
      primary25: "#f3f4f6", //$gray-100
      primary: "#1e293b", // $slate-800
      neutral80: "#111827", // $gray-900
    },
  };
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#94a3b8" : "#111827", // $gray-400:900,
    cursor: state.isDisabled ? "default" : "pointer",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "#6b7280", //$gray-500
  }),
};

const mapOptions = (values, disableOptionIfEmpty) => {
  const children = values.map((child) => ({ value: child.id, label: child.name, isDisabled: R.isEmpty(child[disableOptionIfEmpty]) }));
  return children;
};

const SelectCity = ({ fetchingCitiesSucceeded, cities, selectCity, getCityById, city }) => {
  if (!fetchingCitiesSucceeded) {
    return null;
  }

  return (
    <Select
      options={mapOptions(cities, "rules")}
      required={true}
      placeholder={city.name || "Select City..."}
      isSearchable={true}
      onChange={(e) => {
        selectCity(e.value);
        getCityById();
      }}
      theme={customTheme}
      styles={customStyles}
    />
  );
};

const SelectCityForm = ({ prefectures, selectPrefecture, getCitiesByPrefectureId, fetchingCitiesSucceeded, cities, selectCity, getCityById, error, prefecture, city, isFetchingPrefectures }) => {
  let wrapperClass = "";
  if (prefecture.name) wrapperClass += "mb-4";

  return (
    <div>
      <div className={wrapperClass}>
        <Select
          options={mapOptions(prefectures, "cities")}
          required={true}
          placeholder={prefecture.name || "Select Prefecture..."}
          isSearchable={true}
          onChange={(e) => {
            selectPrefecture(e.value);
            getCitiesByPrefectureId();
          }}
          isLoading={isFetchingPrefectures}
          theme={customTheme}
          styles={customStyles}
        />
      </div>

      <SelectCity fetchingCitiesSucceeded={fetchingCitiesSucceeded} cities={cities} selectCity={selectCity} getCityById={getCityById} city={city} />
      {error && <div className="info-minor alert">{error}</div>}
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
  error: PropTypes.string,
  isFetchingPrefectures: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  cities: citiesSelectors.getCities(state),
  city: citiesSelectors.getCity(state),
  fetchingCitiesSucceeded: citiesSelectors.fetchingCitiesSucceeded(state),
  prefecture: prefecturesSelectors.getPrefecture(state),
  prefectures: prefecturesSelectors.getPrefectures(state),
  isFetchingPrefectures: prefecturesSelectors.isFetchingPrefectures(state),
});

const mapDispatchToProps = {
  getCityById: citiesActions.fetchCityById,
  getCitiesByPrefectureId: citiesActions.fetchCitiesByPrefectureId,
  selectCity: citiesActions.selectCity,
  selectPrefecture: prefecturesActions.selectPrefecture,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCityForm);

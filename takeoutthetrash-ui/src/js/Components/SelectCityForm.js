import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as R from "ramda";
import * as citiesActions from "../Actions/Cities/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import { SearchSelectInput } from "./Common/SearchSelectInput";

const mapOptions = (values, disableOptionIfEmpty) => {
  const children = values.map((child) => ({ value: child.id, label: child.name, isDisabled: R.isEmpty(child[disableOptionIfEmpty]) }));
  return children;
};

const SelectCity = ({ fetchingCitiesSucceeded, cities, selectCity, getCityById, city }) => {
  if (!fetchingCitiesSucceeded) {
    return null;
  }

  return (
    <SearchSelectInput
      options={mapOptions(cities, "rules")}
      placeholder={city.name || "Select City..."}
      onChange={(e) => {
        selectCity(e.value);
        getCityById();
      }}
    />
  );
};

const SelectCityForm = ({ prefectures, selectPrefecture, getCitiesByPrefectureId, fetchingCitiesSucceeded, cities, selectCity, getCityById, error, prefecture, city, isFetchingPrefectures }) => {
  let wrapperClass = "";
  if (prefecture.name) wrapperClass += "mb-4";

  return (
    <div>
      <div className={wrapperClass}>
        <SearchSelectInput
          options={mapOptions(prefectures, "cities")}
          placeholder={prefecture.name || "Select Prefecture..."}
          onChange={(e) => {
            selectPrefecture(e.value);
            getCitiesByPrefectureId();
          }}
          isLoading={isFetchingPrefectures}
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

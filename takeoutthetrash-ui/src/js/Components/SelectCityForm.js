import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import * as citiesActions from "../Actions/Cities/index";
import { connect } from "react-redux";
import { mapOptions, isNotNil } from "../Utilities/RamdaUtilities";

const SelectPrefecture = ({ prefecturesList, selectPrefecture }) => {
  return (
    <div>
      <select
        id="prefecture_select_input"
        onChange={(e) =>
          selectPrefecture(e.target.value, e.target.selectedOptions[0].text)
        }
      >
        <option value="">Please select...</option>
        {mapOptions(prefecturesList)}
      </select>
    </div>
  );
};

const SelectCity = ({ selectedPrefectureId }) => {
  return <div></div>;
};

const SelectCityForm = ({
  prefecturesList,
  selectPrefecture,
  selectedPrefectureId,
}) => {
  return (
    <Fragment>
      <SelectPrefecture
        prefecturesList={prefecturesList}
        selectPrefecture={selectPrefecture}
      />
      <SelectCity selectedPrefectureId={selectedPrefectureId} />
    </Fragment>
  );
};

SelectCityForm.propTypes = {
  prefecturesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      hasCities: PropTypes.bool.isRequired,
    })
  ),
  selectPrefecture: PropTypes.func.isRequired,
  selectedPrefectureId: PropTypes.number,
  getCitiesByPrefectureId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  prefecturesList: prefecturesSelectors.getPrefectures(state),
  selectedPrefectureId: prefecturesSelectors.getSelectedPrefectureId(state),
});

const mapDispatchToProps = {
  selectPrefecture: prefecturesActions.selectPrefecture,
  getCitiesByPrefectureId: citiesActions.fetchCitiesListByPrefectureId,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCityForm);

import React from "react";
import PropTypes from "prop-types";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import { connect } from "react-redux";
import { mapOptions } from "../Utilities/RamdaUtilities";

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

const SelectCityForm = ({ prefecturesList, selectPrefecture }) => {
  return (
    <SelectPrefecture
      prefecturesList={prefecturesList}
      selectPrefecture={selectPrefecture}
    />
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
  selectPrefecture: PropTypes.func,
  selectedPrefectureId: PropTypes.number,
};

const mapStateToProps = (state) => ({
  prefecturesList: prefecturesSelectors.getPrefectures(state),
  selectedPrefectureId: prefecturesSelectors.getSelectedPrefectureId(state),
});

const mapDispatchToProps = {
  selectPrefecture: prefecturesActions.selectPrefecture,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCityForm);

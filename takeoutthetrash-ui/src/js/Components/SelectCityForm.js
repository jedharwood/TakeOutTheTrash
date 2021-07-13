import React from "react";
import PropTypes from "prop-types";
import * as prefecturesSelectors from "../Selectors/Prefectures/index";
import * as prefecturesActions from "../Actions/Prefectures/index";
import { connect } from "react-redux";

const SelectPrefecture = ({ prefecturesList, selectPrefecture }) => {
  return <select />;
};

const SelectCityForm = () => {
  return <SelectPrefecture />;
};

SelectCityForm.propTypes = {
  //   prefecturesList: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       name: PropTypes.string.isRequired,
  //       hasCities: PropTypes.bool.isRequired,
  //     })
  //   ),
  prefecturesList: PropTypes.arrayOf(PropTypes.object),
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

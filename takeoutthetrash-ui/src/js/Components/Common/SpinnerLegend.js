import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../../Selectors/Cities";
import * as prefecturesSelectors from "../../Selectors/Prefectures";
import * as feedbackSelectors from "../../Selectors/Feedback";

const getPrefectureName = (prefecture) => {
  //show spinner when fetching rules for city
  if (prefecture.name === undefined) {
    return "selected prefecture";
  }
  return prefecture.name;
};

export const getSpinnerLegend = (
  isFetchingCities,
  prefecture,
  isPostingFeedbackForm
) => {
  if (isFetchingCities && prefecture) {
    return `Retrieving cities for ${getPrefectureName(prefecture)}`;
  }
  if (isPostingFeedbackForm) {
    return "Posting feedback";
  }
  return null;
};

const SpinnerLegend = ({
  isFetchingCities,
  prefecture,
  isPostingFeedbackForm,
}) => {
  return getSpinnerLegend(isFetchingCities, prefecture, isPostingFeedbackForm);
};

SpinnerLegend.propTypes = {
  isFetchingCities: PropTypes.bool,
  prefecture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  isPostingFeedbackForm: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  prefecture: prefecturesSelectors.getPrefecture(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
});

export default connect(mapStateToProps)(SpinnerLegend);

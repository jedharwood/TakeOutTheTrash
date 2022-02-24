import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../../Selectors/Cities";
import * as prefecturesSelectors from "../../Selectors/Prefectures";
import * as feedbackSelectors from "../../Selectors/Feedback";

const getPrefectureName = (prefecture) => {
  if (prefecture.name === undefined) {
    return "selected prefecture";
  }
  return prefecture.name;
};

const getCityName = (prefecture, selectedCityId) => {
  // selectedCityId should be a number, not a string. Think of a way to fix..
  const city = prefecture.cities.find((x) => x.id === parseInt(selectedCityId));
  if (city === undefined) {
    return "selected city";
  }
  return city.name;
};

export const getSpinnerLegend = (
  isFetchingCities,
  prefecture,
  isPostingFeedbackForm,
  isFetchingCity,
  selectedCityId,
  postingFeedbackFormFailed,
  postFailureCount
) => {
  if (isFetchingCities && prefecture) {
    return `Retrieving cities for ${getPrefectureName(prefecture)}`;
  }
  if (isFetchingCity) {
    return `Retrieving rules for ${getCityName(prefecture, selectedCityId)}`;
  }
  if (isPostingFeedbackForm) {
    return "Posting feedback";
  }
  if (postingFeedbackFormFailed && postFailureCount > 3) {
    return "Please try again later.";
  }
  if (postingFeedbackFormFailed) {
    return "Oops! Something went wrong...";
  }
  return null;
};

const SpinnerLegend = ({
  isFetchingCities,
  prefecture,
  isPostingFeedbackForm,
  isFetchingCity,
  selectedCityId,
  postingFeedbackFormFailed,
  postFailureCount,
}) => {
  return getSpinnerLegend(
    isFetchingCities,
    prefecture,
    isPostingFeedbackForm,
    isFetchingCity,
    selectedCityId,
    postingFeedbackFormFailed,
    postFailureCount
  );
};

SpinnerLegend.propTypes = {
  isFetchingCities: PropTypes.bool,
  prefecture: PropTypes.shape({
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
  }),
  isPostingFeedbackForm: PropTypes.bool,
  isFetchingCity: PropTypes.bool,
  selectedCityId: PropTypes.number,
  postingFeedbackFormFailed: PropTypes.bool,
  postFailureCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  prefecture: prefecturesSelectors.getPrefecture(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
  isFetchingCity: citiesSelectors.isFetchingCity(state),
  selectedCityId: citiesSelectors.getSelectedCityId(state),
  postingFeedbackFormFailed: feedbackSelectors.postingFeedbackFormFailed(state),
  postFailureCount: feedbackSelectors.getPostFailureCount(state),
});

export default connect(mapStateToProps)(SpinnerLegend);

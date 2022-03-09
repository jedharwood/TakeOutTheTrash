import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import FeedbackForm from "../Components/FeedbackForm";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as feedbackSelectors from "../Selectors/Feedback";
import { Link } from "react-router-dom";
import FeedbackPageLegend from "../Components/FeedbackPageLegend";
import * as homeActions from "../Actions/Home";
import * as citiesSelectors from "../Selectors/Cities";

const Feedback = ({
  postingFeedbackFormSucceeded,
  isPostingFeedbackForm,
  postingFeedbackFormFailed,
  displayRetryFailureMessage,
  openHomePageButtonClicked,
  isFetchingCities,
  isFetchingCity,
}) => {
  if (postingFeedbackFormSucceeded || displayRetryFailureMessage) {
    return (
      <div className="container">
        <div className="landing-page">
          <h2>Feedback Form</h2>
          <FeedbackPageLegend />
          <p>Thanks</p>
          <div>
            <Link
              to="/"
              className="btn btn-primary"
              onClick={openHomePageButtonClicked}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="landing-page">
        <h2>Feedback Form</h2>
        <SelectCityForm />
        <FeedbackForm />
        <FetchingStateSpinner
          isVisible={
            isPostingFeedbackForm ||
            postingFeedbackFormFailed ||
            isFetchingCities ||
            isFetchingCity
          }
        />
      </div>
    </div>
  );
};

Feedback.propTypes = {
  postingFeedbackFormSucceeded: PropTypes.bool,
  isPostingFeedbackForm: PropTypes.bool,
  displayRetryFailureMessage: PropTypes.bool,
  openHomePageButtonClicked: PropTypes.func.isRequired,
  isFetchingCities: PropTypes.bool,
  isFetchingCity: PropTypes.bool,
};

const mapDispatchToProps = {
  openHomePageButtonClicked: homeActions.openHomePageButtonClicked,
};

const mapStateToProps = (state) => ({
  postingFeedbackFormSucceeded:
    feedbackSelectors.postingFeedbackFormSucceeded(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
  postingFeedbackFormFailed: feedbackSelectors.postingFeedbackFormFailed(state),
  displayRetryFailureMessage:
    feedbackSelectors.displayRetryFailureMessage(state),
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  isFetchingCity: citiesSelectors.isFetchingCity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FeedbackForm from "../Components/FeedbackForm";
import FeedbackPageLegend from "../Components/FeedbackPageLegend";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import SelectCityForm from "../Components/SelectCityForm";
import * as feedbackActions from "../Actions/Feedback";
import * as homeActions from "../Actions/Home";
import * as citiesSelectors from "../Selectors/Cities";
import * as feedbackSelectors from "../Selectors/Feedback";

const emailRegex =
  // eslint-disable-next-line
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const COMMENT_MAX = 150;

const Feedback = ({
  postingFeedbackFormSucceeded,
  isPostingFeedbackForm,
  postingFeedbackFormFailed,
  displayRetryFailureMessage,
  openHomePageButtonClicked,
  isFetchingCities,
  isFetchingCity,
  feedbackFormValuesUpdated,
  postFeedbackForm,
}) => {
  let [formValues, setFormValues] = useState({ comment: "", email: "" });
  let [errors, setErrors] = useState({ comment: "" });

  const validateOnChange = () => {
    if (formValues.comment.length >= COMMENT_MAX) {
      errors.comment = `Maximum ${COMMENT_MAX} characters`;
    } else {
      errors.comment = "";
    }

    if (formValues.email && emailRegex.test(formValues.email) === false) {
      errors.email = "Input valid email address";
    } else {
      errors.email = "";
    }

    setErrors(errors);
    console.log(errors);
  };

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const updatedFormValues = {
      ...formValues,
      [target.name]: target.value,
    };
    setFormValues(updatedFormValues);
    feedbackFormValuesUpdated(updatedFormValues);
    validateOnChange();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFeedbackForm();
  };

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
        <FeedbackForm
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          formValues={formValues}
          errors={errors}
        />
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
  postFeedbackForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  openHomePageButtonClicked: homeActions.openHomePageButtonClicked,
  feedbackFormValuesUpdated: feedbackActions.feedbackFormValuesUpdated,
  postFeedbackForm: feedbackActions.postFeedbackForm,
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

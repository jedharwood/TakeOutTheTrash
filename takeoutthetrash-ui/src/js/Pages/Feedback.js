import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FeedbackForm from "../Components/FeedbackForm";
import FeedbackPageLegend from "../Components/FeedbackPageLegend";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import SelectCityForm from "../Components/SelectCityForm";
import { WideButton } from "../Components/Common/WideButton";
import * as feedbackActions from "../Actions/Feedback";
import * as homeActions from "../Actions/Home";
import * as citiesSelectors from "../Selectors/Cities";
import * as feedbackSelectors from "../Selectors/Feedback";
import { isNilOrEmpty } from "../Utilities/RamdaUtilities";

const COMMENT_MAX = 150;

export const disableFormSubmit = (formValues) => {
  return isNilOrEmpty(formValues.comment) || commentExceedsMaxLength(formValues) || (formValues.email && !emailAddressIsValid(formValues)) ? true : false;
};

export const commentExceedsMaxLength = (formValues) => {
  return formValues.comment.length > COMMENT_MAX ? true : false;
};

export const emailAddressIsValid = (formValues) => {
  const emailRegex =
    // eslint-disable-next-line
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(formValues.email);
};

const Feedback = ({ postingFeedbackFormSucceeded, isPostingFeedbackForm, postingFeedbackFormFailed, displayRetryFailureMessage, openHomePageButtonClicked, isFetchingCities, feedbackFormValuesUpdated, postFeedbackForm, city }) => {
  let [formValues, setFormValues] = useState({ comment: "", email: "" });
  let [errors, setErrors] = useState({});

  const validateOnChange = () => {
    if (commentExceedsMaxLength(formValues)) {
      errors.comment = `Maximum ${COMMENT_MAX} characters`;
    } else {
      errors.comment = "";
    }

    if (formValues.email && !emailAddressIsValid(formValues)) {
      errors.email = "Input valid email address";
    } else {
      errors.email = "";
    }

    setErrors(errors);
  };

  const handleInputChange = ({ target }) => {
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
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 my-6">
          <div className="text-dark-gray text-center">
            <h2 className="text-3xl font-extrabold mb-2">Feedback Form</h2>
            <FeedbackPageLegend />
            <p className="mt-3 mb-6 text-xl font-extrabold">Thanks</p>
            <WideButton buttonText="Home" route="/" onClick={openHomePageButtonClicked} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 my-6">
        <h2 className="text-dark-gray text-center text-3xl font-extrabold">Feedback Form</h2>
        <SelectCityForm errors={errors} />
        <FeedbackForm onChange={handleInputChange} onSubmit={handleSubmit} formValues={formValues} errors={errors} disableSubmit={disableFormSubmit(formValues, city)} />
        <FetchingStateSpinner isVisible={isPostingFeedbackForm || postingFeedbackFormFailed || isFetchingCities} />
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
  postFeedbackForm: PropTypes.func.isRequired,
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

const mapDispatchToProps = {
  openHomePageButtonClicked: homeActions.openHomePageButtonClicked,
  feedbackFormValuesUpdated: feedbackActions.feedbackFormValuesUpdated,
  postFeedbackForm: feedbackActions.postFeedbackForm,
};

const mapStateToProps = (state) => ({
  postingFeedbackFormSucceeded: feedbackSelectors.postingFeedbackFormSucceeded(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
  postingFeedbackFormFailed: feedbackSelectors.postingFeedbackFormFailed(state),
  displayRetryFailureMessage: feedbackSelectors.displayRetryFailureMessage(state),
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  city: citiesSelectors.getCity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

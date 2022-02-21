import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import FeedbackForm from "../Components/FeedbackForm";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as feedbackSelectors from "../Selectors/Feedback";
import { Link } from "react-router-dom";

const FeedbackPageLegend = (displayRetryFailureMessage) => {
  // will move this out into a separate component with tests
  if (displayRetryFailureMessage === true) {
    return (
      <p>
        Sorry, it appears something has gone wrong. We will work to resolve the
        problem as quickly as possible.
      </p>
    );
  }
  return (
    <p>
      Thankyou for subitting your feedback. If you checked the radio button on
      the form (that I haven't made yet) to request email notification then we
      will be in contact to let you know when your request has been actioned.
    </p>
  );
};

const Feedback = ({
  postingFeedbackFormSucceeded,
  isPostingFeedbackForm,
  postingFeedbackFormFailed,
  displayRetryFailureMessage,
}) => {
  if (postingFeedbackFormSucceeded || displayRetryFailureMessage) {
    return (
      <div className="container">
        <div className="landing-page">
          <h2>Feedback Form</h2>
          <FeedbackPageLegend />
          <p>Thanks</p>
          <div>
            <Link to="/" className="btn btn-primary">
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
          isVisible={isPostingFeedbackForm || postingFeedbackFormFailed}
        />
      </div>
    </div>
  );
};

Feedback.propTypes = {
  postingFeedbackFormSucceeded: PropTypes.bool,
  isPostingFeedbackForm: PropTypes.bool,
  displayRetryFailureMessage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  postingFeedbackFormSucceeded:
    feedbackSelectors.postingFeedbackFormSucceeded(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
  postingFeedbackFormFailed: feedbackSelectors.postingFeedbackFormFailed(state),
  displayRetryFailureMessage:
    feedbackSelectors.displayRetryFailureMessage(state),
});

export default connect(mapStateToProps)(Feedback);

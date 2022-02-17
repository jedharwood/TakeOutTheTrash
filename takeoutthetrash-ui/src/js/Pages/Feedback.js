import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import FeedbackForm from "../Components/FeedbackForm";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as feedbackSelectors from "../Selectors/Feedback";
import { Link } from "react-router-dom";

const Feedback = ({ postingFeedbackFormSucceeded, isPostingFeedbackForm }) => {
  if (postingFeedbackFormSucceeded === true) {
    return (
      <div className="container">
        <div className="landing-page">
          <h2>Feedback Form</h2>
          <p>
            Thankyou for subitting your feedback. If you checked the radio
            button on the form (that I haven't made yet) to request email
            notification then we will be in contact to let you know when your
            request has been actioned.
          </p>
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
        <FetchingStateSpinner isVisible={isPostingFeedbackForm} />
      </div>
    </div>
  );
};

Feedback.propTypes = {
  postingFeedbackFormSucceeded: PropTypes.bool,
  isPostingFeedbackForm: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  postingFeedbackFormSucceeded:
    feedbackSelectors.postingFeedbackFormSucceeded(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
});

export default connect(mapStateToProps)(Feedback);

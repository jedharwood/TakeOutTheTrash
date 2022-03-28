import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as feedbackSelectors from "../Selectors/Feedback";

export const getFeedbackPageLegend = (
  displayRetryFailureMessage,
  postFailureCount
) => {
  if (displayRetryFailureMessage === true && postFailureCount > 3) {
    return "We're experiencing server side difficulties. We will work to resolve the problem as quickly as possible. Please try again later.";
  }
  if (displayRetryFailureMessage === true) {
    return "Sorry, it appears something went wrong. We will work to resolve the problem as quickly as possible.";
  }
  return "Thankyou for submitting your feedback. If you checked the radio button on the form to request email notification then we will be in contact to let you know when your request has been actioned.";
};

const FeedbackPageLegend = ({
  displayRetryFailureMessage,
  postFailureCount,
}) => {
  return (
    <p>{getFeedbackPageLegend(displayRetryFailureMessage, postFailureCount)}</p>
  );
};

FeedbackPageLegend.propTypes = {
  displayRetryFailureMessage: PropTypes.bool,
  postFailureCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  displayRetryFailureMessage:
    feedbackSelectors.displayRetryFailureMessage(state),
  postFailureCount: feedbackSelectors.getPostFailureCount(state),
});

export default connect(mapStateToProps)(FeedbackPageLegend);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as feedbackSelectors from "../Selectors/Feedback";

export const getFeedbackPageLegend = (displayRetryFailureMessage) => {
  if (displayRetryFailureMessage === true) {
    return "Sorry, it appears something went wrong. We will work to resolve the problem as quickly as possible.";
  }
  return "Thankyou for subitting your feedback. If you checked the radio button on the form (that I haven't made yet) to request email notification then we will be in contact to let you know when your request has been actioned.";
};
// handle failure counter here

const FeedbackPageLegend = ({ displayRetryFailureMessage }) => {
  return <p>{getFeedbackPageLegend(displayRetryFailureMessage)}</p>;
};

FeedbackPageLegend.propTypes = {
  displayRetryFailureMessage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  displayRetryFailureMessage:
    feedbackSelectors.displayRetryFailureMessage(state),
});

export default connect(mapStateToProps)(FeedbackPageLegend);

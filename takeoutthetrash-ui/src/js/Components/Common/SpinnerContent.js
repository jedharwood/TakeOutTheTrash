import React from "react";
import PropTypes from "prop-types";
import * as feedbackSelectors from "../../Selectors/Feedback";
import { connect } from "react-redux";
import * as feedbackActions from "../../Actions/Feedback";
import { WideButton } from "./WideButton";

const Spinner = () => (
  <div className="spinner">
    {[...Array(12)].map((_, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={idx}>
        <div />
      </div>
    ))}
  </div>
);

const SpinnerContent = ({ postingFeedbackFormFailed, postFeedbackForm, cancelRetries, postFailureCount }) => {
  if (!postingFeedbackFormFailed) {
    return (
      <div className="mt-4 mb-1">
        <Spinner />
      </div>
    );
  }
  if (postFailureCount > 3) {
    return (
      <div className="mt-8">
        <WideButton buttonText="Cancel" onClick={cancelRetries} />
      </div>
    );
  }
  return (
    <div className="flex mt-8">
      <div className="w-full mr-4">
        <WideButton buttonText="Retry" onClick={postFeedbackForm} />
      </div>
      <div className="w-full">
        <WideButton buttonText="Cancel" onClick={cancelRetries} />
      </div>
    </div>
  );
};

SpinnerContent.propTypes = {
  postingFeedbackFormFailed: PropTypes.bool.isRequired,
  postFeedbackForm: PropTypes.func.isRequired,
  cancelRetries: PropTypes.func.isRequired,
  postFailureCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  postingFeedbackFormFailed: feedbackSelectors.postingFeedbackFormFailed(state),
  postFailureCount: feedbackSelectors.getPostFailureCount(state),
});

const mapDispatchToProps = {
  postFeedbackForm: feedbackActions.postFeedbackForm,
  cancelRetries: feedbackActions.cancelRetryPostButtonClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpinnerContent);

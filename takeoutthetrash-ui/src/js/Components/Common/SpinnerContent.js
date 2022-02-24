import React from "react";
import PropTypes from "prop-types";
import * as feedbackSelectors from "../../Selectors/Feedback";
import { connect } from "react-redux";
import * as feedbackActions from "../../Actions/Feedback";

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

const SpinnerContent = ({
  postingFeedbackFormFailed,
  postFeedbackForm,
  cancelRetries,
  postFailureCount,
}) => {
  if (!postingFeedbackFormFailed) {
    return <Spinner />;
  }
  if (postFailureCount > 3) {
    return (
      <div>
        <button type="button" onClick={cancelRetries}>
          Cancel
        </button>
      </div>
    );
  }
  return (
    <div>
      <button type="button" onClick={postFeedbackForm}>
        Retry
      </button>
      <button type="button" onClick={cancelRetries}>
        Cancel
      </button>
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

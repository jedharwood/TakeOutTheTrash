import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../../Selectors/Cities";
import * as feedbackSelectors from "../../Selectors/Feedback";
import SpinnerLegend from "./SpinnerLegend";

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

const FetchingStateSpinner = ({ isFetchingCities, isPostingFeedbackForm }) => {
  if (!(isFetchingCities || isPostingFeedbackForm)) {
    // introduce an isVisible prop
    return null;
  }

  return (
    <Fragment>
      <div className="overlay" />
      <div className="modal">
        <div className-="modal-content">
          <div className="modal-header">
            <span>
              <SpinnerLegend />
            </span>
          </div>
          <div className="modal-body">
            <Spinner />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

FetchingStateSpinner.propTypes = {
  isFetchingCities: PropTypes.bool,
  isPostingFeedbackForm: PropTypes.bool,
  postFailureCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
  postFailureCount: feedbackSelectors.getPostFailureCount(state),
});

export default connect(mapStateToProps)(FetchingStateSpinner);

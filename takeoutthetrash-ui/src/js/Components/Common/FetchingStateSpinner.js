import React, { Fragment } from "react";
import PropTypes from "prop-types";
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

const FetchingStateSpinner = ({ isVisible }) => {
  if (!isVisible) {
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
  isVisible: PropTypes.bool.isRequired,
};

export default FetchingStateSpinner;

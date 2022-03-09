import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SpinnerLegend from "./SpinnerLegend";
import SpinnerContent from "./SpinnerContent";

const FetchingStateSpinner = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Fragment>
      {/* <div className="overlay" /> */}
      {/* have temporarily commented out this overlay css rule as it is interfering with buttons on the modal. Will reinstate after sorting out z-index issue */}
      <div className="modal">
        <div className-="modal-content">
          <div className="modal-header">
            <span>
              <SpinnerLegend />
            </span>
          </div>
          <div className="modal-body">
            <SpinnerContent />
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

import React from "react";
import PropTypes from "prop-types";
import SpinnerLegend from "./SpinnerLegend";
import SpinnerContent from "./SpinnerContent";

const FetchingStateSpinner = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg px-4 py-5 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-xl sm:px-6 sm:py-5">
            <div className="w-full text-dark-gray">
              <div>
                <h2 className="text-center text-xl font-bold">
                  <SpinnerLegend />
                </h2>
              </div>
              <div className="relative mt-2">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
              </div>
              <SpinnerContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FetchingStateSpinner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default FetchingStateSpinner;

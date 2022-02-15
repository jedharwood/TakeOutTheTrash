import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../../Selectors/Cities";
import * as prefecturesSelectors from "../../Selectors/Prefectures";
import * as feedbackSelectors from "../../Selectors/Feedback";

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

const getPrefectureName = (prefecture) => {
  //show spinner when fetching rules for city
  if (prefecture.name === undefined) {
    return "selected prefecture";
  }

  return prefecture.name;
};

export const getSpinnerLegend = (
  isFetchingCities,
  prefecture,
  isPostingFeedbackForm
) => {
  if (isFetchingCities && prefecture) {
    return `Retrieving cities for ${getPrefectureName(prefecture)}`;
  }
  if (isPostingFeedbackForm) {
    return "Posting feedback";
  }

  return null;
};

const FetchingStateSpinner = ({
  isFetchingCities,
  prefecture,
  isPostingFeedbackForm,
}) => {
  if (!(isFetchingCities || isPostingFeedbackForm)) {
    return null;
  }

  return (
    <Fragment>
      <div className="overlay" />
      <div className="modal">
        <div className-="modal-content">
          <div className="modal-header">
            <span>
              {getSpinnerLegend(
                isFetchingCities,
                prefecture,
                isPostingFeedbackForm
              )}
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
  prefecture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  isPostingFeedbackForm: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  prefecture: prefecturesSelectors.getPrefecture(state),
  isPostingFeedbackForm: feedbackSelectors.isPostingFeedbackForm(state),
});

export default connect(mapStateToProps)(FetchingStateSpinner);

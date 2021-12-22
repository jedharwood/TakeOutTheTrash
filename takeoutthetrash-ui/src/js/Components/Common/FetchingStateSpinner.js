import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../../Selectors/Cities";
import * as prefecturesSelectors from "../../Selectors/Prefectures";

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

const getSpinnerLegend = (isFetchingCities, prefecture) => {
  if (isFetchingCities && prefecture) {
    return `Retrieving cities for ${prefecture.name}`;
  }

  return null;
};

const FetchingStateSpinner = ({ isFetchingCities, prefecture }) => {
  if (!isFetchingCities) {
    return null;
  }

  return (
    <Fragment>
      <div className="overlay" />
      <div className="modal">
        <div className-="modal-content">
          <div className="modal-header">
            <span>{getSpinnerLegend(isFetchingCities, prefecture)}</span>
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
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  prefecture: prefecturesSelectors.getPrefecture(state),
});

export default connect(mapStateToProps)(FetchingStateSpinner);

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import Spinner from '../shared/Spinner.react';
import * as citiesSelectors from "../../Selectors/Cities";

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

const getSpinnerLegend = (isFetchingCities) => {
  if (isFetchingCities) {
    return "Retrieving cities for selected prefecture...";
  }

  return null;
};

const FetchingStateSpinner = ({ isFetchingCities }) => {
  if (!isFetchingCities) {
    return null;
  }

  return (
    <Fragment>
      <div className="overlay" />
      <div id="fetching_state_spinner">
        <Spinner />
        <span>{getSpinnerLegend(isFetchingCities)}</span>
      </div>
    </Fragment>
  );
};

FetchingStateSpinner.propTypes = {
  isFetchingCities: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
});

export default connect(mapStateToProps)(FetchingStateSpinner);

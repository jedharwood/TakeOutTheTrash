import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as citiesSelectors from "../Selectors/Cities/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as R from "ramda";

const RulesDisplay = ({ fetchingCitySucceeded, city }) => {
  if (!fetchingCitySucceeded) {
    return null;
  }

  if (R.isEmpty(city.rules)) {
    return <div>Rules? There are no rules!</div>;
  }

  return (
    <Fragment>
      <div>
        <h1>
          Good news - we have rules on how to dispose of refuse and recycling
          for {city.name} in our database.
        </h1>
        <p>
          I'll write them up in a neat table and put them here where you're
          seeing this fancy-looking placeholder.
        </p>
      </div>
      <div>
        <Link to="/calendarDisplay" className="btn btn-primary">
          View Calendar
        </Link>
      </div>
    </Fragment>
  );
};

RulesDisplay.propTypes = {
  fetchingCitySucceeded: PropTypes.bool.isRequired,
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(PropTypes.object),
  }),
};

const mapStateToProps = (state) => ({
  fetchingCitySucceeded: citiesSelectors.fetchingCitySucceeded(state),
  city: citiesSelectors.getCity(state),
});

export default connect(mapStateToProps)(RulesDisplay);

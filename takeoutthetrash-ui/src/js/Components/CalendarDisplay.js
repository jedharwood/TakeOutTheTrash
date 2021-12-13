import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as citiesSelectors from "../Selectors/Cities/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CalendarDisplay = ({ fetchingCitySucceeded, city }) => {
  if (!fetchingCitySucceeded) {
    return null;
  }

  return (
    <Fragment>
      <div>
        <h1>
          There's a plan to display the weekly/monthly garbage commitments for a
          resident of {city.name} as a handy calendar here...
        </h1>
        <p>
          ...but that will likely take place after I've wired up the back end as
          I'd like to assemble that logic in the api and serve it up as a
          response object.
        </p>
      </div>
      <div>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    </Fragment>
  );
};

CalendarDisplay.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchingCitySucceeded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: citiesSelectors.getCity(state),
  fetchingCitySucceeded: citiesSelectors.fetchingCitiesSucceeded(state),
});

export default connect(mapStateToProps)(CalendarDisplay);

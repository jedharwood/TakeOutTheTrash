import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as citiesSelectors from "../Selectors/Cities/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as R from "ramda";

const buildRubbishTypes = (types) => {
  if (types.length < 1) {
    return null;
  }

  return types.map((type) => <li>{type.name}</li>);
};

const buildTableRows = (city) => {
  console.log("city", city);
  return city.rules.map((day) => (
    <tr key={day.id}>
      <td>{day.name}</td>
      <td>{buildRubbishTypes(day.types)}</td>
    </tr>
  ));
};

const RulesDisplay = ({ fetchingCitySucceeded, city }) => {
  if (!fetchingCitySucceeded) {
    return null;
  }

  if (R.isEmpty(city.rules)) {
    return (
      <div>
        Sorry - looks like we've not added the rules for your city, yet. Maybe
        try moving to Yokohama, I'm pretty sure they have rules there...
      </div>
    );
  }

  return (
    <Fragment>
      <div>
        <h2>
          Good news - we have rules on how to dispose of refuse and recycling
          for {city.name} in our database.
        </h2>
        <table className="table">
          <tbody>{buildTableRows(city)}</tbody>
        </table>
      </div>
      <div>
        <Link to="/calendarDisplay" className="btn btn-primary">
          View Calendar
        </Link>
      </div>
      <div>
        <p>
          Please take a moment to rate the accuracy of the information provided
          here using the star ratings (coming soon...). If you've noticed any
          glaring inaccuracies please let us know via the...
        </p>
      </div>
      <div>
        <Link to="/feedback" className="btn btn-primary">
          Feedback Form
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
    prefecture: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            instructions: PropTypes.string,
            irregularFrequency: PropTypes.string,
          })
        ),
      })
    ),
  }),
};

const mapStateToProps = (state) => ({
  fetchingCitySucceeded: citiesSelectors.fetchingCitySucceeded(state),
  city: citiesSelectors.getCity(state),
});

export default connect(mapStateToProps)(RulesDisplay);

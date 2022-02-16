import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as citiesSelectors from "../Selectors/Cities/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as R from "ramda";
import RulesModal from "./RulesModal";
import * as rulesModalActions from "../Actions/RulesModal/index";
import * as feedbackActions from "../Actions/Feedback/index";

const RulesDisplay = ({
  fetchingCitySucceeded,
  city,
  openRulesModal,
  openFeedbackFormButtonClicked,
}) => {
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
        <button onClick={() => openRulesModal()}>Show Rules Modal</button>
        <RulesModal />
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
        <Link
          to="/feedback"
          className="btn btn-primary"
          onClick={openFeedbackFormButtonClicked}
        >
          Feedback Form
        </Link>
      </div>
    </Fragment>
  );
};

RulesDisplay.propTypes = {
  openRulesModal: PropTypes.func.isRequired,
  openFeedbackFormButtonClicked: PropTypes.isRequired,
  fetchingCitySucceeded: PropTypes.bool.isRequired,
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    prefecture: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
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

const mapDispatchToProps = {
  openRulesModal: rulesModalActions.openRulesModalButtonClicked,
  openFeedbackFormButtonClicked: feedbackActions.openFeedbackFormButtonClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesDisplay);

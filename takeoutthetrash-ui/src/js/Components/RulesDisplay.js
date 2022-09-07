import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RulesModal from "./RulesModal";
import * as feedbackActions from "../Actions/Feedback/index";
import * as rulesModalActions from "../Actions/RulesModal/index";
import * as citiesSelectors from "../Selectors/Cities/index";

const RulesDisplay = ({ fetchingCitySucceeded, openRulesModal, openFeedbackFormButtonClicked }) => {
  if (!fetchingCitySucceeded) {
    return null;
  }

  return (
    <Fragment>
      <div>
        <button onClick={() => openRulesModal()} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 button-wide">
          Show Rules Modal
        </button>
        <RulesModal />
      </div>
      <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 button-wide">
        <Link to="/calendarDisplay">View Calendar</Link>
      </button>
      <p className="text-dark-gray">Please take a moment to rate the accuracy of the information provided here using the star ratings (coming soon...). If you've noticed any glaring inaccuracies please let us know via the...</p>
      <button onClick={openFeedbackFormButtonClicked} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 button-wide">
        <Link to="/feedback">Feedback Form</Link>
      </button>
    </Fragment>
  );
};

RulesDisplay.propTypes = {
  fetchingCitySucceeded: PropTypes.bool.isRequired,
  openRulesModal: PropTypes.func.isRequired,
  openFeedbackFormButtonClicked: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  fetchingCitySucceeded: citiesSelectors.fetchingCitySucceeded(state),
});

const mapDispatchToProps = {
  openFeedbackFormButtonClicked: feedbackActions.openFeedbackFormButtonClicked,
  openRulesModal: rulesModalActions.openRulesModalButtonClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesDisplay);

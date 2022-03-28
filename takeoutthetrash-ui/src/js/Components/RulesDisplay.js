import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RulesModal from "./RulesModal";
import * as feedbackActions from "../Actions/Feedback/index";
import * as rulesModalActions from "../Actions/RulesModal/index";
import * as citiesSelectors from "../Selectors/Cities/index";

const RulesDisplay = ({
  fetchingCitySucceeded,
  openRulesModal,
  openFeedbackFormButtonClicked,
}) => {
  if (!fetchingCitySucceeded) {
    return null;
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

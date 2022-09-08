import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RulesModal from "./RulesModal";
import { WideButton } from "./Common/WideButton";
import * as feedbackActions from "../Actions/Feedback/index";
import * as rulesModalActions from "../Actions/RulesModal/index";
import * as citiesSelectors from "../Selectors/Cities/index";

const RulesDisplay = ({ fetchingCitySucceeded, openRulesModal, openFeedbackFormButtonClicked }) => {
  if (!fetchingCitySucceeded) {
    return null;
  }

  return (
    <Fragment>
      <WideButton buttonText="Show Rules Modal" onClick={openRulesModal} />
      <WideButton buttonText="View Calendar" route="/calendarDisplay" disabled={true} />
      <p className="text-dark-gray">Please take a moment to rate the accuracy of the information provided here using the star ratings (coming soon...). If you've noticed any glaring inaccuracies please let us know via the...</p>
      <WideButton buttonText="Feedback Form" onClick={openFeedbackFormButtonClicked} route="/feedback" />
      <RulesModal />
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

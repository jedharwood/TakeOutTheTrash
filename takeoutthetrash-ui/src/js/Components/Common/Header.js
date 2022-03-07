import React from "react";
import { NavLink } from "react-router-dom";
import * as feedbackActions from "../../Actions/Feedback";
import * as homeActions from "../../Actions/Home";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Header = ({
  openFeedbackFormButtonClicked,
  openHomePageButtonClicked,
}) => {
  return (
    <div id="header">
      <div className="title">
        <h1>Mottainai</h1>
      </div>
      <nav>
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="active-nav-link"
          onClick={openHomePageButtonClicked}
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          exact
          to="/feedback"
          className="nav-link"
          activeClassName="active-nav-link"
          onClick={openFeedbackFormButtonClicked}
        >
          Feedback
        </NavLink>
      </nav>
    </div>
  );
};

Header.propTypes = {
  openFeedbackFormButtonClicked: PropTypes.func.isRequired,
  openHomePageButtonClicked: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  openFeedbackFormButtonClicked: feedbackActions.openFeedbackFormButtonClicked,
  openHomePageButtonClicked: homeActions.openHomePageButtonClicked,
};

export default connect(null, mapDispatchToProps)(Header);

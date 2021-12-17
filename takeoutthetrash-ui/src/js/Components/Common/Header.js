import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
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
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          exact
          to="/feedback"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          Feedback
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

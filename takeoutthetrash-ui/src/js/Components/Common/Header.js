import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as feedbackActions from "../../Actions/Feedback";
import * as homeActions from "../../Actions/Home";
import { isMobile } from "react-device-detect";
import { RecycleSvg } from "../SVGs/RecycleSvg";
import { BurgerMenuSvg } from "../SVGs/BurgerMenuSvg";
import { gitHubUrl } from "../../Utilities/ResourceUtilities";

const Header = ({ openFeedbackFormButtonClicked, openHomePageButtonClicked }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const DesktopNavMenu = () => {
    if (showNavMenu && !isMobile) {
      return (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y" role="menu" aria-orientation="vertical" tabIndex="-1">
          <div className="py-1" role="none">
            <NavLink exact to="/" className="block px-4 py-2 text-sm nav-link" onClick={openHomePageButtonClicked}>
              Home
            </NavLink>
            <NavLink exact to="/feedback" className="block px-4 py-2 text-sm nav-link" onClick={openFeedbackFormButtonClicked}>
              Feedback
            </NavLink>
          </div>
          <div className="py-1" role="none">
            <a href={gitHubUrl} className="block px-4 py-2 text-sm nav-link">
              github
            </a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const MobileNavMenu = () => {
    if (showNavMenu && isMobile) {
      return (
        <nav role="menu" aria-orientation="vertical" tabIndex="-1">
          <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="px-4 flex items-center">
              <div className="mt-3 px-2 space-y-1">
                <NavLink exact to="/" className="block rounded-md py-2 px-3 text-sm text-base font-medium nav-link-mobile" onClick={openHomePageButtonClicked}>
                  Home
                </NavLink>
                <NavLink exact to="/feedback" className="block rounded-md py-2 px-3 text-sm text-base font-medium nav-link-mobile" onClick={openFeedbackFormButtonClicked}>
                  Feedback
                </NavLink>
                <a href={gitHubUrl} className="block rounded-md py-2 px-3 text-sm text-base font-medium nav-link-mobile">
                  github
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      return null;
    }
  };

  return (
    <header className="header-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative h-16 flex justify-between nav-container">
          <div className="relative z-10 px-2 flex lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <NavLink exact to="/" className="logo-link flex items-center focus:underline" onClick={openHomePageButtonClicked}>
                <RecycleSvg />
                <h1 className="text-xl font-bold pl-2">Mottainai</h1>
              </NavLink>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div className="relative z-10 flex items-center">
                <button type="button" className="rounded-md p-2 inline-flex items-center justify-center burger-menu" onClick={() => setShowNavMenu((showNavMenu) => !showNavMenu)}>
                  <span className="sr-only">Open menu</span>
                  <BurgerMenuSvg />
                </button>
              </div>
              <DesktopNavMenu />
            </div>
          </div>
        </div>
      </div>
      <MobileNavMenu />
    </header>
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

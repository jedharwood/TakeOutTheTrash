import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isNilOrEmpty } from "../../Utilities/RamdaUtilities";

export const getButtonType = (type) => {
  return !isNilOrEmpty(type) ? type : "button";
};

const handleOnClick = (onClick) => {
  return () => onClick();
};

export const WideButton = ({ type, route, onClick, disabled, buttonText }) => {
  const classes = "relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 button-wide";

  return route ? (
    <Link to={route}>
      <button type={getButtonType(type)} onClick={handleOnClick(onClick)} className={`${classes} mt-6`} disabled={disabled}>
        {buttonText}
      </button>
    </Link>
  ) : (
    <button type={getButtonType(type)} onClick={handleOnClick(onClick)} className={classes} disabled={disabled}>
      {buttonText}
    </button>
  );
};

WideButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  route: PropTypes.string,
  disabled: PropTypes.bool,
};

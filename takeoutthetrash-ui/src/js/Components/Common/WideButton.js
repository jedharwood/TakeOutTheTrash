import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LINK = "LINK";

export const WideButton = (props) => {
  const classes = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 button-wide";

  return props.type === LINK ? (
    <button className={classes}>
      <Link to={`/${props.route}`}>{props.buttonText}</Link>
    </button>
  ) : (
    <button onClick={props.onClick} className={classes}>
      {props.buttonText}
    </button>
  );
};

WideButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  route: PropTypes.string,
};

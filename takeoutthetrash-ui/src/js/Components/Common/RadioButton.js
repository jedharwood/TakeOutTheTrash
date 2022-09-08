import React from "react";
import PropTypes from "prop-types";

const getClassnames = (checked) => {
  return checked ? "radio-button checked" : "radio-button";
};

const handleOnClick = (onClick) => {
  return () => onClick();
};

const RadioButton = ({ checked, onClick }) => <button className={getClassnames(checked)} onClick={handleOnClick(onClick)} />;

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default RadioButton;

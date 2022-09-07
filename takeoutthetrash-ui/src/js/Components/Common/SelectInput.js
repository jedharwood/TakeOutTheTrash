import React from "react";
import PropTypes from "prop-types";

export const SelectInput = (props) => {
  let wrapperClass = "w-full px-3 py-2 border rounded-md focus-within:ring-1 focus:z-10 sm:text-sm form-input";
  if (props.error.length > 0) wrapperClass += " has-error";

  return (
    <div className="mb-4">
      <select onChange={props.onChange} className={wrapperClass} required={props.required}>
        <option value="default">{props.placeholder}</option>
        {props.children}
      </select>
      {props.error && <div className="info-minor alert">{props.error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};

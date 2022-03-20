import React from "react";
import PropTypes from "prop-types";

export const TEXT_AREA = "TEXT_AREA";

const renderInput = (props, wrapperClass) => {
  if (props.inputType === TEXT_AREA) {
    return (
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        error={props.error}
        className={wrapperClass}
      />
    );
  }
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      placeholder={props.placeholder}
      error={props.error}
      className={wrapperClass}
    />
  );
};

export const TextInput = (props) => {
  let wrapperClass = "form-input";
  if (props.error.length > 0) wrapperClass += " has-error";
  //do same for select input
  return (
    <div className="form-field">
      {renderInput(props, wrapperClass)}
      {props.error && <div className="info-minor alert">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

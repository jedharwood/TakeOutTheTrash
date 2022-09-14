import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const customTheme = (theme) => {
  return {
    ...theme,
    borderRadius: 6,
    borderColor: "#d1d5db", //$gray-300
    colors: {
      ...theme.colors,
      primary25: "#f3f4f6", //$gray-100
      primary: "#1e293b", // $slate-800
      neutral80: "#111827", // $gray-900
    },
  };
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#94a3b8" : "#111827", // $gray-400:900,
    cursor: state.isDisabled ? "default" : "pointer",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "#6b7280", //$gray-500
  }),
};

export const SearchSelectInput = ({ options, onChange, placeholder, isLoading }) => {
  return <Select required={true} isSearchable={true} theme={customTheme} styles={customStyles} options={options} onChange={onChange} placeholder={placeholder} isLoading={isLoading} />;
};

SearchSelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool,
    })
  ),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const colours = {
  gray100: "#f3f4f6",
  gray300: "#d1d5db",
  gray400: "#94a3b8",
  gray500: "#6b7280",
  gray900: "#111827",
  slate800: "#1e293b",
};

const customTheme = (theme) => {
  return {
    ...theme,
    borderRadius: 6,
    borderColor: colours.gray300,
    colors: {
      ...theme.colors,
      primary25: colours.gray100,
      primary: colours.slate800,
      neutral80: colours.gray900,
    },
  };
};

const setOptionColour = (state) => {
  if (state.isDisabled) return colours.gray400;
  return state.isSelected ? colours.gray100 : colours.gray900;
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: setOptionColour(state),
    cursor: state.isDisabled ? "default" : "pointer",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: colours.gray500,
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

import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

export const CALENDAR = "CALENDAR";

const calendarSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
    />
  </svg>
);

const questionSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const getSvgType = (svgName) => {
  return svgName === CALENDAR ? calendarSvg : questionSvg;
};

export const getContent = (svgName, type) => {
  if (svgName === CALENDAR) {
    return type.irregularFrequency;
  }
  return type.description && type.instructions ? (
    <div>
      {type.description}
      <br />
      {type.instructions}
    </div>
  ) : (
    type.description || type.instructions
  );
};

export const SvgWithTooltip = ({ svgName, position, type }) => {
  return (
    <Popup trigger={getSvgType(svgName)} position={position} on="hover">
      <div className="tool-tip p-2 rounded-md">{getContent(svgName, type)}</div>
    </Popup>
  );
};

SvgWithTooltip.propTypes = {
  svgName: PropTypes.string,
  position: PropTypes.string,
  type: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    instructions: PropTypes.string,
    irregularFrequency: PropTypes.string,
  }),
};

import React from "react";
import * as citiesSelectors from "../Selectors/Cities/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isNilOrEmpty } from "../Utilities/RamdaUtilities";
import { SvgWithTooltip, CALENDAR } from "../Components/Common/SvgWithTooltip";

const buildTableRows = (city) => {
  return city.rules.map((day) => (
    <tr key={day.id}>
      <td className="border p-4 table-border w-32">{day.name}</td>
      <td className="border py-2 table-border">
        <table className="w-full">
          <tbody>{buildInnerTableRows(day.types)}</tbody>
        </table>
      </td>
    </tr>
  ));
};

const buildInnerTableRows = (types) => {
  return types.length < 1
    ? null
    : types.map((type) => (
        <tr key={type.name}>
          <td className="pl-2 table-icon w-8">
            <SvgWithTooltip position="top left" type={type} />
          </td>
          <td className="pl-2">{type.name}</td>
          <td className="pr-2 w-8 table-icon">{showIrregularFrequency(type)}</td>
        </tr>
      ));
};

const showIrregularFrequency = (type) => {
  return isNilOrEmpty(type.irregularFrequency) ? null : <SvgWithTooltip svgName={CALENDAR} position="top right" type={type} />;
};

const RulesTable = ({ city }) => {
  return (
    <div className="relative overflow-auto">
      <div className="shadow-sm overflow-hidden">
        <table className="border-collapse table-fixed w-full">
          <tbody className="bg-white">{buildTableRows(city)}</tbody>
        </table>
      </div>
    </div>
  );
};

RulesTable.propTypes = {
  city: PropTypes.shape({
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            instructions: PropTypes.string,
            irregularFrequency: PropTypes.string,
          })
        ),
      })
    ),
  }),
};

const mapStateToProps = (state) => ({
  city: citiesSelectors.getCity(state),
});

export default connect(mapStateToProps)(RulesTable);

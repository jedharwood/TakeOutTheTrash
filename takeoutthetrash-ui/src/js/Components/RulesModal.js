import React from "react";
import { CSSTransition } from "react-transition-group";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as rulesModalSelectors from "../Selectors/RulesModal/index";
import * as rulesModalActions from "../Actions/RulesModal/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const buildRubbishTypes = (types) => {
  if (types.length < 1) {
    return null;
  }

  return types.map((type) => <li key={type.name}>{type.name}</li>);
};

const buildIrregularFrequencies = (types) => {
  if (types.length < 1) {
    return null;
  }

  return types.map((type) => (
    <li key={type.name}>{type.irregularFrequency}</li>
  ));
};

const buildTableRows = (city) => {
  return city.rules.map((day) => (
    <tr key={day.id}>
      <td>{day.name}</td>
      <td>{buildRubbishTypes(day.types)}</td>
      <td>{buildIrregularFrequencies(day.types)}</td>
    </tr>
  ));
};

const RulesModal = ({ showRulesModal, closeRulesModal, city }) => {
  if (!showRulesModal) {
    return null;
  }

  return (
    <CSSTransition
      in={showRulesModal}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={() => closeRulesModal()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{city.name} Recycling Rules</h4>
          </div>
          <div className="modal-body">
            <table className="table">
              <tbody>{buildTableRows(city)}</tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button onClick={() => closeRulesModal()} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

RulesModal.propTypes = {
  showRulesModal: PropTypes.bool.isRequired,
  closeRulesModal: PropTypes.func.isRequired,
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    prefecture: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired, // update this proptype
    }).isRequired,
  }),
};

const mapStateToProps = (state) => ({
  showRulesModal: rulesModalSelectors.showRulesModal(state),
  city: citiesSelectors.getCity(state),
});

const mapDispatchToProps = {
  closeRulesModal: rulesModalActions.closeRulesModalButtonClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesModal);

import React from "react";
import * as citiesSelectors from "../Selectors/Cities/index";
import * as rulesModalSelectors from "../Selectors/RulesModal/index";
import * as rulesModalActions from "../Actions/RulesModal/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { WideButton } from "./Common/WideButton";
import RulesTable from "../Components/RulesTable";

const RulesModal = ({ showRulesModal, closeRulesModal, city }) => {
  if (!showRulesModal) {
    return null;
  }

  return (
    <div id="modal-wrapper" className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div id="modal-backdrop" className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      {/* Close on backdrop click */}
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div id="modal-panel" className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-xl sm:w-full w-full sm:p-6">
            <div className="w-full space-y-6 text-dark-gray">
              <div>
                <h2 className="text-center text-3xl font-extrabold">{city.name} Recycling Rules</h2>
              </div>
              <RulesTable />
              <WideButton buttonText="Close" onClick={closeRulesModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RulesModal.propTypes = {
  showRulesModal: PropTypes.bool.isRequired,
  closeRulesModal: PropTypes.func.isRequired,
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
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

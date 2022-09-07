import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import RulesDisplay from "../Components/RulesDisplay";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../Selectors/Cities";

const LandingPage = ({ isFetchingCities, isFetchingCity }) => {
  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 my-6">
          <div className="text-dark-gray text-center">
            <h2 className="text-3xl font-extrabold">Do you know...</h2>
            <p className="mt-2">...if that bottle goes out on PET bottle day or plastic day?</p>
            <p>Do you know which bag to put your aluminium cans in?</p>
            <h2 className="mt-3 text-xl font-extrabold">Do you even know where you live???</h2>
          </div>
          <SelectCityForm errors={{ city: "", prefecture: "" }} />
          <RulesDisplay />
        </div>
      </div>
      <FetchingStateSpinner isVisible={isFetchingCities || isFetchingCity} />
    </div>
  );
};

LandingPage.propTypes = {
  isFetchingCities: PropTypes.bool,
  isFetchingCity: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isFetchingCities: citiesSelectors.isFetchingCities(state),
  isFetchingCity: citiesSelectors.isFetchingCity(state),
});

export default connect(mapStateToProps)(LandingPage);

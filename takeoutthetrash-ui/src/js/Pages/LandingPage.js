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
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold landing-page">Do you know...</h2>
            <p className="mt-2 text-center landing-page">...if that bottle goes out on PET bottle day or plastic day?</p>
            <p className="text-center landing-page">Do you know which bag to put your aluminium cans in?</p>
            <h2 className="mt-3 text-center text-xl font-extrabold landing-page">Do you even know where you live???</h2>
          </div>
          <SelectCityForm errors={{ city: "", prefecture: "" }} />
        </div>
      </div>

      <RulesDisplay />
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

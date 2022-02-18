import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import RulesDisplay from "../Components/RulesDisplay";
import FetchingStateSpinner from "../Components/Common/FetchingStateSpinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as citiesSelectors from "../Selectors/Cities";

const LandingPage = ({ isFetchingCities, isFetchingCity }) => {
  return (
    <div className="container">
      <div className="landing-page">
        <p>
          Do you know if that bottle goes out on PET bottle day or plastic day?
        </p>
        <p>Do you know which bag to put your aluminium cans in?</p>
        <h2>Do you know where you live???</h2>
        <SelectCityForm />
        <RulesDisplay />
        <FetchingStateSpinner isVisible={isFetchingCities || isFetchingCity} />
      </div>
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

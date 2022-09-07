import React from "react";
import PropTypes from "prop-types";
import * as citiesSelectors from "../Selectors/Cities/index";
import { connect } from "react-redux";
import { WideButton, LINK } from "../Components/Common/WideButton";

const CalendarDisplay = ({ fetchingCitySucceeded, city }) => {
  if (!fetchingCitySucceeded) {
    return null;
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 my-6">
        <div className="text-dark-gray text-center ">
          <h2 className="text-2xl font-extrabold">There's a plan to display the weekly/monthly garbage commitments for a resident of {city.name} as a handy calendar here...</h2>
          <p className="mt-2">...but that will likely take place after I've wired up the back end as I'd like to assemble that logic in the api and serve it up as a response object.</p>
        </div>
        <WideButton buttonText="Back" type={LINK} route="" />
      </div>
    </div>
  );
};

CalendarDisplay.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchingCitySucceeded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: citiesSelectors.getCity(state),
  fetchingCitySucceeded: citiesSelectors.fetchingCitiesSucceeded(state),
});

export default connect(mapStateToProps)(CalendarDisplay);

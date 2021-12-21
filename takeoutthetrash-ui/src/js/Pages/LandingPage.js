import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import RulesDisplay from "../Components/RulesDisplay";

function LandingPage() {
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
      </div>
    </div>
  );
}

export default LandingPage;

import React from "react";
import SelectCityForm from "../Components/SelectCityForm";
import RulesDisplay from "./RulesDisplay";

function LandingPage() {
  return (
    <div className="jumbotron">
      <p>Did you put paper in the card recycling, again?</p>
      <p>Did you bin a PET bottle with the cap still on?</p>
      <p>Buddy...</p>
      <h1>It's time to take out the trash!</h1>
      <SelectCityForm />
      <RulesDisplay />
    </div>
  );
}

export default LandingPage;

import React from "react";
//import { Link } from "react-router-dom";
import SelectCityForm from "../Components/SelectCityForm";

function LandingPage() {
  return (
    <div className="jumbotron">
      <p>Did you put paper in the card recycling, again?</p>
      <p>Did you bin a PET bottle with the cap still on?</p>
      <p>Buddy...</p>
      <h1>It's time to take out the trash!</h1>
      {/* <Link to="/selectCity" className="btn btn-primary">
        Enter
      </Link> */}
      <SelectCityForm />
    </div>
  );
}

export default LandingPage;

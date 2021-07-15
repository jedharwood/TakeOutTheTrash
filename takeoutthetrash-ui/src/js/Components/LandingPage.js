import React from "react";
import { Link } from "react-router-dom";
import SelectCityForm from "../Components/SelectCityForm";

function LandingPage() {
  return (
    <div className="jumbotron">
      <h1>It's time to take out the trash!</h1>
      <Link to="/selectCity" className="btn btn-primary">
        Enter
      </Link>
      <SelectCityForm />
    </div>
  );
}

export default LandingPage;

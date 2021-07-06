import "../css/App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
//import Header from "./common/Header";
import LandingPage from "./Components/LandingPage";
import SelectCityPage from "./Components/SelectCityPage";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <div className="container-fluid">
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/selectCity" component={SelectCityPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

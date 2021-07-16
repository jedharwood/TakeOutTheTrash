import React from "react";
import { Route, Switch } from "react-router-dom";
import "../css/App.css";
import Header from "./Components/Common/Header";
import LandingPage from "./Components/LandingPage";
import CalendarDisplay from "./Components/CalendarDisplay";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/calendarDisplay" exact component={CalendarDisplay} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

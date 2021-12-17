import React from "react";
import { Route, Switch } from "react-router-dom";
import "../css/App.scss";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import LandingPage from "./Pages/LandingPage";
import CalendarDisplay from "./Pages/CalendarDisplay";
import Feedback from "./Pages/Feedback";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/calendarDisplay" exact component={CalendarDisplay} />
        <Route path="/feedback" exact component={Feedback} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

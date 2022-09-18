import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import EmailUnsubscribe from "./Pages/EmailUnsubscribe";
import OurTeam from "./Pages/OurTeam";
import Home from "./Pages/Home";
const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/unsubscribe" component={EmailUnsubscribe} />
          <Route exact path="/team" component={OurTeam} />
        </Switch>
      </Router>
    </>
  );
};
export default Routing;

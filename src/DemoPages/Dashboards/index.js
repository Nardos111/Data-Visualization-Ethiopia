import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard1 from "./Main";
import economyDashboard from "./Economy";
import environmentalDashboard from "./Environmental";
import demographicDashboard from "./Demographic";
import othersDashboard from "./Others";
// Layout

import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Dashboards = ({ match }) => (
  <Fragment>
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/main`} component={AnalyticsDashboard1} />
          <Route path={`${match.url}/economy`} component={economyDashboard} />
          <Route
            path={`${match.url}/environmental`}
            component={environmentalDashboard}
          />
          <Route
            path={`${match.url}/demographic`}
            component={demographicDashboard}
          />
          <Route path={`${match.url}/others`} component={othersDashboard} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;

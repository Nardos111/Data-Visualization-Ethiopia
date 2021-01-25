import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import BasicDashboard from './Basic/';
import AnalyticsDashboard1 from './Main'

// Layout

import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({match}) => (
    <Fragment>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/basic`} component={BasicDashboard}/>
                    <Route path={`${match.url}/main`} component={AnalyticsDashboard1}/>

                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Dashboards;
import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// COMPONENTS

// Tabs

import TabExample from './Tabs/';

// Carousel

import CarouselExample from './Carousel/';

// Maps

import MapsExample from './Maps/';

// Layout


import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Components = ({match}) => (
    <Fragment>

        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* Components */}

                    {/* Tabs */}

                    <Route path={`${match.url}/tabs`} component={TabExample}/>

                    {/* Carousel */}

                    <Route path={`${match.url}/carousel`} component={CarouselExample}/>
                    
                    {/* Maps */}

                    <Route path={`${match.url}/maps`} component={MapsExample}/>

                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Components;
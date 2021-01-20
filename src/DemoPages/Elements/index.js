import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// BUTTONS

// Standard

import CardsExamples from './Cards/';

// LIST GROUP

import ListGroupExample from '../Elements/ListGroup/';

// NAVIGATION

// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Elements = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* Cards */}
                    <Route path={`${match.url}/cards`} component={CardsExamples}/>
                    {/* List Group */}
                    <Route path={`${match.url}/list-group`} component={ListGroupExample}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Elements;
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { default as Home } from '../containers/HomeContainer';
import { default as App } from '../containers/AppContainer';


export const Router = () => (
    <HashRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </App>
    </HashRouter>
);

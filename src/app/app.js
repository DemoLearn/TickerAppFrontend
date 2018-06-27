import 'babel-polyfill';
import 'url-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'grommet/scss/aruba/index.scss';
import createStore from './store';
import { Router } from './router';
import './styles/app.scss';


render(
    <Provider store={createStore()}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

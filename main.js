
// @flow

/** Load global style */
import 'bootstrap-only-commoncss/css/bootstrap.css';
import 'fonts/icomoon/style.css';
import './sass/global.scss';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, browserHistory } from 'react-router';
import getRoutes from 'routes';
import stores from 'stores';

render(

    <Provider {...stores}>
        <Router >
            {getRoutes()}
        </Router>
    </Provider>,

    document.getElementById('root')
);

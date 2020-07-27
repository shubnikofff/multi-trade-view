import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Media from 'react-media';

import { Box } from '@material-ui/core';

import {
    Chat,
    TradeList,
    Trade,
    TradeDashboard,
    UserPanel,
} from './components';

import {
    PATH_CHAT,
    PATH_DASHBOARD,
    PATH_ROOT,
} from './constants';

import './App.scss';

const MEDIA_QUERY_SMALL_SCREEN = 'screen and (max-width: 399px)';

function App() {
    return (
        <div className="app">
            <div className="app__header">
                <UserPanel />
            </div>
            <div className="app__content">
                <Router>
                    <Media query={MEDIA_QUERY_SMALL_SCREEN}>
                        {isSmallScreen => isSmallScreen ? (
                            <Switch>
                                <Route exact path={PATH_ROOT} component={TradeList} />
                                <Route exact path={`${PATH_CHAT}/:tradeId`} component={Chat} />
                                <Route exact path={`${PATH_DASHBOARD}/:tradeId`} component={TradeDashboard} />
                            </Switch>
                        ) : (
                            <Switch>
                                <Route
                                    exact
                                    path={[PATH_ROOT, `${PATH_CHAT}/:tradeId`, `${PATH_DASHBOARD}/:tradeId`]}
                                    component={Trade}
                                />
                            </Switch>
                        )}
                    </Media>
                </Router>
            </div>
        </div>
    );
}

export default App;

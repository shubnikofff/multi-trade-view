import React from 'react';

import { useApp } from './useApp';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Media from 'react-media';

import {
    Chat,
    CombinedView,
    Dashboard,
    TradeList,
} from './components';

import {
    PATH_CHAT,
    PATH_DASHBOARD,
    PATH_ROOT,
} from './paths';

import './App.scss';

const MEDIA_QUERY_SMALL_SCREEN = 'screen and (max-width: 599px)';

function App() {
    useApp();

    return (
        <div className="app">
            <div className="app__content">
                <Router>
                    <Media query={MEDIA_QUERY_SMALL_SCREEN}>
                        {isSmallScreen => isSmallScreen ? (
                            <Switch>
                                <Route exact path={PATH_ROOT}>
                                    <TradeList />
                                </Route>
                                <Route exact path={`${PATH_CHAT}/:tradeId`}>
                                    <Chat smallScreen />
                                </Route>
                                <Route exact path={`${PATH_DASHBOARD}/:tradeId`}>
                                    <Dashboard smallScreen />
                                </Route>
                            </Switch>
                        ) : (
                            <Switch>
                                <Route
                                    exact
                                    path={[PATH_ROOT, `${PATH_CHAT}/:tradeId`, `${PATH_DASHBOARD}/:tradeId`]}
                                >
                                    <CombinedView />
                                </Route>
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

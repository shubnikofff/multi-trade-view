import React from 'react';

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import Media from 'react-media';

import {
    Chat,
    TradeList,
    Trade,
    TradeDashboard,
} from './components';

import * as PATHS from './paths';

const MEDIA_QUERY_SMALL_SCREEN = 'screen and (max-width: 399px)';

function App() {
    return (
        <Router>

            <Media query={MEDIA_QUERY_SMALL_SCREEN}>

                {isSmallScreen => isSmallScreen ? (
                    <Switch>

                        <Route exact path={PATHS.ROOT} component={TradeList} />
                        <Route path={PATHS.CHAT} component={Chat} />
                        <Route exact path={PATHS.DASHBOARD} component={TradeDashboard} />

                        <Redirect from={PATHS.TRADE} to={PATHS.ROOT} />

                    </Switch>
                ) : (
                    <Switch>

                        <Route exact path={[PATHS.ROOT, PATHS.TRADE]} component={Trade} />
                        {/*<Route exact path={PATHS.TRADE} component={Trade} />*/}

                        {/*<Redirect from={PATHS.ROOT} to={PATHS.TRADE} />*/}
                        <Redirect from={PATHS.CHAT} to={PATHS.TRADE} />
                        <Redirect from={PATHS.DASHBOARD} to={PATHS.TRADE} />


                    </Switch>
                )}

            </Media>

        </Router>
    );
}

export default App;

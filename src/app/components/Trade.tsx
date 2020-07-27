import React from 'react';

import { Box, Grid } from '@material-ui/core';

import TradeList from './trade-list';
import Chat from './chat';
import TradeDashboard from './dashboard';

interface TradeProps {
}

function Trade() {
    return (
        <Grid container>

            <Grid item xs={3}>
                <Box p={1} borderRight={1}>
                    <TradeList />
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box p={1} borderRight={1}>
                    <Chat />
                </Box>
            </Grid>

            <Grid item xs={3}>
                <Box p={1}>
                    <TradeDashboard />
                </Box>
            </Grid>

        </Grid>
    );
}

export default React.memo<TradeProps>(Trade);

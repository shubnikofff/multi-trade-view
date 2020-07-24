import React from 'react';

import { useParams } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import TradeList from './TradeList';
import Chat from './Chat';
import TradeDashboard from './TradeDashboard';

interface TradeProps {
}

function Trade() {
    const { tradeId } = useParams();

    return (
        <>
            <h1>{`Trade #${tradeId}`}</h1>

            <Grid container>

                <Grid item xs={3}>
                    <TradeList />
                </Grid>

                <Grid item xs={6}>
                    <Chat />
                </Grid>

                <Grid item xs={3}>
                    <TradeDashboard />
                </Grid>

            </Grid>
        </>
    );
}

export default React.memo<TradeProps>(Trade);

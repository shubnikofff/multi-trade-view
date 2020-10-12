import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initApp } from '@common/actions';

import { TradeEntity } from '@type/Trade';
import { InitialData } from '@type/Store';

const tradeAdapter = createEntityAdapter<TradeEntity>();

const slice = createSlice({
    name: 'trades',
    initialState: tradeAdapter.getInitialState(),
    reducers: {
        updateTrade: tradeAdapter.updateOne,
        removeTrade: tradeAdapter.removeOne
    },
    extraReducers: {
        [initApp.type]: (state, { payload }: PayloadAction<InitialData>) => {
            tradeAdapter.setAll(state, payload.trades);
        },
    }
});

export default slice;

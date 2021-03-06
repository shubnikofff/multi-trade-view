import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initApp } from '@common/actions';

import { Trade } from '@type/Trade';
import { InitialData } from '@type/Store';

import { rate as initialRate } from '@app/initialData';

const tradeAdapter = createEntityAdapter<Trade>({
    selectId: trade => trade.hash,
    sortComparer: (a, b) => a.started - b.started,
});

const slice = createSlice({
    name: 'trades',
    initialState: tradeAdapter.getInitialState({
        rate: initialRate,
    }),
    reducers: {
        updateTrade: tradeAdapter.updateOne,
        removeTrade: tradeAdapter.removeOne,
        setRate: (state, { payload }: PayloadAction<number>) => ({
            ...state,
            rate: payload,
        }),
    },
    extraReducers: {
        [initApp.type]: (state, { payload }: PayloadAction<InitialData>) => {
            tradeAdapter.setAll(state, payload.trades);
        },
    }
});

export default slice;

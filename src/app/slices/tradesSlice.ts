import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TradeEntity } from '../types/trade';

import { trades } from '../initialData';

const tradeAdapter = createEntityAdapter<TradeEntity>();

const initialState = tradeAdapter.setAll(tradeAdapter.getInitialState(), trades);

const slice = createSlice({
    name: 'trades',
    initialState,
    reducers: {
        updateTrade: tradeAdapter.updateOne,
        removeTrade: tradeAdapter.removeOne
    }
});

const { actions, reducer } = slice;

const selectors = tradeAdapter.getSelectors<RootState>(state => state.trades);

export {
    actions,
    reducer,
    selectors,
}

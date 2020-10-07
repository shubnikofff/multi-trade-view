import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { TradeEntity } from '@type/Trade';

import { trades } from '@app/initialData';

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

export default slice;

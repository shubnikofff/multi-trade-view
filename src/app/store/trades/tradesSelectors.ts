import { createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '@type/Store';
import { Trade } from '@type/Trade';

const tradeAdapter = createEntityAdapter<Trade>();

const selectRate = (state: RootState) => state.trades.rate;

export default {
    ...tradeAdapter.getSelectors<RootState>(state => state.trades),
    selectRate,
};

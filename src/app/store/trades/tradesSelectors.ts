import { createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '@type/Store';
import { TradeEntity } from '@type/Trade';

const tradeAdapter = createEntityAdapter<TradeEntity>();

export default tradeAdapter.getSelectors<RootState>(state => state.trades);

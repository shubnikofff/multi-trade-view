import { useSelector } from "react-redux";
import { selectors as usersSelectors } from '@store/users';

import { Trade } from "@type/Trade";
import { RootState } from "@type/Store";
import { User } from "@type/User";
import { useRate } from "@common/hooks";

export function useTradeListItem(trade: Trade) {
    const buyer = useSelector<RootState, User | undefined>(state => usersSelectors.selectById(state, trade.buyerId));
    const { convert } = useRate();

    return {
        buyer,
        convert,
    }
}

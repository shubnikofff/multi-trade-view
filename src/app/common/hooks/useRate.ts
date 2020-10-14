import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from "react";

import { actions, selectors } from '@store/trades';
import { RootState } from '@type/Store';

export function useRate() {
    const dispatch = useDispatch();

    const rate = useSelector<RootState, number>(selectors.selectRate);

    const setRate = useCallback((rate: number) => dispatch(actions.setRate(rate)), [dispatch]);

    const convert = useCallback((amount: number) => amount / rate, [rate]);

    return {
        setRate,
        convert,
    }
}

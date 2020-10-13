import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from "react";

import { actions } from '@store/rate';
import { RootState } from '@type/Store';

function useRate() {
    const dispatch = useDispatch();

    const rate = useSelector<RootState, number>(state => state.rate);

    const setRate = useCallback((rate: number) => dispatch(actions.setRate(rate)), [dispatch]);

    const convert = useCallback((amount: number) => amount / rate, [rate]);

    return {
        setRate,
        convert,
    }
}

export { useRate }

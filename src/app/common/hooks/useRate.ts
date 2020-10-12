import { useDispatch, useSelector } from 'react-redux';

import { actions } from '@store/rate';
import { RootState } from '@type/Store';

function useRate() {
    const dispatch = useDispatch();

    const rate = useSelector<RootState, number>(state => state.rate);

    const setRate = (rate: number) => dispatch(actions.setRate(rate));

    const convert = (amount: number) => amount / rate;

    return {
        setRate,
        convert,
    }
}

export { useRate }

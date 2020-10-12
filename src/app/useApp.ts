import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRate } from '@common/hooks';
import { initApp } from '@common/actions';
import * as initialData from '@app/initialData';

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const SET_RATE_TIMEOUT_MS = 10000;

function useApp() {
    const dispatch = useDispatch();
    const { setRate } = useRate();

    const updateRate = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setRate(data.bpi.USD.rate_float));

        setTimeout(updateRate, SET_RATE_TIMEOUT_MS);
    };

    useEffect(updateRate, []);
    useEffect(() => {
        dispatch(initApp(initialData));
    }, [dispatch])
}

export { useApp };

import { useEffect } from 'react';
import { useRate } from './hooks';

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const SET_RATE_TIMEOUT_MS = 10000;

interface RateResponse {
    bpi: {
        USD: {
            rate_float: number;
        }
    }
}

function useApp() {
    const { setRate } = useRate();

    const updateRate = () => {
        fetch<>(API_URL)
            .then(response => response.json() as RateResponse)
            .then(data => setRate(data.bpi.USD.rate_float));

        setTimeout(updateRate, SET_RATE_TIMEOUT_MS);
    };

    useEffect(updateRate, []);
}

export { useApp };

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rate } from "@app/initialData";

const slice = createSlice({
    name: 'rate',
    initialState: rate,
    reducers: {
        setRate: (state, { payload }: PayloadAction<number>) => payload,
    }
});

export default slice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'price',
    initialState: 10000,
    reducers: {
        setRate: (state, { payload }: PayloadAction<number>) => payload,
    }
})

const { actions, reducer } = slice;

export {
    actions,
    reducer,
}

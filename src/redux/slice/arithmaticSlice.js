import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addResult: 0
}

const arithmaticSlice = createSlice({
    name: 'arithmatic',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            //console.log(action)
            state.addResult += action.payload.a + action.payload.b
        }
    }
});

export const { add } = arithmaticSlice.actions;
export default arithmaticSlice.reducer;
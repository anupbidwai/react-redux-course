import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        text: `Current count is 0`
    },
    reducers: {
        increment: function (state) {
            state.value += 1;
            state.text = `Current count is ${state.value}`
        },
        decrement: (state) => {
            state.value = state.value > 0 ? --state.value : state.value;
            state.text = `Current count is ${state.value}`
        }
    }
});

export const {
    increment,
    decrement
} = counterSlice.actions;

export default counterSlice.reducer;
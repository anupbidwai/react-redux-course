import { createSlice } from "@reduxjs/toolkit";

const headingSlice = createSlice({
    name: 'heading',
    initialState: {
        value: 'this is a redux toolkit !!!'
    }
});

export default headingSlice.reducer
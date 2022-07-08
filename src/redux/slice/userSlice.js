import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = ("https://jsonplaceholder.typicode.com/users");

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        title: 'user data',
        loading: false,
        users: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true;
            state.error = null
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false
        }
    }
});

export default userSlice.reducer;
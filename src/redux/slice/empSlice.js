import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = ("https://jsonplaceholder.typicode.com/users");

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
});

const EmpSlice = createSlice({
    name: 'user',
    initialState: {
        title: 'user data',
        loading: false,
        users: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error
        })
    }
    // another way
    /*
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
    }*/
});

export default EmpSlice.reducer;
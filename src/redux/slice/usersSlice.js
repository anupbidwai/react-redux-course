import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = ("https://jsonplaceholder.typicode.com/users");

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    let response, data;
    response = await fetch(url);
    data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        title: 'user data',
        loading: false,
        records: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
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

export default userSlice.reducer;
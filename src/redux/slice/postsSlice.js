import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsAPI } from '../../api/post/postsAPI';

const initialState = {
    loading: false,
    error: null,
    records: null
};

export const fetchPosts = createAsyncThunk("post/fetchPosts", async (postId) => {
    let response, data;
    response = await postsAPI.fetchById(postId);
    data = await response.json();
    return data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState: { ...initialState },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
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

export default postSlice.reducer;



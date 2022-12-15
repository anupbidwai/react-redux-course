import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsAPI } from '../../api/post';

const initialState = {
    loading: false,
    error: null,
    records: null,
    greetingMsg: null
};

// genrate thunk that dispatch `pending/fulfilled/rejected` action types
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (postId) => {
    let response;
    response = await postsAPI.getById(postId);
    return await response.data;
})

// accepts an object of reducer functions, a slice name, and an initial state value,
// and automatically generates a slice reducer with corresponding action creators and action types.
const postSlice = createSlice({
    name: 'posts',
    initialState: { ...initialState },
    reducers: {
        greetMe: (state, action) => {
            console.log(action, state)
            state.greetingMsg = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload
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
export const postActions = postSlice.actions;
export default postSlice.reducer;


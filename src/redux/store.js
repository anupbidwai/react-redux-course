import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice/usersSlice';
import postsReducer from './slice/postsSlice';

export default configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer
    }
});

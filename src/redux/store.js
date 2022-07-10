import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postsSlice';
import arithmaticReducer from './slice/arithmaticSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        arithmatic: arithmaticReducer
    }
});

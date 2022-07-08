import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import headingReducer from './slice/headingSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        heading: headingReducer
    }
});

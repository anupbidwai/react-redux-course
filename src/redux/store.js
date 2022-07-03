import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import headingSliceReducer from './slice/headingSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        heading: headingSliceReducer
    }
});

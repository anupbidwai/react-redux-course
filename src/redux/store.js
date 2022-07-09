import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import titleReducer from './slice/titleSlice';
import recordReducer from './slice/recordSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        title: titleReducer,
        record: recordReducer
    }
});

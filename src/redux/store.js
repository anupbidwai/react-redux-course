import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import titleReducer from './slice/titleSlice';
import empReducer from './slice/empSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        title: titleReducer,
        emp: empReducer
    }
});

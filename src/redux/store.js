import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import titleReducer from './slice/titleSlice';
import userReducer from './slice/userSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        title: titleReducer,
        user: userReducer
    }
});

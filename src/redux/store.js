import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import titleReducer from './slice/titleSlice';
import usersReducer from './slice/usersSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        title: titleReducer,
        users: usersReducer
    }
});

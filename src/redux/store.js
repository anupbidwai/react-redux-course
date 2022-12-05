// without persist store
/* import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postsSlice';
import arithmaticReducer from './slice/arithmaticSlice';

export const store = configureStore({
    reducer: {
        arithmatic: arithmaticReducer,
        posts: postsReducer
    },
});
 */

// with persist store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import arithmaticReducer from './slice/arithmaticSlice';
import postsReducer from './slice/postsSlice';
import todoSlice from './slice/todoSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    arithmatic: arithmaticReducer,
    posts: postsReducer,
    todo: todoSlice
});


const persistConfig = {
    key: 'root',
    version: 1,
    storage,

    // blacklisted reducers are not persisted
    //blacklist: ["arithmatic", "posts", 'todo'],// here `blacklist` items are the keys from rootReducer

    // only whitelisted reducers are persisted
    whitelist: ['todo']// here `whitelist` items are the keys from rootReducer

    // if no blacklisted and whitelisted then all the reducers(rootReducer) are persited by default
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);



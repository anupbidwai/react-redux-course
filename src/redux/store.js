import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postsSlice';
import arithmaticReducer from './slice/arithmaticSlice';
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

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    arithmatic: arithmaticReducer,
    posts: postsReducer
})

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

/* without persist */
/* 
export const store = configureStore({
    reducer: {
        arithmatic: arithmaticReducer,
        posts: postsReducer
    },
});
 */



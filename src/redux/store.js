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

    // blacklisted reducers are not persisted
    //blacklist: ['posts'],// here `post` is the key from rootReducer

    // only whitelited reducers are persisted
    whitelist: ['arithmatic']// here `post` is the key from rootReducer
};

const rootReducer = combineReducers({
    arithmatic: arithmaticReducer,
    posts: postsReducer
});

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



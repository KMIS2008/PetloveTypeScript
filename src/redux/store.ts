import { configureStore } from '@reduxjs/toolkit';
import {newsReducer} from './newsSlice';
import {noticesReducer} from './noticesSlice';
import { authReducer, AuthState} from "./auth/authSlice";
import {friendReducer} from './friendsSlice';
import {userReducer } from './userSlice';
import storage from 'redux-persist/lib/storage';

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


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthState >(authPersistConfig, authReducer),
    news: newsReducer,
    notices: noticesReducer,
    friends: friendReducer,
    user: userReducer,
  },
  
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    immutableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
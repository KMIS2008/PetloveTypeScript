import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './newsSlice';
import { noticesReducer } from './noticesSlice';
import { authReducer, AuthState } from "./auth/authSlice";
import { friendReducer } from './friendsSlice';
import { userReducer } from './userSlice';
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

export interface RootState {
  auth: AuthState;
  news: ReturnType<typeof newsReducer>;
  notices: ReturnType<typeof noticesReducer>;
  friends: ReturnType<typeof friendReducer>;
  user: ReturnType<typeof userReducer>;
}

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthState>(authPersistConfig, authReducer),
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

export type AppDispatch = typeof store.dispatch;
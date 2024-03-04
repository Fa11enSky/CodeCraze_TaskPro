import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { persistedBoardsReducer } from './boards/slice';
import { persistReducerAuth } from './auth/authSlice';
export const store = configureStore({
  reducer: {
    // boards: persistedBoardsReducer,
    auth: persistReducerAuth,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

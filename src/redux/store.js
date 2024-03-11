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

import { persistReducerAuth } from './auth/authSlice';
import { supportReducer } from './support/supportSlice';
import { boardsReducer } from './boards/boardsSlice';
import { filterReducer } from './boards/filterSlice';

export const store = configureStore({
  reducer: {
    auth: persistReducerAuth,
    boards: boardsReducer,
    support: supportReducer,
    filter: filterReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

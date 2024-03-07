import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const handleFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoggedIn = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, handleFulfilled)

      .addCase(logIn.fulfilled, handleFulfilled)

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

const authReducer = authSlice.reducer;
const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const persistReducerAuth = persistReducer(
  persistConfigAuth,
  authReducer
);

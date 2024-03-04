import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://codecraze-taskpro-backend.onrender.com/';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/auth/register', credentials);
      setToken(data.token);
      // toast.success('Registration was successful!');
      return data;
    } catch (e) {
      // toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/auth//login', credentials);
      setToken(data.token);
      // toast.success('Login successfully!');
      return data;
    } catch (e) {
      // toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (c_, thunkAPI) => {
  try {
    const { data } = await axios.post('api/auth/logout');
    clearToken();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistedToken);
      const { data } = await axios.get('api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

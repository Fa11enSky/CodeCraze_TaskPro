import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://codecraze-taskpro-backend.onrender.com/';

export const support = createAsyncThunk(
  'api/users/help',
  async ({ email, text }, thunkAPI) => {
    try {
      const { data } = await axios.post('api/users/help', {
        email,
        comment: text,
      });

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addColumn = createAsyncThunk(
  'column/create',
  async (credentials, thunkAPI) => {
    try {
      const [boardId, column] = credentials;
      const { data } = await axios.post(`/api/columns/${boardId}`, column);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'column/update',
  async (credentials, thunkAPI) => {
    const [id, column] = credentials;
    try {
      const { data } = axios.patch(`/api/columns/${id}`, column);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'column/delete',
  async (columnId, thunkAPI) => {
    try {
      await axios.delete(`/api/columns/${columnId}`);
      return columnId;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

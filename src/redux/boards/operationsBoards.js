import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchAllBoard = createAsyncThunk(
  'boards/all',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/boards');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!Отримати дошку по ід
export const fetchSingleBoard = createAsyncThunk(
  'boards/single',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/boards/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!створити дошку
export const createBoard = createAsyncThunk(
  'boards/create',
  /* Для створення дошки приймає на відправку обєкт 
        {
            "title": "Board title",
            "icon": "icon-project",
            "background": "background"
         }
  */
  async (board, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/boards', board);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! update board by id
// потрібно передати масив в якому буде ід дошки для оновлення і дані
// [id,{title,icon,background}]
export const updateBoard = createAsyncThunk(
  'boards/update',
  async (updateData, thunkAPI) => {
    try {
      const [id, board] = updateData;
      const { data } = await axios.patch(`/api/boards/${id}`, { ...board });
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// ! видалити дошку по ід.

export const deleteBoard = createAsyncThunk(
  'boards/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/boards/${id}`);
      return id;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

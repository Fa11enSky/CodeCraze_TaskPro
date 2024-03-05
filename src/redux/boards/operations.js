import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNewBoard = createAsyncThunk(
  'boards/add',
  async (board, thunkAPI) => {
    try {
      const { data } = await axios.post('??????/api/boards', board);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editBoardById = createAsyncThunk(
  'boards/edit',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `??????/api/boards/${boardData.boardId}`,
        boardData.body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

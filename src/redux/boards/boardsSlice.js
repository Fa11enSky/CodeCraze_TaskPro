import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addNewBoard, editBoardById } from './operations';

const initialState = {
  info: {},
  isLoading: false,
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addNewBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewBoard.fulfilled, (state, action) => {
        state.info.push(action.payload.data.board);
        state.isLoading = false;
      })
      .addCase(addNewBoard.rejected, state => {
        state.isLoading = false;
      })

      .addCase(editBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editBoardById.fulfilled, (state, action) => {
        const { _id: boardId } = action.payload.data.board;
        const index = state.info.findIndex(board => board._id === boardId);
        state.info.splice(index, 1, action.payload.data.board);
      })
      .addCase(editBoardById.rejected, state => {
        state.isLoading = false;
      }),
});

export const boardsReducer = allBoardsSlice.reducer;

const boardsPersistConfig = {
  key: 'boards',
  storage,
};

export const persistedBoardsReducer = persistReducer(
  boardsPersistConfig,
  boardsReducer
);

import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { addNewBoard, editBoardById } from './operations';
import {
  createBoard,
  deleteBoard,
  fetchAllBoard,
  fetchSingleBoard,
  updateBoard,
} from './operationsBoards';
import { addColumn, deleteColumn } from './operationsColumns';
import {
  createCard,
  deleteCard,
  replaceCard,
  updateCard,
} from './operationsCards';

const initialState = {
  boards: [],
  selectedBoard: {},
  isLoading: false,
  error: null,
};
const hadlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAllBoard.pending, hadlePending)
      .addCase(fetchAllBoard.fulfilled, (state, action) => {
        state.boards = [...action.payload];
      })
      .addCase(fetchAllBoard.rejected, (state, payload) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchSingleBoard.pending, hadlePending)
      .addCase(fetchSingleBoard.fulfilled, (state, action) => {
        state.selectedBoard = action.payload;
      })
      .addCase(fetchSingleBoard.rejected, handleError)
      .addCase(createBoard.pending, hadlePending)
      .addCase(createBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload);
      })
      .addCase(createBoard.rejected, handleError)
      .addCase(updateBoard.pending, hadlePending)
      .addCase(updateBoard.fulfilled, (state, action) => {
        const idx = state.boards.findIndex(el => el._id === action.payload._id);
        state.boards.splice(idx, 1, action.payload);
      })
      .addCase(updateBoard.rejected, handleError)
      .addCase(deleteBoard.pending, hadlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        const idx = state.boards.findIndex(el => el._id === action.payload);
        state.boards.splice(idx, 1);
      })
      .addCase(deleteBoard.rejected, handleError)
      .addCase(addColumn.pending, hadlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.selectedBoard.columns.push(action.payload);
      })
      .addCase(addColumn.rejected, handleError)
      .addCase(deleteColumn.pending, hadlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        const idx = state.selectedBoard.columns.findIndex(
          el => el._id === action.payload
        );
        if (idx === -1) return state;
        state.selectedBoard.columns.splice(idx, 1);
      })
      .addCase(deleteColumn.rejected, handleError)
      .addCase(createCard.pending, hadlePending)
      .addCase(createCard.fulfilled, (state, action) => {
        const { payload } = action;
        const idx = state.selectedBoard.columns.findIndex(
          el => el._id === payload.cardOwner
        );
        if (idx === -1) {
          return state;
        }
        state.selectedBoard.columns[idx].cards.push(payload);
      })
      .addCase(createCard.rejected, handleError)
      .addCase(updateCard.pending, hadlePending)
      .addCase(updateCard.fulfilled, (state, action) => {
        const { payload } = action;
        const columnToUpdate = state.selectedBoard.columns.findIndex(
          el => el._id === payload.cardOwner
        );
        if (columnToUpdate === -1) return state;
        const idxCard = state.selectedBoard.columns[
          columnToUpdate
        ].cards.findIndex(el => el._id === payload._id);
        if (idxCard === -1) return state;
        state.selectedBoard.columns[columnToUpdate].cards.splice(
          idxCard,
          1,
          payload
        );
      })
      .addCase(updateCard.rejected, handleError)
      .addCase(deleteCard.pending, hadlePending)
      .addCase(deleteCard.fulfilled, (state, action) => {
        const { payload } = action;
        // ! ______________________________________________
        state.selectedBoard.columns.forEach(column => {
          const cardIdx = column.cards.findIndex(card => card._id === payload);
          if (cardIdx !== -1) {
            column.cards.splice(cardIdx, 1);
          }
        });
      })
      .addCase(deleteCard.rejected, handleError)
      .addCase(replaceCard.pending, hadlePending)
      .addCase(replaceCard.fulfilled, (state, action) => {
        const {
          payload: { result },
        } = action;
        // remove old card
        console.log(result);
        state.selectedBoard.columns.forEach(column => {
          const cardIdx = column.cards.findIndex(
            card => card._id === result._id
          );
          if (cardIdx !== -1) {
            column.cards.splice(cardIdx, 1);
          }
        });
        // !___________________________________________________
        const columnToUpdate = state.selectedBoard.columns.findIndex(
          el => el._id === result.cardOwner
        );
        if (columnToUpdate === -1) return state;

        state.selectedBoard.columns[columnToUpdate].cards.push(result);
      })
      .addCase(replaceCard.rejected, handleError),
});

export const boardsReducer = allBoardsSlice.reducer;

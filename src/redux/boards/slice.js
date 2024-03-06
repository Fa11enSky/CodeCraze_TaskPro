// import { createSlice } from '@reduxjs/toolkit';
// import { addNewBoard } from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//   info: [],
//   isLoading: false,
// };

// export const allBoardsSlice = createSlice({
//   name: 'boards',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(addNewBoard.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addNewBoard.fulfilled, (state, action) => {
//         state.info.push(action.payload.data.board);
//         console.log(action.payload.data.board);
//         state.isLoading = false;
//       })
//       .addCase(addNewBoard.rejected, state => {
//         state.isLoading = false;
//       }),
// });

// export const boardsReducer = allBoardsSlice.reducer;

// const boardsPersistConfig = {
//   key: 'boards',
//   storage,
// };

// export const persistedBoardsReducer = persistReducer(
//   boardsPersistConfig,
//   boardsReducer
// );

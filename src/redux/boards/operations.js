import { createAsyncThunk } from '@reduxjs/toolkit';

// export const addNewBoard = createAsyncThunk(
//   'boards/add',
//   async (board, thunkAPI) => {
//     try {
//       const { data } = await ???.post(???'/api/boards', board);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code);
//     }
//   }
// );

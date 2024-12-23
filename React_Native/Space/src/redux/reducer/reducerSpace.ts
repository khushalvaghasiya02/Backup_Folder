/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import { get_space_api } from '../api/spaceApi';

const initialState = {
  isLoading: false,
  space: [],
  isError: false,
};

const spaceSlice = createSlice({
  name: 'space',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // Get data
      .addCase(get_space_api.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(get_space_api.fulfilled, (state, action) => {
        state.isLoading = false;
        state.space = action.payload.data;
      })
      .addCase(get_space_api.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default spaceSlice.reducer;

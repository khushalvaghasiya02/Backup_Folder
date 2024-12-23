import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../environment";

export const userRegister = createAsyncThunk(
  'register',
  async ({ payload }) => {
    try {
      const response = await axios.post(`${BASE_URL}/v1/user/register`, payload, {
        headers: {
          'Content-Type': 'application/json',
           // 'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response;
      } else {
        throw error;
      }
    }
  }
);

const dataValue = {
  isLoading: false,
  data: null,
  isError: false,
  errorMessage: '',
};

const userRegisterSlice = createSlice({
  name: 'register',
  initialState: dataValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data; 
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  }
});

export default userRegisterSlice.reducer;

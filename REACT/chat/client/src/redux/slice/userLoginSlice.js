import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../environment";

export const userLogin = createAsyncThunk("login", async ({ payload }) => {
    try {
        const response = await axios.post(`${BASE_URL}/v1/user/login`, payload, {
            headers: {
                "Content-Type": "application/json",
            }
        })        
        return response.data.data
    } catch (error) {
        if (error.response) {
            throw error.response
        } else {
            throw error
        }
    }
})

const dataValue = {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: '',
}
const userLoginSlice = createSlice({
    name: "login",
    initialState: dataValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true

            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.data
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isError = true
                state.errorMessage = action.error.message
                state.isLoading = false
            })
    }
})

export default userLoginSlice.reducer
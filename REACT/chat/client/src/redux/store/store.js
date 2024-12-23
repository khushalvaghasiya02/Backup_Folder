import { configureStore } from "@reduxjs/toolkit"
import userLoginSlice from "../slice/userLoginSlice"
import userRegisterSlice from "../slice/userRegisterSlice"
const store = configureStore({
    reducer: {
        userLogin: userLoginSlice,
        userRegister:userRegisterSlice
    }
})
export default store
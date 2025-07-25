
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: true,
    userData: null

}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            state.status = true
            state.userData = action.payload
        },

        logout: (state,action)=>{
            state.status = false
            state.userData = null
        }
    }
})

export default authSlice.reducer
export const {login, logout} = authSlice.actions
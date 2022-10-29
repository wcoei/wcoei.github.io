import { createSlice } from "@reduxjs/toolkit"

export interface initialAuthState {
    isAuthenticated: boolean, 
    info: { email: string, passwd: string}
  }

const initialState: initialAuthState = {
    isAuthenticated: false,
    info: { email: "", passwd: ""}
}

export const authSlice = createSlice({
    name: "authentication",
    initialState, 
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            state.info = action.payload
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export default authSlice
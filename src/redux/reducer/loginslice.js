import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "Login",
    initialState: [
        
    ],
    reducers: {
        add(state, action) {
            state.push = action.payload.push;
           


        },
        del(state,action) { },
    }

})
export const { add, del } = LoginSlice.actions;
export default LoginSlice.reducer;
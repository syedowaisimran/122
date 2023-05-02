import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
    name : "Sign",
    initialState: [],
    reducer: {
        add() {},
        del() {},
    }
    
})
export const{add,del} = SignupSlice.actions;
export default SignupSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"",
    pass:"",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginUser:(state, action)=>{
            const {email,pass} = action.payload;
            state.email = email;
            state.pass = pass;
        }
    }
})

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
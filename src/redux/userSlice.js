import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    color: 0,
};

export const userSlide = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        }
    }
})

export const {changeColor} = userSlide.actions;
//export const changeColor = userSlide.actions.changeColor; <-- este codigo es igual al de arriba
export default userSlide.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    color: 0,
    schedule: {
        profesional: "",
        service: "",
        idService: "",
        dateTime: ""
    }
};

export const userSlide = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
        fillSchedule: (state, action) => {
            Object.assign(state.schedule, action.payload);
        }
    }
})

export const {changeColor, fillSchedule} = userSlide.actions;
//export const changeColor = userSlide.actions.changeColor; <-- este codigo es igual al de arriba
export default userSlide.reducer;
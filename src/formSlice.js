import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
}
const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        setFrom: (state, action) =>{
            state.userList = [...state.userList, action.payload];
        }
    }
})

const {reducer, actions} = formSlice;

export const {setFrom} = actions;
export default reducer;
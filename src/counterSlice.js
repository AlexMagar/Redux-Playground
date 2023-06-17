import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    // const [counter, setCounter] = useSate(0);
    name:"counter",
    initialState:{
        counter: 90
    },
    reducers:{
        increment: (state, action) =>{
            // state.counter = action.payload;
            state.counter = state.counter + 1;
        },
        decrement: (state, action) =>{
            // state.counter = action.payload;
            state.counter = state.counter - 1;
        }
    }
})

const {reducer, actions} = counterSlice;
export const {increment, decrement} = actions;

export default reducer;
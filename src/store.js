import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

// configureStore() is a function, it receive an object and object has poperty called reducer
const store = configureStore({
    reducer:{
        counterData: counterReducer,
    },
});

export default store;
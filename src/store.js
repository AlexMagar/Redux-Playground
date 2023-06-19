import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import formReducer from './formSlice'

// configureStore() is a function, it receive an object and object has poperty called reducer
const store = configureStore({
    reducer:{
        counterData: counterReducer,
        formData: formReducer,
    },
});

export default store;
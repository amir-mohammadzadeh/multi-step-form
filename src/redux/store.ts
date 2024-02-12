import {  configureStore } from "@reduxjs/toolkit";
import  formReducer  from "./reducers/formReducer";
import stepReducer from "./reducers/stepReducer";

const store = configureStore({
    reducer:{
        formData: formReducer ,
        onStep: stepReducer
    }
    
})

export default store 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
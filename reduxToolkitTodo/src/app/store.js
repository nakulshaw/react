import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todoSlice.js";

export const store=configureStore({
    reducer: todoReducer
});
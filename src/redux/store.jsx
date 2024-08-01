import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSilcer";

export const store  =configureStore({
    reducer: {

        todo: todoReducer
    }
})
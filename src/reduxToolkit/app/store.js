import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice";

export const store = configureStore({
    reducer: {
        user: useReducer,
    }, // TODO add reducers here, or use the default one provided by redux toolkit.
});
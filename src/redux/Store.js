import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CartReducer from "./slices/CartSlice"


const store = configureStore({
    reducer : {
        cart : CartReducer
    }
});

export default store
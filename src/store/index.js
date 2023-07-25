import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./details-slice";


const store = configureStore({
    reducer:{ details: detailReducer}
})

export default store
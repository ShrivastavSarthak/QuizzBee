import { createSlice } from "@reduxjs/toolkit"





const initialState =  {
    Fname:null,
    Lname: null,
    Email: null
} 


const detailSlice = createSlice({
    name:'deltails',
    initialState:initialState,
    reducers:{
        setFname(state,action){
            state.Fname= action.payload
        },
        setLname(state,action){
            state.Lname= action.payload
        },
        setEmail(state,action){
            state.Email= action.payload
        }
    }
})


export const detailAction = detailSlice.actions

export default detailSlice.reducer
import {addPet, fetchUserFull, removePet, fetchUserEdit} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const userInfo ={
    pets:[],
    userFull:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.pets= action.payload.pets;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const userSlice = createSlice({
    name:'user',
    initialState: userInfo,
       
       extraReducers:
       builder=>{
        builder.addCase(addPet.pending, handlPending)
        .addCase(addPet.fulfilled, handlFulfilled)
        .addCase(addPet.rejected, handlReject)
        .addCase(removePet.pending, handlPending)
        .addCase(removePet.fulfilled, (state, action)=>{
            const removeItem = action.payload.pets.id;
            state.pets = state.pets.filter((id) => id !== removeItem);
            state.userFull= action.payload;
            state.isLoading = false;
            state.error = null;
         } )
        .addCase(removePet.rejected, handlReject)
        .addCase(fetchUserFull.pending, handlPending)
        .addCase(fetchUserFull.fulfilled, (state, action)=>{
            state.userFull= action.payload;
            state.isLoading = false;
            state.error = null;
         })
        .addCase(fetchUserFull.rejected, handlReject)
        .addCase(fetchUserEdit.fulfilled, (state, action) => {
            state.userFull = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;})
       }
})

export const userReducer = userSlice.reducer;
import {addPet, fetchUserFull, removePet, fetchUserEdit} from './operations';
import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';


export interface UserProps{
    pets:any,
    userFull:any,
    isLoading: boolean,
    error: boolean | null |string,
    token: string
}

const userInfo: UserProps={
    pets:[],
    userFull:[],
    isLoading: false,
    error: null, 
    token:""
}

const handlPending = (state:UserProps)=> {
    state.isLoading = true}

const handlFulfilled = (state:UserProps, action:PayloadAction<{pets:string[]}>)=>{
    state.pets= action.payload.pets;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state:UserProps, action: PayloadAction<unknown>)=>{
    state.isLoading = false;
    state.error = (action.payload as SerializedError)?.message || "An error occurred";
}

const userSlice = createSlice({
    name:'user',
    initialState: userInfo,
       reducers:{},

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
            state.isLoading = true;
        })
       }
})

export const userReducer = userSlice.reducer;
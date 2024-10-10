import {fetchFriends} from './operations';
import { createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';

export interface FriendsProps{
    workDays:string, 
    imageUrl:string, 
    title:string, 
    email:string, 
    address:string, 
    phone:string,
    _id:string
}

interface FreindProps{
    friends?: FriendsProps[],
    totalPages: null | string,
    isLoading: boolean,
    error: null | string,
}


const allFriends: FreindProps= {
    friends: [],
    totalPages: null,
    isLoading: false,
    error: null,
};

const handlPending = (state:FreindProps) => {
    state.isLoading = true;
};

const handlFulfilled = (state:FreindProps, action:PayloadAction<FriendsProps[]>)=>{
    state.friends = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state:FreindProps, action:PayloadAction<unknown>)=>{
    state.isLoading = false;
    state.error = (action.payload as SerializedError)?.message || "An error occurred";
}

const friendSlice = createSlice({
    name:'friends',
    initialState: allFriends,
    reducers:{},
       
       extraReducers:
       builder=>{
        builder.addCase(fetchFriends.pending, handlPending)
        .addCase(fetchFriends.fulfilled, handlFulfilled)
        .addCase(fetchFriends.rejected, handlReject)
       }
})

export const friendReducer = friendSlice.reducer;
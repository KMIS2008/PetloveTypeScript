import {fetchFriends} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const allFriends = {
    friends: [],
    totalPages: null,
    isLoading: false,
    error: null,
};

const handlPending = (state) => {
    state.isLoading = true;
};

const handlFulfilled = (state, action)=>{
    state.friends = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const friendSlice = createSlice({
    name:'friends',
    initialState: allFriends,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchFriends.pending, handlPending)
        .addCase(fetchFriends.fulfilled, handlFulfilled)
        .addCase(fetchFriends.rejected, handlReject)
       }
})

export const friendReducer = friendSlice.reducer;
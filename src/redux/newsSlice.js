import {fetchnews, fetchNewsByKeyword} from './operations';
import { createSlice} from '@reduxjs/toolkit';


const allNews ={
    news:[],
    totalPages: null,
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.news = action.payload.results;
    state.isLoading = false;
    state.error = null;
    state.totalPages = action.payload.totalPages;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const newsSlice = createSlice({
    name:'news',
    initialState: allNews,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchnews.pending, handlPending)
        .addCase(fetchnews.fulfilled, handlFulfilled)
        .addCase(fetchnews.rejected, handlReject)
        .addCase(fetchNewsByKeyword.fulfilled, handlFulfilled)
        .addCase(fetchNewsByKeyword.pending, handlPending)
        .addCase(fetchNewsByKeyword.rejected, handlReject)
       }
})

export const newsReducer = newsSlice.reducer;
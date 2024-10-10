import {fetchnews, fetchNewsByKeyword} from './operations';
import { createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';

interface NewsProps{
    news:any,
    totalPages: number,
    isLoading: boolean,
    error: null | string, 
}
const allNews:NewsProps ={
    news:[],
    totalPages: 1,
    isLoading: false,
    error: null, 
}

const handlPending = (state:NewsProps)=> {
    state.isLoading = true}

const handlFulfilled = (state:NewsProps, action: PayloadAction<{results:string[], totalPages:number}>)=>{
    state.news = action.payload.results;
    state.isLoading = false;
    state.error = null;
    state.totalPages = action.payload.totalPages;
 }

const handlReject =(state:NewsProps, action:PayloadAction<unknown>)=>{
    state.isLoading = false;
    state.error = (action.payload as SerializedError)?.message || "An error occurred";
}

const newsSlice = createSlice({
    name:'news',
    initialState: allNews,
    reducers:{},
       
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
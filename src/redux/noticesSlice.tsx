import {fetchnotices, fetchnoticesByKeyword, addNotices, removeNotices, fetchNoticesId, getNoticesFilter} from './operations';
import { createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';

export interface NoticeProps{
    imgURL:string,
    title:string, 
    popularity:string, 
    comment:string, 
    name:string, 
    birthday:string, 
    species:string, 
    category:string, 
    sex:string, 
    _id:string
}

interface NoticesProps{
    notices?:NoticeProps[],
    noticeId:any,
    isFavorite: any,
    totalPages: number | null,
    isLoading: boolean,
    error: null | string, 
}


const allNotices:NoticesProps ={
    notices:[],
    noticeId:[],
    isFavorite: [],
    totalPages: null ,
    isLoading: false,
    error: null, 
}

const handlPending = (state:NoticesProps)=> {
    state.isLoading = true}

const handlFulfilled = (state:NoticesProps, action: PayloadAction<{results:NoticeProps[], totalPages:number}>)=>{
    state.notices = action.payload.results;
    state.isLoading = false;
    state.error = null;
    state.totalPages = action.payload.totalPages;
 }

const handlReject =(state:NoticesProps, action:PayloadAction<unknown>)=>{
    state.isLoading = false;
    state.error = (action.payload as SerializedError)?.message || "An error occurred";
}

const noticesSlice = createSlice({
    name:'notices',
    initialState: allNotices,
    reducers:{},
       
       extraReducers:
       builder=>{
        builder.addCase(fetchnotices.pending, handlPending)
        .addCase(fetchnotices.fulfilled, handlFulfilled)
        .addCase(fetchnotices.rejected, handlReject)
        .addCase(fetchnoticesByKeyword.pending, handlPending)
        .addCase(fetchnoticesByKeyword.fulfilled, handlFulfilled)
        .addCase(fetchnoticesByKeyword.rejected, handlReject)
        .addCase(fetchNoticesId.pending, handlPending)
        .addCase(fetchNoticesId.fulfilled, (state:NoticesProps,action:PayloadAction<string[]>) => {
            state.noticeId = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchNoticesId.rejected, handlReject)
        .addCase(addNotices.pending, handlPending)
        .addCase(addNotices.fulfilled, (state:NoticesProps,action:PayloadAction<string>) => {
            const newItem = action.payload;
            state.isFavorite!.push(newItem);
            state.isLoading = false;
            state.error = null;
          })
        .addCase(addNotices.rejected, handlReject)
        .addCase(removeNotices.pending, handlPending)
        .addCase(removeNotices.fulfilled, (state:NoticesProps, action:PayloadAction<string>) => {
            const removeItem = action.payload; 
            state.isFavorite = state.isFavorite!.filter((id:string) => id !== removeItem);
            state.isLoading = false;
            state.error = null;
          })
        .addCase(removeNotices.rejected, handlReject)
        .addCase(getNoticesFilter.pending, handlPending)
        .addCase(getNoticesFilter.fulfilled, handlFulfilled)
        .addCase(getNoticesFilter.rejected, handlReject)
       }
})

export const noticesReducer = noticesSlice.reducer;

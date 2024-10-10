import { fetchnews, fetchNewsByKeyword } from './operations';
import { createSlice } from '@reduxjs/toolkit';
const allNews = {
    news: [],
    totalPages: 1,
    isLoading: false,
    error: null,
};
const handlPending = (state) => {
    state.isLoading = true;
};
const handlFulfilled = (state, action) => {
    state.news = action.payload.results;
    state.isLoading = false;
    state.error = null;
    state.totalPages = action.payload.totalPages;
};
const handlReject = (state, action) => {
    var _a;
    state.isLoading = false;
    state.error = ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.message) || "An error occurred";
};
const newsSlice = createSlice({
    name: 'news',
    initialState: allNews,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchnews.pending, handlPending)
            .addCase(fetchnews.fulfilled, handlFulfilled)
            .addCase(fetchnews.rejected, handlReject)
            .addCase(fetchNewsByKeyword.fulfilled, handlFulfilled)
            .addCase(fetchNewsByKeyword.pending, handlPending)
            .addCase(fetchNewsByKeyword.rejected, handlReject);
    }
});
export const newsReducer = newsSlice.reducer;
//# sourceMappingURL=newsSlice.js.map
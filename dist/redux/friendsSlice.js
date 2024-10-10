import { fetchFriends } from './operations';
import { createSlice } from '@reduxjs/toolkit';
const allFriends = {
    friends: [],
    totalPages: null,
    isLoading: false,
    error: null,
};
const handlPending = (state) => {
    state.isLoading = true;
};
const handlFulfilled = (state, action) => {
    state.friends = action.payload;
    state.isLoading = false;
    state.error = null;
};
const handlReject = (state, action) => {
    var _a;
    state.isLoading = false;
    state.error = ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.message) || "An error occurred";
};
const friendSlice = createSlice({
    name: 'friends',
    initialState: allFriends,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchFriends.pending, handlPending)
            .addCase(fetchFriends.fulfilled, handlFulfilled)
            .addCase(fetchFriends.rejected, handlReject);
    }
});
export const friendReducer = friendSlice.reducer;
//# sourceMappingURL=friendsSlice.js.map
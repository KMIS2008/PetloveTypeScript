import { createSlice } from '@reduxjs/toolkit';
import { registr, logIn, logOut, refreshUser, fetchUserEdit } from './operations';
const initialState = {
    user: { name: null,
        email: null,
        phone: null,
        avatar: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(registr.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    }).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    }).addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    }).addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    }).addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
    }).addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
    })
        .addCase(fetchUserEdit.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
});
export const authReducer = authSlice.reducer;
//# sourceMappingURL=authSlice.js.map
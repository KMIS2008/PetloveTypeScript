import { addPet, fetchUserFull, removePet, fetchUserEdit } from './operations';
import { createSlice } from '@reduxjs/toolkit';
const userInfo = {
    pets: [],
    userFull: [],
    isLoading: false,
    error: null,
    token: ""
};
const handlPending = (state) => {
    state.isLoading = true;
};
const handlFulfilled = (state, action) => {
    state.pets = action.payload.pets;
    state.isLoading = false;
    state.error = null;
};
const handlReject = (state, action) => {
    var _a;
    state.isLoading = false;
    state.error = ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.message) || "An error occurred";
};
const userSlice = createSlice({
    name: 'user',
    initialState: userInfo,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addPet.pending, handlPending)
            .addCase(addPet.fulfilled, handlFulfilled)
            .addCase(addPet.rejected, handlReject)
            .addCase(removePet.pending, handlPending)
            .addCase(removePet.fulfilled, (state, action) => {
            const removeItem = action.payload.pets.id;
            state.pets = state.pets.filter((id) => id !== removeItem);
            state.userFull = action.payload;
            state.isLoading = false;
            state.error = null;
        })
            .addCase(removePet.rejected, handlReject)
            .addCase(fetchUserFull.pending, handlPending)
            .addCase(fetchUserFull.fulfilled, (state, action) => {
            state.userFull = action.payload;
            state.isLoading = false;
            state.error = null;
        })
            .addCase(fetchUserFull.rejected, handlReject)
            .addCase(fetchUserEdit.fulfilled, (state, action) => {
            state.userFull = action.payload;
            state.token = action.payload.token;
            state.isLoading = true;
        });
    }
});
export const userReducer = userSlice.reducer;
//# sourceMappingURL=userSlice.js.map
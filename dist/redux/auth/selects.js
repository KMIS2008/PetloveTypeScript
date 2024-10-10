export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => { var _a; return (_a = state.auth.isRefreshing) !== null && _a !== void 0 ? _a : false; };
export const selectToken = (state) => state.auth.token;
//# sourceMappingURL=selects.js.map
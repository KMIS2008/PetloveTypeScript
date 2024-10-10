import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Contater } from './AppLayout.styled';
const AppLayout = () => {
    return (_jsxs(Contater, { children: [_jsx(AppBar, {}), _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Outlet, {}) })] }));
};
export default AppLayout;
//# sourceMappingURL=AppLayout.js.map
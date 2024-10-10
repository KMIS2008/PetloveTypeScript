import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/hook/useAuth';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? _jsx(Navigate, { to: redirectTo }) : Component;
};
//# sourceMappingURL=PrivateRoute.js.map
import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from '../redux/hook/useAuth';
import { Navigate } from 'react-router-dom';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? _jsx(Navigate, { to: redirectTo }) : Component;
};
//# sourceMappingURL=RestrictedRoute.js.map
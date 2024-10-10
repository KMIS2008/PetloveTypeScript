import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../redux/hook/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import AppLayout from './AppLayout/AppLayout';
import { lazy, Suspense } from 'react';
const Main = lazy(() => import('../Pages/Main/Main'));
const Home = lazy(() => import('../Pages/Home/Home'));
const Registr = lazy(() => import('../Pages/Registr/Registr'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const News = lazy(() => import('../Pages/News/News'));
const Notices = lazy(() => import('../Pages/Notices/Notices'));
const AddPet = lazy(() => import('../Pages/AddPet/AddPet.js'));
const FriendPage = lazy(() => import('../Pages/Friends/Friends'));
const ErrorPage = lazy(() => import('../Pages/ErrorPage/ErrorPage'));
const useAppDispatch = useDispatch;
export const App = () => {
    const dispatch = useAppDispatch();
    const { isRefreshing } = useAuth();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return isRefreshing ? (_jsx(Audio, { height: "80", width: "80", color: "green", ariaLabel: "loading", wrapperStyle: {}, wrapperClass: "" })) : (_jsxs("div", { children: [_jsx(Suspense, { fallback: _jsx(Audio, { height: "80", width: "80", color: "green", ariaLabel: "loading", wrapperStyle: {}, wrapperClass: "" }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsxs(Route, { path: "/", element: _jsx(AppLayout, {}), children: [_jsx(Route, { path: "home", element: _jsx(Home, {}) }), _jsx(Route, { path: "register", element: _jsx(RestrictedRoute, { redirectTo: "/profile", component: _jsx(Registr, {}) }) }), _jsx(Route, { path: "login", element: _jsx(RestrictedRoute, { redirectTo: "/profile", component: _jsx(Login, {}) }) }), _jsx(Route, { path: "news", element: _jsx(News, {}) }), _jsx(Route, { path: "notices", element: _jsx(Notices, {}) }), _jsx(Route, { path: "add-pet", element: _jsx(PrivateRoute, { redirectTo: "/login", component: _jsx(AddPet, {}) }) }), _jsx(Route, { path: "friends", element: _jsx(FriendPage, {}) }), _jsx(Route, { path: "profile", element: _jsx(PrivateRoute, { redirectTo: "/login", component: _jsx(Profile, {}) }) }), _jsx(Route, { path: "*", element: _jsx(ErrorPage, {}) })] })] }) }), _jsx(GlobalStyle, {})] }));
};
//# sourceMappingURL=App.js.map
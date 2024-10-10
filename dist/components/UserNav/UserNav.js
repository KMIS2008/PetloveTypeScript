import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContainerLogout } from './UserNav.styled';
import { UserBar } from '../UserBar/UserBar';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
export const UserNav = ({ isOpen = false, onClose = () => { }, isFromBurgerMenu = false, $isHome = false }) => {
    return (_jsxs(ContainerLogout, { children: [_jsx(LogOutBtn, { isOpen: isOpen, onClose: onClose }), !isFromBurgerMenu && _jsx(UserBar, {})] }));
};
//# sourceMappingURL=UserNav.js.map
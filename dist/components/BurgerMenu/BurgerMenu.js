import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import sprite from '../../images/sprite.svg';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { BurgerMenuContainer, CloseIcon } from './BurgerMenu.styled';
import { useLocation } from 'react-router-dom';
import { useAuth } from "../../redux/hook/useAuth";
import { UserNav } from '../UserNav/UserNav';
export const BurgerMenu = ({ onClose }) => {
    const location = useLocation();
    const isHome = location.pathname === '/home';
    const { isLoggedIn } = useAuth();
    return (_jsxs(BurgerMenuContainer, { "$isHome": isHome, children: [isHome ?
                (_jsx(CloseIcon, { onClick: onClose, children: _jsx("use", { xlinkHref: sprite + '#icon-x' }) }))
                :
                    (_jsx(CloseIcon, { onClick: onClose, children: _jsx("use", { xlinkHref: sprite + '#icon-x-1' }) })), _jsx(Nav, { grid: true, isOpen: true, onClose: onClose }), isLoggedIn && _jsx(UserNav, { isOpen: true, onClose: onClose, isFromBurgerMenu: true }), !isLoggedIn && _jsx(AuthNav, { grid: true, isOpen: true, onClose: onClose })] }));
};
//# sourceMappingURL=BurgerMenu.js.map
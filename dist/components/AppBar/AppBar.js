import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AuthNav } from "../AuthNav/AuthNav";
import { Logo } from "../Logo/Logo";
import { UserNav } from "../UserNav/UserNav";
import { useAuth } from "../../redux/hook/useAuth";
import { Header, ContainerNav, Svg } from "./AppBarstyled";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import { Nav } from '../Nav/Nav.js';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { UserBar } from "../UserBar/UserBar";
export function AppBar() {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    const isHome = location.pathname === '/home';
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setisTablet] = useState(window.innerWidth < 1280);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setisTablet(window.innerWidth < 1280);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (_jsxs(Header, { "$isHome": isHome, children: [_jsx(Logo, {}), !isTablet && _jsx(Nav, { isHome: isHome }), _jsxs(ContainerNav, { children: [!isMobile && isLoggedIn && _jsx(UserNav, { "$isHome": isHome }), isMobile && isLoggedIn && _jsx(UserBar, {}), !isMobile && !isLoggedIn && _jsx(AuthNav, { "$isHome": isHome }), isTablet && _jsx(Svg, { onClick: handleOpen, children: _jsx("use", { xlinkHref: sprite + (isHome ? '#icon-menu-01' : '#icon-menu-2') }) })] }), isOpen && isTablet && _jsx(BurgerMenu, { onClose: handleOpen })] }));
}
//# sourceMappingURL=AppBar.js.map
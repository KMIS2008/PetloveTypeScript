import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from './UserBar.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../images/user.png';
import { useEffect, useState } from 'react';
export const UserBar = () => {
    var _a;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const user = useSelector((state) => state.auth.user);
    const userName = user ? user.name : '';
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (_jsxs(Container, { children: [_jsx(Link, { to: "/profile", children: _jsx("img", { src: (_a = user.avatar) !== null && _a !== void 0 ? _a : defaultAvatar, alt: "User Avatar" }) }), !isMobile && user && _jsx("p", { children: userName })] }));
};
//# sourceMappingURL=UserBar.js.map
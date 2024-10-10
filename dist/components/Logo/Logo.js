import { jsx as _jsx } from "react/jsx-runtime";
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import { Svg } from './Logostyled';
import { useLocation } from 'react-router-dom';
export const Logo = () => {
    const location = useLocation();
    const isHome = location.pathname === '/home';
    return (_jsx("nav", { children: _jsx(NavLink, { to: "/home", children: isHome ?
                _jsx(Svg, { children: _jsx("use", { xlinkHref: sprite + '#icon-logo-2' }) })
                :
                    _jsx(Svg, { children: _jsx("use", { xlinkHref: sprite + '#icon-logo-1' }) }) }) }));
};
//# sourceMappingURL=Logo.js.map
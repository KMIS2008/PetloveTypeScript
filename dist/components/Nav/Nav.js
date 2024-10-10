import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Button, Container } from './Navstyled';
export const Nav = ({ onClose = () => { }, isOpen, grid, isHome,
// isStyle
 }) => {
    const navigator = useNavigate();
    const handleNewsClick = () => {
        navigator('news');
        if (isOpen) {
            onClose();
        }
    };
    const handdleNoticesClick = () => {
        navigator('notices');
        if (isOpen) {
            onClose();
        }
    };
    const handleFriendsClick = () => {
        navigator('friends');
        if (isOpen) {
            onClose();
        }
    };
    return (_jsxs(Container, { "$grid": grid, children: [_jsx(Button, { "$isHome": isHome, type: 'button', onClick: handleNewsClick, children: "News" }), _jsx(Button, { "$isHome": isHome, type: 'button', onClick: handdleNoticesClick, children: "Find pet" }), _jsx(Button, { "$isHome": isHome, type: 'button', onClick: handleFriendsClick, children: "Our friends" })] }));
};
//# sourceMappingURL=Nav.js.map
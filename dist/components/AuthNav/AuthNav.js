import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContainerButton, ButtonLogin, ButtonRegistration } from "./AuthNavstyled";
import { useNavigate } from 'react-router-dom';
export const AuthNav = ({ $isHome, onClose = () => { }, isOpen, grid }) => {
    const navigator = useNavigate();
    const handleLoginClick = () => {
        navigator('/login');
        if (isOpen) {
            onClose();
        }
    };
    const handleRegisterClick = () => {
        navigator('/register');
        if (isOpen) {
            onClose();
        }
    };
    return (_jsx("div", { children: _jsxs(ContainerButton, { "$grid": grid, children: [_jsx(ButtonLogin, { "$isHome": $isHome, type: 'button', onClick: handleLoginClick, children: "Login" }), _jsx(ButtonRegistration, { type: 'button', onClick: handleRegisterClick, children: "Registration" })] }) }));
};
//# sourceMappingURL=AuthNav.js.map
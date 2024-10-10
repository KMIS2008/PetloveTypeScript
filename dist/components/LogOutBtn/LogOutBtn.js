import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonLogout } from './LogOutBtn.styled';
import { useState } from 'react';
import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
export const LogOutBtn = ({ isOpen = false, onClose = () => { } }) => {
    const [isOpenModalApproveAction, setOpenModalApproveAction] = useState(false);
    const handleOpen = () => {
        setOpenModalApproveAction(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx(ButtonLogout, { type: "button", onClick: handleOpen, children: "Logout" }), _jsx(ModalApproveAction, { isOpenModalApproveAction: isOpenModalApproveAction, isOpen: isOpen, onClose: onClose, setOpenModalApproveAction: setOpenModalApproveAction })] }));
};
//# sourceMappingURL=LogOutBtn.js.map
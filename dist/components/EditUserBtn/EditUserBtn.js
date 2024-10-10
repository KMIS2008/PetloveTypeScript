import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { Container, ContainerButton, ButtonUser, Svg, ContainerSvg, SvgEdit } from './EditUserBtn.styled';
import { ModalEditUser } from '../ModalEditUser/ModalEditUser';
export const EditUserBtn = () => {
    const [isModalEditUser, setModalEditUser] = useState(false);
    const handleModalEditUser = () => {
        setModalEditUser(true);
    };
    return (_jsxs(Container, { children: [_jsxs(ContainerButton, { children: [_jsx(ButtonUser, { type: "button", onClick: handleModalEditUser, children: "User" }), _jsx(Svg, { children: _jsx("use", { xlinkHref: sprite + '#icon-user2' }) })] }), _jsx(ContainerSvg, { children: _jsx(SvgEdit, { width: 18, height: 18, onClick: handleModalEditUser, children: _jsx("use", { xlinkHref: sprite + '#icon-edit' }) }) }), _jsx(ModalEditUser, { isModalEditUser: isModalEditUser, setModalEditUser: setModalEditUser })] }));
};
//# sourceMappingURL=EditUserBtn.js.map
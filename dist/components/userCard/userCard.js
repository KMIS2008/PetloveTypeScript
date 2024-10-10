import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditUserBtn } from '../EditUserBtn/EditUserBtn';
import { UserBlock } from '../UserBlock/UserBlock';
import { PetsBlock } from '../PetsBlock/PetsBlock';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { Container } from './userCard.styled';
export const UserCard = () => {
    return (_jsxs(Container, { children: [_jsx(EditUserBtn, {}), _jsx(UserBlock, {}), _jsx(PetsBlock, {}), _jsx(LogOutBtn, {})] }));
};
//# sourceMappingURL=userCard.js.map
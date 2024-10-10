import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Container, Title, Button } from './AddPet.styled';
export const AddPet = () => {
    const navigate = useNavigate();
    const handleAddPeet = () => {
        navigate('/add-pet');
    };
    return (_jsxs(Container, { children: [_jsx(Title, { children: "My pets" }), _jsx(Button, { type: "button", onClick: handleAddPeet, children: " Add pet +" })] }));
};
//# sourceMappingURL=AddPet.js.map
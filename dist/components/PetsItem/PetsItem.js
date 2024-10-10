import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import sprite from '../../images/sprite.svg';
import { Container, Img, ContainerInfo, ContainerTitle, Title, DeleteButton, ContainerTable, TitleTable, TextTable, } from './PetsItem.styled';
import { removePet } from '../../redux/operations';
import { useDispatch } from 'react-redux';
const useAppDispatch = useDispatch;
export const PetsItem = ({ pet }) => {
    const { imgURL, title, name, birthday, sex, species, _id } = pet;
    const dispatch = useAppDispatch();
    const handleDelete = (_id) => {
        dispatch(removePet(_id));
    };
    return (_jsxs(Container, { children: [_jsx(Img, { src: imgURL, alt: title }), _jsxs(ContainerInfo, { children: [_jsxs(ContainerTitle, { children: [_jsx(Title, { children: title }), _jsx(DeleteButton, { type: 'button', onClick: () => handleDelete(_id), children: _jsx("svg", { width: 16, height: 16, children: _jsx("use", { xlinkHref: sprite + '#icon-trash-2' }) }) })] }), _jsxs(ContainerTable, { children: [_jsxs("div", { children: [_jsx(TitleTable, { children: "Name" }), _jsx(TextTable, { children: name })] }), _jsxs("div", { children: [_jsx(TitleTable, { children: "Birthday" }), _jsx(TextTable, { children: birthday })] }), _jsxs("div", { children: [_jsx(TitleTable, { children: "Sex" }), _jsx(TextTable, { children: sex })] }), _jsxs("div", { children: [_jsx(TitleTable, { children: "Species" }), _jsx(TextTable, { children: species })] })] })] })] }));
};
//# sourceMappingURL=PetsItem.js.map
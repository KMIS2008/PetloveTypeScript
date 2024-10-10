import { jsx as _jsx } from "react/jsx-runtime";
import { PetsItem } from "../PetsItem/PetsItem";
import { Container } from './PetsList.styled';
import { selectorUserFull } from '../../redux/selects';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserFull } from '../../redux/operations';
const useAppDispatch = useDispatch;
export const PetsList = () => {
    const userFull = useSelector(selectorUserFull);
    const pets = userFull.pets;
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserFull());
    }, [dispatch]);
    return (_jsx(Container, { children: pets === null || pets === void 0 ? void 0 : pets.map(pet => (_jsx(PetsItem, { pet: pet }, pet._id))) }));
};
//# sourceMappingURL=PetsList.js.map
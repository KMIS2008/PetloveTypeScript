import { PetsItem } from "components/PetsItem/PetsItem";
import {Container} from './PetsList.styled';

import {selectorUserFull} from '../../redux/selects';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserFull } from 'redux/operations';


export const PetsList=()=>{
    const userFull=useSelector(selectorUserFull);
    const pets=userFull.pets;

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchUserFull())
      }, [dispatch])

    return(
        <Container>
            {pets?.map(pet=>(
                <PetsItem key={pet._id} pet={pet}/>
            ))}
        </Container>
    )
}
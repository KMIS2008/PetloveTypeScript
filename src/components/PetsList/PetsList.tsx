import { PetsItem } from "../PetsItem/PetsItem";
import {Container} from './PetsList.styled';
import {selectorUserFull} from '../../redux/selects';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserFull } from '../../redux/operations';
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";


const useAppDispatch:()=>AppDispatch=useDispatch;

interface PetProps{
    imgURL:string, 
    title:string, 
    name:string, 
    birthday:string, 
    sex:string, 
    species:string, 
    _id:string
}


export const PetsList=()=>{
    const userFull=useSelector<RootState, { pets: PetProps[] }>(selectorUserFull);
    const pets=userFull.pets;

    const dispatch=useAppDispatch();

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
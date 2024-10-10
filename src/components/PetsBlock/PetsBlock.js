import {AddPet} from '../AddPet/AddPet';
import { PetsList } from "components/PetsList/PetsList";

export const PetsBlock=()=>{
    return(
        <>
          <AddPet/>
          <PetsList/>
        </>
    )
}
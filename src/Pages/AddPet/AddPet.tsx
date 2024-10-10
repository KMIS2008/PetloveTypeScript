import {PetBlock} from '../../components/PetBlock/PetBlock';
import DogAddMobile1 from '../../images/DogAddMobile1.jpg';
import DogAddMobile2 from '../../images/DogAddMobile2.jpg';
import DogAddMobile3 from '../../images/DogAddMobile3.jpg';
import DogAddTablet1 from '../../images/DogAddTablet1.jpg';
import DogAddTablet2 from '../../images/DogAddTablet2.jpg';
import DogAddTablet3 from '../../images/DogAddTablet3.jpg';
import DogAddDesctop1 from '../../images/DogAddDesctop1.jpg';
import DogAddDesctop2 from '../../images/DogAddDesctop2.jpg';
import DogAddDesctop3 from '../../images/DogAddDesctop3.jpg';

import {Container,  } from './AddPet.styled';
import { AddPetForm } from '../../components/AddPetForm/AddPetForm';

export default function AddPet (){

    return(
        <Container>
            <PetBlock 
                      imgDesctop1={DogAddDesctop1}
                      imgDesctop2={DogAddDesctop2}
                      imgDesctop3={DogAddDesctop3}
                      imgTablet1={DogAddTablet1}
                      imgTablet2={DogAddTablet2}
                      imgTablet3={DogAddTablet3}
                      imgMobile1={DogAddMobile1} 
                      imgMobile2={DogAddMobile2} 
                      imgMobile3={DogAddMobile3}
                      />
            <AddPetForm/>
        </Container>
    )
}
import {EditUserBtn} from '../EditUserBtn/EditUserBtn';
import {UserBlock} from '../UserBlock/UserBlock';
import { PetsBlock } from '../PetsBlock/PetsBlock';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import {Container} from './userCard.styled';

export const UserCard=()=>{
    return (
        <Container>
           <EditUserBtn/>
           <UserBlock/>
           <PetsBlock/>
           <LogOutBtn/>
        </Container>
    )
}
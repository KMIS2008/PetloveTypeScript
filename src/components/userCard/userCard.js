import {EditUserBtn} from '../EditUserBtn/EditUserBtn';
import {UserBlock} from '../UserBlock/UserBlock';
import { PetsBlock } from 'components/PetsBlock/PetsBlock';
import { LogOutBtn } from 'components/LogOutBtn/LogOutBtn';
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
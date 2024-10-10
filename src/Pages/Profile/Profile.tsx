import {UserCard} from '../../components/userCard/userCard';
import {Container} from './Profile.styled';
import {MyNotices} from '../../components/MyNotices/MyNotices';


export default function Profile(){

    return(
        <Container>
           <UserCard/>
           <MyNotices/>
        </Container>
    )
}
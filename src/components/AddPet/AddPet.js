import { useNavigate } from 'react-router-dom';
import {Container, Title, Button} from './AddPet.styled';

export const AddPet=()=>{

    const navigate = useNavigate();

    const handleAddPeet=()=>{
        navigate('/add-pet');
    }

    return(
        <Container>
            <Title>My pets</Title>
            <Button type="button" onClick={handleAddPeet}> Add pet +</Button>
        </Container>
    )
}
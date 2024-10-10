import sprite from '../../images/sprite.svg';
import {Container, Img, ContainerInfo, ContainerTitle, Title, DeleteButton, ContainerTable, TitleTable,
        TextTable,} from './PetsItem.styled';
import {removePet} from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

const useAppDispatch:()=>AppDispatch=useDispatch;

export const PetsItem =({pet})=>{
    const {imgURL, title, name, birthday, sex, species, _id }=pet;
    const dispatch=useAppDispatch();
    const handleDelete=(_id:string)=>{
        dispatch(removePet(_id))
    }

    return(
        <Container>
            <Img src={imgURL} alt={title}/>
            <ContainerInfo>
                <ContainerTitle>
                    <Title>{title}</Title>
                    <DeleteButton type='button' onClick={()=>handleDelete(_id)}>
                        <svg width={16} height={16}>
                            <use xlinkHref={sprite + '#icon-trash-2'}/>
                        </svg>
                    </DeleteButton>
                </ContainerTitle>
               
               <ContainerTable>
                   <div>
                        <TitleTable>Name</TitleTable>
                        <TextTable>{name}</TextTable>
                   </div>
                   <div>
                        <TitleTable>Birthday</TitleTable>
                        <TextTable>{birthday}</TextTable>
                   </div>
                   <div>
                        <TitleTable>Sex</TitleTable>
                        <TextTable>{sex}</TextTable>
                   </div>
                   <div>
                        <TitleTable>Species</TitleTable>
                        <TextTable>{species}</TextTable>
                   </div>
         
               </ContainerTable>
            </ContainerInfo>
        </Container>
    )
}

import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {Container, ContainerButton, ButtonUser, Svg, ContainerSvg, SvgEdit} from './EditUserBtn.styled';
import {ModalEditUser} from '../ModalEditUser/ModalEditUser';


export const EditUserBtn=()=>{
    const [isModalEditUser,setModalEditUser]=useState(false);

    const handleModalEditUser =()=>{
        setModalEditUser(true)
    }
    return(
        <Container>
            <ContainerButton>
                 <ButtonUser type="button" onClick={handleModalEditUser}>User</ButtonUser>
                 <Svg>
                    <use xlinkHref={sprite + '#icon-user2'}/>
                 </Svg>                 
            </ContainerButton>
            <ContainerSvg>
                 <SvgEdit width={18} height={18} onClick={handleModalEditUser}>
                    <use xlinkHref={sprite + '#icon-edit'}/>
                 </SvgEdit>
            </ContainerSvg>
            
            <ModalEditUser isModalEditUser={isModalEditUser} setModalEditUser={setModalEditUser}/>
        </Container>
    )
}

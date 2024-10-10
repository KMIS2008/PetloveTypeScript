import {ButtonLogout} from './LogOutBtn.styled';
import { useState } from 'react';
import{ModalApproveAction} from '../ModalApproveAction/ModalApproveAction';


export const LogOutBtn=({isOpen = false, onClose = () => {}})=>{
    const [isOpenModalApproveAction, setOpenModalApproveAction] = useState(false);

    const handleOpen =()=>{
         setOpenModalApproveAction (true)
    }

    return(
        <>
        <ButtonLogout type="button" onClick={handleOpen}>Logout</ButtonLogout>
        <ModalApproveAction isOpenModalApproveAction={isOpenModalApproveAction} isOpen ={isOpen} onClose={onClose} setOpenModalApproveAction={setOpenModalApproveAction}/>
        </>
    )
}

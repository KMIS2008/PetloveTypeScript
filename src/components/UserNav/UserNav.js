import {  ContainerLogout } from './UserNav.styled';

import {UserBar} from '../UserBar/UserBar';
import {LogOutBtn} from '../LogOutBtn/LogOutBtn';


export const UserNav=({isOpen = false, onClose = () => {}, isFromBurgerMenu = false } )=>{

return (
    <ContainerLogout>  
      <LogOutBtn isOpen={isOpen} onClose={onClose}/>
      {!isFromBurgerMenu && <UserBar />}
    </ContainerLogout>
)
}
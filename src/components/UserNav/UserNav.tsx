import {  ContainerLogout } from './UserNav.styled';
import React from 'react';

import {UserBar} from '../UserBar/UserBar';
import {LogOutBtn} from '../LogOutBtn/LogOutBtn';

interface UserNavProps{
  isOpen?:boolean | false;
  onClose?: () => void; 
  isFromBurgerMenu?:boolean;
  $isHome?:boolean;
}


export const UserNav:React.FC<UserNavProps>=({isOpen = false, onClose = () => {}, isFromBurgerMenu = false, $isHome=false } )=>{

return (
    <ContainerLogout>  
      <LogOutBtn isOpen={isOpen} onClose={onClose}/>
      {!isFromBurgerMenu && <UserBar />}
    </ContainerLogout>
)
}
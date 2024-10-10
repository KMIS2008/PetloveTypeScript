import React from "react";
import sprite from '../../images/sprite.svg';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { BurgerMenuContainer, CloseIcon} from './BurgerMenu.styled';
import { useLocation } from 'react-router-dom';
import { useAuth } from "../../redux/hook/useAuth";
import { UserNav } from '../UserNav/UserNav';

interface BurgerMenuProps {
    onClose:()=>void;
    $isHome?:boolean;
    isOpen?:boolean;
    grid?:boolean;
    isFromBurgerMenu?:boolean;
}

export const BurgerMenu:React.FC<BurgerMenuProps>=({ onClose })=>{
    const location = useLocation();
    const isHome = location.pathname === '/home';
    const {isLoggedIn} = useAuth();


    return(
        <BurgerMenuContainer $isHome={isHome}>
            {isHome?  
            (  <CloseIcon onClick={onClose}>
                <use xlinkHref={sprite + '#icon-x'}/>
            </CloseIcon> )
            :
            (<CloseIcon onClick={onClose}>
                <use xlinkHref={sprite + '#icon-x-1'}/>
            </CloseIcon> )}

            <Nav  grid={true}  isOpen={true} onClose= {onClose} />
            
            {isLoggedIn && <UserNav isOpen={true} onClose={onClose} isFromBurgerMenu={true}/>}
 
            {!isLoggedIn && <AuthNav grid={true} isOpen={true} onClose= {onClose}/> } 

        </BurgerMenuContainer>
    )
}
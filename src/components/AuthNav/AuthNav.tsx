import { ContainerButton, ButtonLogin,ButtonRegistration } from "./AuthNavstyled";
import { useNavigate } from 'react-router-dom';
import React from "react";

interface AuthNavProps{
    $isHome?:boolean;
    onClose?:()=>void;
    isOpen?:boolean;
    grid?:boolean;
}

export const AuthNav:React.FC<AuthNavProps>=({$isHome, onClose=()=>{}, isOpen, grid})=>{
    const navigator = useNavigate(); 

    const handleLoginClick = () => {
        navigator('/login');
        if (isOpen) {
            onClose();
        }
    };

    const handleRegisterClick = () => {
        navigator('/register');
        if (isOpen) {
            onClose();
        }
    };

    return (
         <div>
  
             <ContainerButton $grid={grid}>
                 <ButtonLogin $isHome={$isHome} type='button' 
                     onClick={handleLoginClick}>Login</ButtonLogin>   

                 <ButtonRegistration type='button' 
                      onClick={handleRegisterClick}>Registration</ButtonRegistration>
            </ContainerButton>   

         </div>
    )
}




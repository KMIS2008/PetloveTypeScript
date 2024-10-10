import { ContainerButton, ButtonLogin,ButtonRegistration } from "./AuthNavstyled";
import { useNavigate } from 'react-router-dom';


export const AuthNav=({$isHome, onClose, isOpen, grid})=>{
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




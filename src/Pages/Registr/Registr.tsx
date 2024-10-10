import {RegistrationForm} from '../../components/RegistrationForm/RegistrationForm';
import { Title } from "../../components/Title/Title";
import { PetBlock } from "../../components/PetBlock/PetBlock";
import CatMobile1 from '../../images/CatMobile1.jpg';
import CatMobile2 from '../../images/CatMobile2.jpg';
import CatMobile3 from '../../images/CatMobile3.jpg';
import CatTable1 from '../../images/CatTable1.jpg';
import CatTable2 from '../../images/CatTable2.jpg';
import CatTable3 from '../../images/CatTable3.jpg';
import CatDesktop1 from '../../images/CatDesktop1.png';
import CatDesktop2 from '../../images/CatDesktop2.png';
import CatDesktop3 from '../../images/CatDesktop3.png';
import { Link } from 'react-router-dom';
import {ContainerLogin, Container, TextRegister, Span, Text} from '../Login/Loginstyled';


export default function Registr (){
    return (
        <ContainerLogin>
            <PetBlock imgMobile1={CatMobile1} 
                      imgMobile2={CatMobile2} 
                      imgMobile3={CatMobile3}
                      imgTablet1={CatTable1}
                      imgTablet2={CatTable2} 
                      imgTablet3={CatTable3}
                      imgDesctop1={CatDesktop1} 
                      imgDesctop2={CatDesktop2} 
                      imgDesctop3={CatDesktop3}/>
        <Container>
           <Title name={'Registration'}/>
           <Text>Thank you for your interest in our platform.</Text>

           <RegistrationForm/> 

           <TextRegister>Already have an account? 
              <Link to="/login"><Span> Login </Span></Link>
                </TextRegister>            
        </Container>

        </ContainerLogin>
    )
}
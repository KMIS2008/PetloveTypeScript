import { LoginForm } from "components/LogiForm/LoginForm";
import { Title } from "../../components/Title/Title";
import { PetBlock } from "components/PetBlock/PetBlock";
import {ContainerLogin, Container, Text, TextRegister, Span} from './Loginstyled';
import { Link } from 'react-router-dom';
import DogMobile1 from '../../images/DogMobile1.jpg';
import DogMobile2 from '../../images/DogMobile2.jpg';
import DogMobile3 from '../../images/DogMobile3.jpg';
import DogTablet1 from '../../images/DogTablet1.jpg';
import DogTablet2 from '../../images/DogTablet2.jpg';
import DogTablet3 from '../../images/DogTablet3.jpg';
import DogDesktop1 from '../../images/DogDesktop1.jpg';
import DogDesktop2 from '../../images/DogDesktop2.jpg';
import DogDesktop3 from '../../images/DogDesktop3.jpg';


export default function Login({imgDesctop1, imgDesctop2, imgDesctop3,
    imgTablet1, imgTablet2, imgTablet3,
    imgMobile1, imgMobile2, imgMobile3}
){

    return (
        <ContainerLogin>
            <PetBlock imgDesctop1={DogDesktop1}
                      imgDesctop2={DogDesktop2}
                      imgDesctop3={DogDesktop3}
                      imgTablet1={DogTablet1}
                      imgTablet2={DogTablet2}
                      imgTablet3={DogTablet3}
                      imgMobile1={DogMobile1} 
                      imgMobile2={DogMobile2} 
                      imgMobile3={DogMobile3}/>
            <Container>
              <Title name={'Log in'}/>
              <Text>Welcome! Please enter your credentials to login to the platform:</Text>
              <LoginForm/>      
              <TextRegister>Don’t have an account? 
              <Link to="/register"><Span> Register </Span></Link>
                </TextRegister>         
            </Container>

        </ContainerLogin>
    )
}
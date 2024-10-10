import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoginForm } from "../../components/LogiForm/LoginForm";
import { Title } from "../../components/Title/Title";
import { PetBlock } from "../../components/PetBlock/PetBlock";
import { ContainerLogin, Container, Text, TextRegister, Span } from './Loginstyled';
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
export default function Login() {
    return (_jsxs(ContainerLogin, { children: [_jsx(PetBlock, { imgDesctop1: DogDesktop1, imgDesctop2: DogDesktop2, imgDesctop3: DogDesktop3, imgTablet1: DogTablet1, imgTablet2: DogTablet2, imgTablet3: DogTablet3, imgMobile1: DogMobile1, imgMobile2: DogMobile2, imgMobile3: DogMobile3 }), _jsxs(Container, { children: [_jsx(Title, { name: 'Log in' }), _jsx(Text, { children: "Welcome! Please enter your credentials to login to the platform:" }), _jsx(LoginForm, {}), _jsxs(TextRegister, { children: ["Don\u2019t have an account?", _jsx(Link, { to: "/register", children: _jsx(Span, { children: " Register " }) })] })] })] }));
}
//# sourceMappingURL=Login.js.map
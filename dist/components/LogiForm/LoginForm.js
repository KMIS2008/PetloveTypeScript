import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { FiEyeOff, FiEye, FiCheck, FiX } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Form, Input, ButtonEye, Container, Error, Button, InputContainer, ValidationIcon, SuccessMessage } from './LoginFormstyled';
const useAppDispatch = useDispatch;
const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email must contain @")
        .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Enter a valid Email')
        .required('Required'),
    password: Yup.string().min(7, "Password must contain at least 7 symbols").required('Required'),
});
export const LoginForm = () => {
    const { register, handleSubmit, reset, formState: { isSubmitting, errors, touchedFields }, } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const dispatch = useAppDispatch();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const onSubmit = async (data, e) => {
        const { email, password } = data;
        e.preventDefault();
        try {
            await dispatch(logIn({ email, password }));
            reset();
        }
        catch (error) {
            setError('Invalid email or password. Try again');
        }
    };
    const handlePassword = () => {
        setIsPasswordVisible(prevState => !prevState);
    };
    return (_jsxs(Form, { onSubmit: handleSubmit(onSubmit), children: [_jsxs(InputContainer, { children: [_jsx(Input, { type: "email", id: "email", placeholder: "Email", ...register('email', {
                            required: 'Required',
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                message: 'Enter a valid Email',
                            },
                        }), "$isError": !!errors.email, "$isSuccess": !errors.email && touchedFields.email }), errors.email && _jsx(ValidationIcon, { children: _jsx(FiX, { color: "#EF2447" }) }), !errors.email && touchedFields.email && _jsx(ValidationIcon, { children: _jsx(FiCheck, { color: "#08AA83" }) }), errors.email && _jsx(Error, { children: errors.email.message }), !errors.email && touchedFields.email && _jsx(SuccessMessage, { children: "Email is secure" })] }), _jsxs(Container, { children: [_jsxs(InputContainer, { children: [_jsx(Input, { type: isPasswordVisible ? 'text' : 'password', id: "password", placeholder: "Password", ...register('password'), "$isError": !!errors.password, "$isSuccess": !errors.password && touchedFields.password }), errors.password && _jsx(ValidationIcon, { children: _jsx(FiX, { color: "#EF2447" }) }), !errors.password && touchedFields.password && _jsx(ValidationIcon, { children: _jsx(FiCheck, { color: "#08AA83" }) }), errors.password && _jsx(Error, { children: errors.password.message }), !errors.password && touchedFields.password && _jsx(SuccessMessage, { children: "Password is secure" })] }), _jsx(ButtonEye, { type: "button", onClick: handlePassword, children: isPasswordVisible ? (_jsx(FiEye, { stroke: "#f6b83d" })) : (_jsx(FiEyeOff, { stroke: "#f6b83d" })) })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, children: "Log In" }), error && _jsx(Error, { children: error })] }));
};
//# sourceMappingURL=LoginForm.js.map
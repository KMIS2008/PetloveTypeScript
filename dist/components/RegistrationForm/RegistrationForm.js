import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { FiEyeOff, FiEye, FiCheck, FiX } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { registr } from '../../redux/auth/operations';
import { Form, Input, ButtonEye, Container, Error, Button, InputContainer, ValidationIcon, SuccessMessage } from './RegistrationForm. styled.js';
import { useNavigate } from 'react-router-dom';
import { selectToken } from '../../redux/auth/selects.js';
const useAppDispatch = useDispatch;
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    email: Yup.string().email("Email must contain @")
        .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Enter a valid Email')
        .required('Required'),
    password: Yup.string()
        .min(7, "Password must contain at least 7 symbols")
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Required'),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Required'),
});
export const RegistrationForm = () => {
    const { register, handleSubmit, reset, formState: { isSubmitting, errors, touchedFields }, } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [error, setError] = useState('');
    const onSubmit = async (data, e) => {
        const { name, email, password } = data;
        e.preventDefault();
        try {
            await dispatch(registr({ name, email, password }));
            reset();
        }
        catch (error) {
            setError('Invalid email or password. Try again');
        }
    };
    const handlePassword = evt => {
        evt.preventDefault();
        setIsPasswordVisible(prevState => !prevState);
    };
    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    }, [token, navigate]);
    return (_jsxs(Form, { onSubmit: handleSubmit(onSubmit), children: [_jsxs(InputContainer, { children: [_jsx(Input, { id: "name", placeholder: "Name", ...register('name'), "$isError": !!errors.name, "$isSuccess": !errors.name && touchedFields.name }), errors.name && _jsx(ValidationIcon, { children: _jsx(FiX, { color: "#EF2447" }) }), !errors.name && touchedFields.name && _jsx(ValidationIcon, { children: _jsx(FiCheck, { color: "#08AA83" }) }), errors.name && _jsx(Error, { children: errors.name.message }), !errors.name && touchedFields.name && _jsx(SuccessMessage, { children: "Name is secure" })] }), _jsxs(InputContainer, { children: [_jsx(Input, { type: "email", id: "email", placeholder: "Email", ...register('email', {
                            required: 'Required',
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                message: 'Enter a valid Email',
                            },
                        }), "$isError": !!errors.email, "$isSuccess": !errors.email && touchedFields.email }), errors.email && _jsx(ValidationIcon, { children: _jsx(FiX, { color: "#EF2447" }) }), !errors.email && touchedFields.email && _jsx(ValidationIcon, { children: _jsx(FiCheck, { color: "#08AA83" }) }), errors.email && _jsx(Error, { children: errors.email.message }), !errors.email && touchedFields.email && _jsx(SuccessMessage, { children: "Email is secure" })] }), _jsxs(Container, { children: [_jsxs(InputContainer, { children: [_jsx(Input, { type: isPasswordVisible ? 'text' : 'password', id: "password", placeholder: "Password", ...register('password'), "$isError": !!errors.password, "$isSuccess": !errors.password && touchedFields.password }), errors.password && _jsx(ValidationIcon, { children: _jsx(FiX, { color: "#EF2447" }) }), !errors.password && touchedFields.password && _jsx(ValidationIcon, { children: _jsx(FiCheck, { color: "#08AA83" }) }), errors.password && _jsx(Error, { children: errors.password.message }), !errors.password && touchedFields.password && _jsx(SuccessMessage, { children: "Password is secure" })] }), _jsx(ButtonEye, { type: "button", onClick: () => setVisibility(!visibility), children: visibility ? (_jsx(FiEye, { stroke: "#f6b83d", onClick: handlePassword })) : (_jsx(FiEyeOff, { stroke: "#f6b83d", onClick: handlePassword })) })] }), _jsxs(Container, { children: [_jsxs(InputContainer, { children: [_jsx(Input, { type: isPasswordVisible ? 'text' : 'password', id: "confirm", placeholder: "Confirm password", ...register('confirm'), "$isError": !!errors.confirm, "$isSuccess": !errors.confirm && touchedFields.confirm }), errors.confirm && _jsx(ValidationIcon, { children: _jsx(FiX, { color: "#EF2447" }) }), !errors.confirm && touchedFields.confirm && _jsx(ValidationIcon, { children: _jsx(FiCheck, { color: "#08AA83" }) }), errors.confirm && _jsx(Error, { children: errors.confirm.message }), !errors.confirm && touchedFields.confirm && _jsx(SuccessMessage, { children: "Confirm password is secure" })] }), _jsx(ButtonEye, { type: "button", onClick: () => setVisibility(!visibility), children: visibility ? (_jsx(FiEye, { stroke: "#f6b83d", onClick: handlePassword })) : (_jsx(FiEyeOff, { stroke: "#f6b83d", onClick: handlePassword })) })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, children: "Registration" }), error && _jsx(Error, { children: error })] }));
};
//# sourceMappingURL=RegistrationForm.js.map
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { FiEyeOff, FiEye, FiCheck, FiX } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { registr } from 'redux/auth/operations';
import { Form, Input, ButtonEye, Container, Error, Button, InputContainer,
         ValidationIcon, SuccessMessage } from './RegistrationForm. styled.js';
import { useNavigate } from 'react-router-dom';
import {selectToken} from '../../redux/auth/selects.js';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
             .required('Required'),

    email: Yup.string().email("Email must contain @")
              .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,'Enter a valid Email')
              .required('Required'),
    password: Yup.string()
                 .min(7, "Password must contain at least 7 symbols")
                 .oneOf([Yup.ref('password'), null], 'Passwords must match')
                 .required('Required'),
});

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors, touchedFields },
      } = useForm({
          resolver: yupResolver(SignupSchema)
      });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectToken);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data, e) => {
        const { name, email, password} = data;
        e.preventDefault();
        try {
            await dispatch(registr({ name, email, password}));
            reset();
        } catch (error) {
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
    

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
            <Input
                        id="name"
                        placeholder="Name"
                        {...register('name')}
                        $isError={!!errors.name}
                        $isSuccess={!errors.name && touchedFields.name}
                    />
                    {errors.name && <ValidationIcon><FiX color="#EF2447" /></ValidationIcon>}
                    {!errors.name && touchedFields.name && <ValidationIcon><FiCheck color="#08AA83"/></ValidationIcon>}
                    {errors.name && <Error>{errors.name.message}</Error>}
                    {!errors.name && touchedFields.name && <SuccessMessage>Name is secure</SuccessMessage>}  

            </InputContainer>
    
            <InputContainer>

            <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register('email', {
                        required: 'Required',
                        pattern: {
                            value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                            message: 'Enter a valid Email',
                        },
                    })}
                    $isError={!!errors.email}
                    $isSuccess={!errors.email && touchedFields.email}
                />
                {errors.email && <ValidationIcon><FiX color="#EF2447" /></ValidationIcon>}
                {!errors.email && touchedFields.email && <ValidationIcon><FiCheck color="#08AA83" /></ValidationIcon>}
                {errors.email && <Error>{errors.email.message}</Error>}
                {!errors.email && touchedFields.email && <SuccessMessage>Email is secure</SuccessMessage>}

            </InputContainer>

            <Container>
                <InputContainer>
                    <Input
                        type={isPasswordVisible ? 'text' : 'password'}
                        id="password"
                        placeholder="Password"
                        {...register('password')}
                        $isError={!!errors.password}
                        $isSuccess={!errors.password && touchedFields.password}
                    />
                    {errors.password && <ValidationIcon><FiX color="#EF2447" /></ValidationIcon>}
                    {!errors.password && touchedFields.password && <ValidationIcon><FiCheck color="#08AA83"/></ValidationIcon>}
                    {errors.password && <Error>{errors.password.message}</Error>}
                    {!errors.password && touchedFields.password && <SuccessMessage>Password is secure</SuccessMessage>}
                </InputContainer>
                <ButtonEye type="button" onClick={() => setVisibility(!visibility)}>
                    {visibility ? (
                        <FiEye stroke="#f6b83d" onClick={handlePassword} />
                    ) : (
                        <FiEyeOff stroke="#f6b83d" onClick={handlePassword} />
                    )}
                </ButtonEye>
            </Container>

            <Container>
                <InputContainer>
                    <Input
                        type={isPasswordVisible ? 'text' : 'password'}
                        id="confirm"
                        placeholder="Confirm password"
                        {...register('confirm')}
                        $isError={!!errors.confirm}
                        $isSuccess={!errors.confirm && touchedFields.confirm}
                    />
                    {errors.confirm && <ValidationIcon><FiX color="#EF2447" /></ValidationIcon>}
                    {!errors.confirm && touchedFields.confirm && <ValidationIcon><FiCheck color="#08AA83"/></ValidationIcon>}
                    {errors.confirm && <Error>{errors.confirm.message}</Error>}
                    {!errors.confirm && touchedFields.confirm && <SuccessMessage>Confirm password is secure</SuccessMessage>}
                </InputContainer>
                <ButtonEye type="button" onClick={() => setVisibility(!visibility)}>
                    {visibility ? (
                        <FiEye stroke="#f6b83d" onClick={handlePassword} />
                    ) : (
                        <FiEyeOff stroke="#f6b83d" onClick={handlePassword} />
                    )}
                </ButtonEye>
            </Container>

            <Button type="submit" disabled={isSubmitting}>Registration</Button>
            {error && <Error>{error}</Error>}
        </Form>
    );
};


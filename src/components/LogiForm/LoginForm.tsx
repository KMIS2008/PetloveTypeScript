import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { useState, FormEvent, MouseEventHandler  } from 'react';
import { FiEyeOff, FiEye, FiCheck, FiX } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Form, Input, ButtonEye, Container, Error, Button, InputContainer,
         ValidationIcon, SuccessMessage } from './LoginFormstyled';
import { AppDispatch } from '../../redux/store';


const useAppDispatch:()=>AppDispatch=useDispatch;
interface LoginProps{
    email: string, 
    password: string
  }

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email must contain @")
              .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,'Enter a valid Email')
              .required('Required'),
    password: Yup.string().min(7, "Password must contain at least 7 symbols").required('Required'),
});

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors, touchedFields },
      } = useForm({
          resolver: yupResolver(SignupSchema)
      });

    const dispatch = useAppDispatch();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data:LoginProps, e:FormEvent) => {
        const { email, password } = data;
        e.preventDefault();
        try {
            await dispatch(logIn({ email, password }));
            reset();
        } catch (error) {
            setError('Invalid email or password. Try again');
        }
    };

    const handlePassword: MouseEventHandler<HTMLButtonElement> = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                <ButtonEye type="button" onClick={handlePassword}>
                    {isPasswordVisible ? (
                        <FiEye stroke="#f6b83d" />
                    ) : (
                        <FiEyeOff stroke="#f6b83d" />
                    )}
                </ButtonEye>

            </Container>

            <Button type="submit" disabled={isSubmitting}>Log In</Button>
            {error && <Error>{error}</Error>}
        </Form>
    );
};
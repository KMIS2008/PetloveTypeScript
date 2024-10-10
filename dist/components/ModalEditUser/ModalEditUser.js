import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import { Container, SvgButton, Title, UserAvatar, ContainerInput, InputWrapper, Input, ButtonLoad, ButtonLoadSpan, SuccessMessage, Error, Button } from './ModalEditUser.styled';
import defaultAvatar from '../../images/user.png';
import { useDispatch } from "react-redux";
import { NotificationManager } from 'react-notifications';
import { selectorUserFull } from '../../redux/selects';
import { fetchUserEdit } from '../../redux/operations';
const useAppDispatch = useDispatch;
Modal.setAppElement('#modal');
const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    avatar: Yup.string()
        .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Enter a valid Avatar')
        .required('Required'),
    phone: Yup.string()
        .matches(/^\+38\d{10}$/, 'Enter a valid Phone')
        .required('Required'),
    email: Yup.string()
        .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Enter a valid email')
        .required('Required'),
});
export const ModalEditUser = ({ isModalEditUser, setModalEditUser }) => {
    const [isAvatar, setAvatar] = useState(false);
    const dispatch = useAppDispatch();
    const handleLoadingAvatar = () => {
        setAvatar(true);
    };
    const user = useSelector(selectorUserFull);
    const defaultValues = {
        name: user.name || 'Name',
        email: user.email || 'name@gmail.com',
        phone: user.phone || '+380',
        avatar: user.avatar,
    };
    const { register, handleSubmit, formState: { errors, touchedFields }, watch } = useForm({
        resolver: yupResolver(SignupSchema),
        mode: 'onBlur',
        defaultValues
    });
    const avatar = watch('avatar');
    const name = watch('name');
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(38, 38, 38, 0.3)",
        },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
        },
    };
    useEffect(() => {
        if (isModalEditUser) {
            document.body.classList.add('no-scroll');
        }
        else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isModalEditUser]);
    const onSubmit = async (data) => {
        try {
            let info = {};
            if (data.name !== user.name) {
                info.name = data.name;
            }
            if (data.email !== user.email) {
                info.email = data.email;
            }
            if (data.phone !== user.phone) {
                info.phone = data.phone;
            }
            if (data.avatar !== user.avatar) {
                info.avatar = data.avatar;
            }
            await dispatch(fetchUserEdit(info));
            setModalEditUser(false);
        }
        catch (error) {
            NotificationManager.error(error.message || 'An error occurred', 'Error', 5000);
        }
    };
    return (_jsx(_Fragment, { children: _jsx(Modal, { isOpen: isModalEditUser, onRequestClose: () => {
                setModalEditUser(false);
            }, style: customStyles, contentLabel: "More info modal", children: _jsxs(Container, { children: [_jsx(SvgButton, { onClick: () => {
                            setModalEditUser(false);
                        }, children: _jsx("svg", { width: '24px', height: '24px', children: _jsx("use", { xlinkHref: sprite + '#icon-x' }) }) }), _jsx(Title, { children: "Edit information" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [!isAvatar ?
                                _jsx(UserAvatar, { src: defaultAvatar, alt: name })
                                :
                                    _jsx(UserAvatar, { src: avatar, alt: name }), _jsxs(ContainerInput, { children: [_jsxs(InputWrapper, { children: [_jsx(Input, { id: "avatar", placeholder: "Enter URL", "$isError": !!errors.avatar, "$isSuccess": !errors.avatar && touchedFields.avatar, ...register('avatar', {
                                                    required: 'Required',
                                                    pattern: {
                                                        value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
                                                        message: 'Enter a valid avatar',
                                                    },
                                                }) }), errors.avatar && _jsx(Error, { children: errors.avatar.message }), !errors.avatar && touchedFields.avatar && _jsx(SuccessMessage, { children: "Avatar is secure" })] }), _jsxs(ButtonLoad, { type: 'button', onClick: handleLoadingAvatar, children: [_jsx(ButtonLoadSpan, { children: " Upload  photo" }), _jsx("svg", { width: 18, height: 18, children: _jsx("use", { xlinkHref: sprite + '#icon-upload-cloud' }) })] })] }), _jsx(Input, { id: "name", placeholder: "Name", "$isError": !!errors.name, "$isSuccess": !errors.name && touchedFields.name, ...register('name', {
                                    required: 'Required',
                                }) }), errors.name && _jsx(Error, { children: errors.name.message }), !errors.name && touchedFields.name && _jsx(SuccessMessage, { children: "Name is secure" }), _jsx(Input, { type: "email", id: "email", placeholder: "Email", ...register('email', {
                                    required: 'Required',
                                    pattern: {
                                        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                        message: 'Enter a valid Email',
                                    },
                                }), "$isError": !!errors.email, "$isSuccess": !errors.email && touchedFields.email }), errors.email && _jsx(Error, { children: errors.email.message }), !errors.email && touchedFields.email && _jsx(SuccessMessage, { children: "Email is secure" }), _jsx(Input, { type: "phone", id: "phone", placeholder: "Phone", ...register('phone', {
                                    required: 'Required',
                                    pattern: {
                                        value: /^\+38\d{10}$/,
                                        message: 'Enter a valid Phone',
                                    },
                                }), "$isError": !!errors.phone, "$isSuccess": !errors.phone && touchedFields.phone }), errors.phone && _jsx(Error, { children: errors.phone.message }), !errors.phone && touchedFields.phone && _jsx(SuccessMessage, { children: "Phone is secure" }), _jsx(Button, { type: 'submit' })] })] }) }) }));
};
//# sourceMappingURL=ModalEditUser.js.map
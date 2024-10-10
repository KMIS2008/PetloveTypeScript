import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import Select from 'react-select';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import sprite from '../../images/sprite.svg';
import { addPet } from '../../redux/operations';
import { Title, TitleSpan, ContainerForm, Avatar, AvatarNew, RadioGroup, SvgIcon, Error, ContainerInput, InputWrapper, Input, ButtonLoad, ButtonLoadSpan, SuccessMessage, WrapperSelect, SvgCalendar, WrapperButton, Button } from './AddPetForm .styled.js';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
const useAppDispatch = useDispatch;
const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    species: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    birthday: Yup.string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Enter a valid Birthday')
        .required('Required'),
    imgURL: Yup.string()
        .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Enter a valid Url')
        .required('Required'),
});
export const AddPetForm = () => {
    const customStyles = {
        placeholder: (provided) => ({
            ...provided,
            color: '#26262680',
        }),
        control: (provided, state) => ({
            ...provided,
            borderRadius: '30px',
            height: state.isMulti ? '52px' : '42px',
            border: state.isFocused ? '1px solid #F6B83D' : '1px solid #26262626',
            boxShadow: state.isFocused ? '0 0 0 1px #F6B83D' : 'none',
            '&:hover': {
                border: '1px solid #F6B83D',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            borderRadius: '15px',
            border: 'none',
            padding: '0 12px',
            fontFamily: 'Manrope',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '1.29',
            letterSpacing: '-0.03em',
            color: state.isSelected ? '#fff' : '#26262699',
            backgroundColor: state.isSelected ? '#262626' : '#fff',
            '&:hover': {
                color: '#262626',
            },
        }),
    };
    const defaultValues = {
        title: '',
        name: '',
        species: '',
        sex: '',
        birthday: '',
        imgURL: '',
    };
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedSex, setSelectedSex] = useState('');
    const [speciesOptions, setSpeciesOptions] = useState([]);
    const [isAvatar, setAvatar] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const { register, handleSubmit, setValue, formState: { errors, touchedFields }, reset, watch } = useForm({
        resolver: yupResolver(SignupSchema),
        mode: 'onBlur',
        defaultValues
    });
    const imgURL = watch('imgURL');
    const name = watch('name');
    const onSubmit = async (data) => {
        try {
            await dispatch(addPet(data));
            reset();
            navigator('/profile');
        }
        catch (error) {
            NotificationManager.error(error.message || 'An error occurred', 'Error', 5000);
        }
    };
    const handleBack = () => {
        navigator('/profile');
    };
    const handleSexChange = (value) => {
        setSelectedSex(value);
        setValue('sex', value);
    };
    const getIcon = (sex, selected) => {
        const iconMap = {
            female: selected ? 'icon-female-1' : 'icon-female',
            male: selected ? 'icon-male-1' : 'icon-male',
            multiple: selected ? 'icon-multiple-1' : 'icon-multiple',
        };
        return iconMap[sex];
    };
    const handleLoadingAvatar = () => {
        setAvatar(true);
    };
    useEffect(() => {
        const fetchSpeciesOptions = async () => {
            const response = await axios.get('/notices/species');
            setSpeciesOptions(response.data);
        };
        fetchSpeciesOptions();
    }, []);
    const isspeciesOptions = speciesOptions.map(option => ({
        key: nanoid(),
        value: `${option}`,
        label: `${option}`
    }));
    const handleDateChange = (date) => {
        setStartDate(date);
        const formattedDate = date ? date.toISOString().split('T')[0] : '';
        setValue('birthday', formattedDate);
    };
    return (_jsx(_Fragment, { children: _jsxs(ContainerForm, { onSubmit: handleSubmit(onSubmit), children: [_jsxs(Title, { children: [" Add my pet /", _jsx(TitleSpan, { children: "Personal details" })] }), _jsxs(RadioGroup, { children: [_jsx(SvgIcon, { selected: selectedSex === 'female', onClick: () => handleSexChange('female'), children: _jsx("use", { xlinkHref: `${sprite}#${getIcon('female', selectedSex === 'female')}` }) }), _jsx(SvgIcon, { selected: selectedSex === 'male', onClick: () => handleSexChange('male'), children: _jsx("use", { xlinkHref: `${sprite}#${getIcon('male', selectedSex === 'male')}` }) }), _jsx(SvgIcon, { selected: selectedSex === 'multiple', onClick: () => handleSexChange('multiple'), children: _jsx("use", { xlinkHref: `${sprite}#${getIcon('multiple', selectedSex === 'multiple')}` }) })] }), errors.sex && _jsx(Error, { children: errors.sex.message }), !isAvatar ?
                    _jsx(Avatar, { width: 68, height: 68, children: _jsx("use", { xlinkHref: sprite + '#icon-paw' }) })
                    :
                        _jsx(AvatarNew, { src: imgURL, alt: name, width: 68, height: 68 }), _jsxs(ContainerInput, { children: [_jsxs(InputWrapper, { children: [_jsx(Input, { id: "imgURL", placeholder: "Enter URL", "$isError": !!errors.imgUrl, "$isSuccess": !errors.imgUrl && touchedFields.imgUrl, ...register('imgURL', {
                                        required: 'Required',
                                        pattern: {
                                            value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
                                            message: 'Enter a valid imgUrl',
                                        },
                                    }) }), errors.imgUrl && _jsx(Error, { children: errors.imgUrl.message }), !errors.imgUrl && touchedFields.imgUrl && _jsx(SuccessMessage, { children: "imgUrl is secure" })] }), _jsxs(ButtonLoad, { type: 'button', onClick: handleLoadingAvatar, children: [_jsx(ButtonLoadSpan, { children: " Upload  photo" }), _jsx("svg", { width: 16, height: 16, children: _jsx("use", { xlinkHref: sprite + '#icon-upload-cloud' }) })] })] }), _jsx(Input, { id: "title", placeholder: "Title", "$isError": !!errors.title, "$isSuccess": !errors.title && touchedFields.title, ...register('title', {
                        required: 'Required',
                    }) }), errors.title && _jsx(Error, { children: errors.title.message }), !errors.title && touchedFields.title && _jsx(SuccessMessage, { children: "Title is secure" }), _jsx(Input, { id: "name", placeholder: "Pet\u2019s Name", "$isError": !!errors.name, "$isSuccess": !errors.name && touchedFields.name, ...register('name', {
                        required: 'Required',
                    }) }), errors.name && _jsx(Error, { children: errors.name.message }), !errors.name && touchedFields.name && _jsx(SuccessMessage, { children: "Name is secure" }), _jsxs(ContainerInput, { children: [_jsxs(WrapperSelect, { children: [_jsx(DatePicker, { selected: startDate, onChange: handleDateChange, dateFormat: "yyyy-MM-dd", customInput: _jsx(Input, { placeholder: "0000-00-00", "$isError": !!errors.birthday, "$isSuccess": !errors.birthday && touchedFields.birthday, ...register('birthday') }) }), errors.birthday && _jsx(Error, { children: errors.birthday.message }), !errors.birthday && touchedFields.birthday && _jsx(SuccessMessage, { children: "Birthday is secure" }), _jsx(SvgCalendar, { width: 18, height: 18, onClick: () => {
                                        const inputElement = document.querySelector('.react-datepicker__input-container input');
                                        if (inputElement) {
                                            inputElement.focus();
                                        }
                                    }, children: _jsx("use", { xlinkHref: sprite + '#icon-calendar' }) })] }), _jsxs(WrapperSelect, { children: [_jsx(Select, { id: "species", styles: customStyles, placeholder: "Type of pet", isClearable: true, options: isspeciesOptions, ...register('species', { required: 'Required' }), onChange: value => setValue('species', (value === null || value === void 0 ? void 0 : value.value) || '') }), errors.species && _jsx(Error, { children: errors.species.message })] })] }), _jsxs(WrapperButton, { children: [_jsx(Button, { type: 'button', onClick: handleBack, children: "Back" }), _jsx(Button, { type: 'submit', children: "Submit" })] })] }) }));
};
//# sourceMappingURL=AddPetForm.js.map
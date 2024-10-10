import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, ContainerTabletSelect, ContainerSelect, CustomSelect, CustomSelectType, Option, ContainerSvg, Svg, SvgReset, Straight, Reset, RadioGroup, RadioButtonLabel, RadioButton, Button } from './NoticesFilters.styled';
import { SearchField } from "../SearchField/SearchField";
import Select from 'react-select';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { getNoticesFilter } from '../../redux/operations';
const useAppDispatch = useDispatch;
axios.defaults.baseURL = "https://petlove.b.goit.study/api";
export const NoticesFilters = ({ notices }) => {
    const dispatch = useAppDispatch();
    const [iscategories, setCategories] = useState([]);
    const [isgenders, setGenders] = useState([]);
    const [ispetTypes, setPetTypes] = useState([]);
    const [islocations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedSort, setSelectedSort] = useState(null);
    const [selectCategories, setSelectCategories] = useState('');
    const [selectGenders, setSelectGenders] = useState('');
    const [selectPetTypes, setSelectPetTypes] = useState('');
    const [hasInput, setHasInput] = useState(false);
    const getFilter = (page, limit) => {
        return {
            category: selectCategories,
            gender: selectGenders,
            species: selectPetTypes,
            location: selectedLocation !== null ? selectedLocation : undefined,
            price: selectedSort === 'highprice' ? false : (selectedSort === 'lowprice' ? true : undefined),
            popularity: selectedSort === 'popularity' ? false : (selectedSort === 'unpopularity' ? true : undefined),
            page,
            limit,
            name: ''
        };
    };
    const handleCategoriesChange = (e, setFieldValue) => {
        const value = e.target.value;
        setFieldValue('category', value);
        setSelectCategories(value);
        setHasInput(e.target.value.trim().length > 0);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), category: value }));
    };
    const handleGendersChange = (e, setFieldValue) => {
        const value = e.target.value;
        setFieldValue('gender', value);
        setSelectGenders(value);
        setHasInput(e.target.value.trim().length > 0);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), gender: value }));
    };
    const handleTypesChange = (e, setFieldValue) => {
        const value = e.target.value;
        setFieldValue('byTypes', value);
        setSelectPetTypes(value);
        setHasInput(e.target.value.trim().length > 0);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), species: value }));
    };
    const handleSortByPopularity = () => {
        setSelectedSort('popularity');
        setHasInput(true);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), popularity: false }));
    };
    const handleSortByUnpopularity = () => {
        setSelectedSort('unpopularity');
        setHasInput(true);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), popularity: true }));
    };
    const handleSortByExpensive = () => {
        setSelectedSort('highprice');
        setHasInput(true);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), price: false }));
    };
    const handleSortByCheap = () => {
        setSelectedSort('lowprice');
        setHasInput(true);
        dispatch(getNoticesFilter({ ...getFilter(1, 6), price: true }));
    };
    useEffect(() => {
        const fetchData = async () => {
            const categoriesResponse = await axios.get('/notices/categories');
            const gendersResponse = await axios.get('/notices/sex');
            const petTypesResponse = await axios.get('/notices/species');
            const locationsResponse = await axios.get('/cities');
            setCategories(categoriesResponse.data);
            setGenders(gendersResponse.data);
            setPetTypes(petTypesResponse.data);
            setLocations(locationsResponse.data);
        };
        fetchData();
    }, []);
    const locationOptions = islocations.map(location => ({
        value: location._id,
        label: `${location.stateEn}, ${location.cityEn}, ${location.countyEn}`
    }));
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '30px',
            border: 'none',
            height: '42px',
            padding: '0 12px',
            fontFamily: 'Manrope',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '1.29',
            letterSpacing: '-0.03em',
            color: '#262626',
            boxShadow: state.isFocused ? '0 0 0 1px #F6B83D' : provided.boxShadow,
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
        placeholder: (provided) => ({
            ...provided,
            color: '#262626',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#262626',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            display: 'none',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
        }),
    };
    const formatOptionLabel = ({ label }, { inputValue }) => {
        if (!inputValue)
            return label;
        const highlightedText = label.substring(0, inputValue.length);
        const restOfText = label.substring(inputValue.length);
        return (_jsxs(_Fragment, { children: [_jsx("span", { style: { color: '#262626' }, children: highlightedText }), _jsx("span", { style: { color: '#26262666' }, children: restOfText })] }));
    };
    const handleResetClick = (resetForm) => {
        resetForm();
        setSelectedLocation(null);
        setSelectedSort(null);
        setSelectCategories('');
        setSelectGenders('');
        setSelectPetTypes('');
        setHasInput(false);
        dispatch(getNoticesFilter({
            page: 1,
            limit: 6,
            name: '',
            category: '',
            gender: '',
            species: '',
            location: '',
            popularity: false,
            price: false
        }));
    };
    return (_jsx(Formik, { initialValues: {
            search: '',
            category: '',
            gender: '',
            petType: '',
            location: '',
            sortBy: '',
        }, onSubmit: (values, actions) => {
            const getFilterValues = () => ({
                search: values.search,
                category: values.category,
                gender: values.gender,
                petType: values.petType,
                location: values.location,
                sortBy: values.sortBy,
                page: 1,
                limit: 6,
                name: values.search || '',
                species: values.petType || '',
            });
            dispatch(getNoticesFilter(getFilterValues()));
        }, children: ({ resetForm, setFieldValue, values }) => (_jsxs(Form, { children: [_jsxs(Container, { children: [_jsxs(ContainerTabletSelect, { children: [_jsx(SearchField, { fetch: getNoticesFilter }), _jsxs(ContainerSelect, { children: [_jsxs(CustomSelect, { as: "select", id: "category", name: "category", value: selectCategories, onChange: (e) => handleCategoriesChange(e, setFieldValue), children: [_jsx(Option, { value: "", children: "Category" }), iscategories.map(category => (_jsx(Option, { value: category, children: category }, nanoid())))] }), _jsxs(CustomSelect, { as: "select", name: "gender", value: selectGenders, onChange: (e) => handleGendersChange(e, setFieldValue), children: [_jsx(Option, { value: "", children: "By gender" }), isgenders.map((gender) => (_jsx(Option, { value: gender, children: gender }, nanoid())))] })] }), _jsxs(CustomSelectType, { as: "select", name: "byTypes", value: selectPetTypes, onChange: (e) => handleTypesChange(e, setFieldValue), children: [_jsx(Option, { value: "", children: "By type" }), ispetTypes.map((byType) => (_jsx("option", { value: byType, children: byType }, nanoid())))] }), _jsxs(ContainerSvg, { children: [_jsx(Select, { name: "location", defaultValue: locationOptions, value: selectedLocation, placeholder: "Location", styles: customStyles, formatOptionLabel: formatOptionLabel, options: locationOptions, onChange: (option) => {
                                                if (option) {
                                                    setHasInput(true);
                                                    setSelectedLocation(option);
                                                    setFieldValue('location', option.value);
                                                    dispatch(getNoticesFilter({ ...getFilter(1, 6), location: option.value }));
                                                }
                                                ;
                                                // setSelectedLocation(option);
                                                // setHasInput(true);
                                                // setFieldValue('location', option.value);
                                                // dispatch(getNoticesFilter({ ...getFilter(1, 6), location: option.value }));
                                            } }), _jsx("button", { type: 'submit', children: _jsx(Svg, { children: _jsx("use", { xlinkHref: sprite + '#icon-search' }) }) }), selectedLocation && _jsx(SvgReset, { onClick: () => handleResetClick(resetForm), children: _jsx("use", { xlinkHref: sprite + '#icon-x' }) })] })] }), _jsx(Straight, {}), _jsxs(RadioGroup, { role: "group", "aria-labelledby": "sort-group", children: [_jsx(RadioButton, { type: "radio", name: "sort", value: "popularity", id: "popularity", onChange: handleSortByPopularity, checked: selectedSort === 'popularity' }), _jsxs(RadioButtonLabel, { htmlFor: "popularity", children: ["Popular", selectedSort === 'popularity' && (_jsx(Reset, { onClick: () => handleResetClick(resetForm), children: _jsx("use", { xlinkHref: sprite + '#icon-x-1' }) }))] }), _jsx(RadioButton, { type: "radio", name: "sort", value: "unpopularity", id: "unpopularity", onChange: handleSortByUnpopularity, checked: selectedSort === 'unpopularity' }), _jsxs(RadioButtonLabel, { htmlFor: "unpopularity", children: ["Unpopular", selectedSort === 'unpopularity' && (_jsx(Reset, { onClick: () => handleResetClick(resetForm), children: _jsx("use", { xlinkHref: sprite + '#icon-x-1' }) }))] }), _jsx(RadioButton, { type: "radio", name: "sort", value: "lowprice", id: "lowprice", onChange: handleSortByCheap, checked: selectedSort === 'lowprice' }), _jsxs(RadioButtonLabel, { htmlFor: "lowprice", children: ["Cheap", selectedSort === 'lowprice' && (_jsx(Reset, { onClick: () => handleResetClick(resetForm), children: _jsx("use", { xlinkHref: sprite + '#icon-x-1' }) }))] }), _jsx(RadioButton, { type: "radio", name: "sort", value: "highprice", id: "highprice", onChange: handleSortByExpensive, checked: selectedSort === 'highprice' }), _jsxs(RadioButtonLabel, { htmlFor: "highprice", children: ["Expensive", selectedSort === 'highprice' && (_jsx(Reset, { onClick: () => handleResetClick(resetForm), children: _jsx("use", { xlinkHref: sprite + '#icon-x-1' }) }))] })] })] }), hasInput ? (_jsx(Button, { type: 'button', onClick: () => handleResetClick(resetForm), children: "Reset" })) : null] })) }));
};
//# sourceMappingURL=NoticesFilters.js.map
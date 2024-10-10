import {
  Container, ContainerTabletSelect, ContainerSelect, CustomSelect, CustomSelectType,
  Option, ContainerSvg, Svg, SvgReset, Straight, Reset,
  RadioGroup, RadioButtonLabel, RadioButton, Button
} from './NoticesFilters.styled';
import { SearchField } from "components/SearchField/SearchField";
import Select from 'react-select';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { getNoticesFilter } from '../../redux/operations';

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const NoticesFilters = ({ notices }) => {
  const dispatch = useDispatch();
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

  const getFilter = () => {
    return {
      category: selectCategories,
      gender: selectGenders,
      species: selectPetTypes,
      location: selectedLocation,
      price: selectedSort === 'highprice' ? false : (selectedSort === 'lowprice' ? true : undefined),
      popularity: selectedSort === 'popularity' ? false : (selectedSort === 'unpopularity' ? true : undefined),
    };
  };

  const handleCategoriesChange = (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue('category', value);
    setSelectCategories(value);
    setHasInput(e.target.value.trim().length > 0);
    dispatch(getNoticesFilter({ ...getFilter(), category: value }));
  };

  const handleGendersChange = (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue('gender', value);
    setSelectGenders(value);
    setHasInput(e.target.value.trim().length > 0);
    dispatch(getNoticesFilter({ ...getFilter(), gender: value }));
  };

  const handleTypesChange = (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue('byTypes', value);
    setSelectPetTypes(value);
    setHasInput(e.target.value.trim().length > 0);
    dispatch(getNoticesFilter({ ...getFilter(), species: value }));
  };

  const handleSortByPopularity = () => {
    setSelectedSort('popularity');
    setHasInput(true);
    dispatch(getNoticesFilter({ ...getFilter(), popularity: false }));
  };

  const handleSortByUnpopularity = () => {
    setSelectedSort('unpopularity');
    setHasInput(true);
    dispatch(getNoticesFilter({ ...getFilter(), popularity: true }));
  };

  const handleSortByExpensive = () => {
    setSelectedSort('highprice');
    setHasInput(true);
    dispatch(getNoticesFilter({ ...getFilter(), price: false }));
  };

  const handleSortByCheap = () => {
    setSelectedSort('lowprice');
    setHasInput(true);
    dispatch(getNoticesFilter({ ...getFilter(), price: true }));
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
    if (!inputValue) return label;

    const highlightedText = label.substring(0, inputValue.length);
    const restOfText = label.substring(inputValue.length);

    return (
      <>
        <span style={{ color: '#262626' }}>{highlightedText}</span>
        <span style={{ color: '#26262666' }}>{restOfText}</span>
      </>
    );
  };

  const handleResetClick = (resetForm) => {
    resetForm();
    setSelectedLocation(null);
    setSelectedSort(null);
    setSelectCategories('');
    setSelectGenders('');
    setSelectPetTypes('');
    setHasInput(false);
    dispatch(getNoticesFilter({}));
  };

  return (
    <Formik
      initialValues={{
        search: '',
        category: '',
        gender: '',
        petType: '',
        location: '',
        sortBy: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(getNoticesFilter(values));
      }}
    >
      {({ resetForm, setFieldValue, values }) => (
        <Form>
          <Container>
            <ContainerTabletSelect>
              <SearchField name="search" fetch={getNoticesFilter} setFieldValue={(value) => setFieldValue('search', value)} />
              <ContainerSelect>
                <CustomSelect
                  as="select"
                  id="category"
                  name="category"
                  value={selectCategories}
                  onChange={(e) => handleCategoriesChange(e, setFieldValue)}
                >
                  <Option value="">Category</Option>
                  {iscategories.map(category => (
                    <Option key={nanoid()} value={category}>
                      {category}
                    </Option>
                  ))}
                </CustomSelect>
                <CustomSelect
                  as="select"
                  name="gender"
                  value={selectGenders}
                  onChange={(e) => handleGendersChange(e, setFieldValue)}
                >
                  <Option value="">By gender</Option>
                  {isgenders.map((gender) => (
                    <Option key={nanoid()} value={gender}>
                      {gender}
                    </Option>
                  ))}
                </CustomSelect>
              </ContainerSelect>
              <CustomSelectType
                as="select"
                name="byTypes"
                value={selectPetTypes}
                onChange={(e) => handleTypesChange(e, setFieldValue)}
              >
                <Option value="">By type</Option>
                {ispetTypes.map((byType) => (
                  <option key={nanoid()} value={byType}>
                    {byType}
                  </option>
                ))}
              </CustomSelectType>
              <ContainerSvg>
                <Select
                  name="location"
                  defaultValue={islocations}
                  value={selectedLocation}
                  placeholder="Location"
                  styles={customStyles}
                  formatOptionLabel={formatOptionLabel}
                  options={locationOptions}
                  onChange={(option) => {
                    setSelectedLocation(option);
                    setHasInput(true);
                    setFieldValue('location', option.value);
                    dispatch(getNoticesFilter({ ...getFilter(), location: option.value }));
                  }}
                />
                <button type='submit'>
                  <Svg>
                    <use xlinkHref={sprite + '#icon-search'} />
                  </Svg>
                </button>

                {selectedLocation && <SvgReset onClick={() => handleResetClick(resetForm)}>
                  <use xlinkHref={sprite + '#icon-x'} />
                </SvgReset>}
              </ContainerSvg>
            </ContainerTabletSelect>

            <Straight></Straight>

            <RadioGroup role="group" aria-labelledby="sort-group">
              <RadioButton
                type="radio"
                name="sort"
                value="popularity"
                id="popularity"
                onChange={handleSortByPopularity}
                checked={selectedSort === 'popularity'}
              />
              <RadioButtonLabel htmlFor="popularity">
                Popular
                {selectedSort === 'popularity' && (
                  <Reset onClick={() => handleResetClick(resetForm)}>
                    <use xlinkHref={sprite + '#icon-x-1'} />
                  </Reset>
                )}
              </RadioButtonLabel>

              <RadioButton
                type="radio"
                name="sort"
                value="unpopularity"
                id="unpopularity"
                onChange={handleSortByUnpopularity}
                checked={selectedSort === 'unpopularity'}
              />
              <RadioButtonLabel htmlFor="unpopularity">
                Unpopular
                {selectedSort === 'unpopularity' && (
                  <Reset onClick={() => handleResetClick(resetForm)}>
                    <use xlinkHref={sprite + '#icon-x-1'} />
                  </Reset>
                )}
              </RadioButtonLabel>

              <RadioButton
                type="radio"
                name="sort"
                value="lowprice"
                id="lowprice"
                onChange={handleSortByCheap}
                checked={selectedSort === 'lowprice'}
              />
              <RadioButtonLabel htmlFor="lowprice">
                Cheap
                {selectedSort === 'lowprice' && (
                  <Reset onClick={() => handleResetClick(resetForm)}>
                    <use xlinkHref={sprite + '#icon-x-1'} />
                  </Reset>
                )}
              </RadioButtonLabel>

              <RadioButton
                type="radio"
                name="sort"
                value="highprice"
                id="highprice"
                onChange={handleSortByExpensive}
                checked={selectedSort === 'highprice'}
              />
              <RadioButtonLabel htmlFor="highprice">
                Expensive
                {selectedSort === 'highprice' && (
                  <Reset onClick={() => handleResetClick(resetForm)}>
                    <use xlinkHref={sprite + '#icon-x-1'} />
                  </Reset>
                )}
              </RadioButtonLabel>
            </RadioGroup>
          </Container>
          {hasInput ? (<Button type='button' onClick={() => handleResetClick(resetForm)}>Reset</Button>) : null}
        </Form>
      )}
    </Formik>
  );
};

                    
                    

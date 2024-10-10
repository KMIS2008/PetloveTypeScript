import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import Select from 'react-select';
import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import sprite from '../../images/sprite.svg';
import {addPet} from '../../redux/operations';
import { Title, TitleSpan, ContainerForm, Avatar, AvatarNew,
    RadioGroup, SvgIcon, Error, ContainerInput, InputWrapper, 
    Input, ButtonLoad, ButtonLoadSpan,SuccessMessage, 
    WrapperSelect, SvgCalendar, WrapperButton, Button } from './AddPetForm .styled.js';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    species: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    birthday: Yup.string()
                 .matches(/^\d{4}-\d{2}-\d{2}$/,'Enter a valid Birthday')
                 .required('Required'),
    imgURL: Yup.string()
              .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,'Enter a valid Url')
              .required('Required'),
});


export const AddPetForm =()=>{
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
        const dispatch=useDispatch();

        const [selectedSex, setSelectedSex] = useState('');
        const [speciesOptions, setSpeciesOptions] = useState([]);
        const[isAvatar, setAvatar]=useState(false);
        const [startDate, setStartDate] = useState(null);
    
        const { register, handleSubmit, setValue, formState: { errors, touchedFields }, reset, watch } = useForm({
            resolver: yupResolver(SignupSchema),
            mode: 'onBlur',
            defaultValues
          });

          const imgURL = watch('imgURL');
          const name =watch('name');
      
        const onSubmit = async (data, e) => {

            e.preventDefault();
            try {
                await dispatch(addPet(data));
                reset();
                navigator('/profile');
            } catch (errors) {
                
              NotificationManager.errors(errors.message || 'An error occurred', 'Error', 5000);
            }
        };

    
        const handleBack=()=>{
           navigator('/profile');
        }
    
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

          const handleLoadingAvatar=()=>{
            setAvatar(true)
          }
    
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
          
    return(
        <>

            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <Title> Add my pet / 
                        <TitleSpan>Personal details</TitleSpan>
                </Title>

                <RadioGroup>
                    <SvgIcon
                       selected={selectedSex === 'female'}
                       onClick={() => handleSexChange('female')}>
                             <use xlinkHref={`${sprite}#${getIcon('female', selectedSex === 'female')}`} />
                    </SvgIcon>

                    <SvgIcon
                       selected={selectedSex === 'male'}
                       onClick={() => handleSexChange('male')}>
                              <use xlinkHref={`${sprite}#${getIcon('male', selectedSex === 'male')}`} />
                    </SvgIcon>

                   <SvgIcon
                       selected={selectedSex === 'multiple'}
                       onClick={() => handleSexChange('multiple')}>
                              <use xlinkHref={`${sprite}#${getIcon('multiple', selectedSex === 'multiple')}`} />
                    </SvgIcon>
                </RadioGroup>
      {errors.sex && <Error>{errors.sex.message}</Error>}
            
               {!isAvatar  ? 
                            <Avatar width={68} height={68}>
                               <use xlinkHref={sprite + '#icon-paw'}/>
                            </Avatar>               
                      :
                            <AvatarNew src={imgURL} alt={name} width={68} height={68}/>}

                 <ContainerInput>
                     <InputWrapper>
                       <Input id="imgURL" 
                              placeholder="Enter URL"
                            $isError={!!errors.imgUrl}
                            $isSuccess={!errors.imgUrl && touchedFields.imgUrl}

                              {...register('imgURL', {
                                required: 'Required',
                                pattern: {
                                    value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
                                    message: 'Enter a valid imgUrl',
                                },
                            })} />
                       {errors.imgUrl && <Error>{errors.imgUrl.message}</Error>} 
                       {!errors.imgUrl && touchedFields.imgUrl && <SuccessMessage>imgUrl is secure</SuccessMessage>}                    
                     </InputWrapper>

                       <ButtonLoad type='button' onClick={handleLoadingAvatar}>
                              <ButtonLoadSpan> Upload  photo</ButtonLoadSpan>
                              <svg width={16} height={16}>
                                  <use xlinkHref={sprite + '#icon-upload-cloud'}/>
                              </svg>
                       </ButtonLoad>
                 </ContainerInput>

                 <Input id="title" 
                            placeholder="Title"
                            $isError={!!errors.title}
                            $isSuccess={!errors.title && touchedFields.title}

                              {...register('title', {
                                required: 'Required',
                            })} />
                       {errors.title && <Error>{errors.title.message}</Error>} 
                       {!errors.title && touchedFields.title && <SuccessMessage>Title is secure</SuccessMessage>} 

                  <Input id="name" 
                            placeholder="Pet’s Name"
                            $isError={!!errors.name}
                            $isSuccess={!errors.name && touchedFields.name}

                              {...register('name', {
                                required: 'Required',
                            })} />
                       {errors.name && <Error>{errors.name.message}</Error>} 
                       {!errors.name && touchedFields.name && <SuccessMessage>Name is secure</SuccessMessage>} 

                <ContainerInput>
                <WrapperSelect>
                      <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            customInput={<Input
                                placeholder="0000-00-00"
                                $isError={!!errors.birthday}
                                $isSuccess={!errors.birthday && touchedFields.birthday}
                                {...register('birthday')} />}
                        />
                      {errors.birthday && <Error>{errors.birthday.message}</Error>}
                      {!errors.birthday && touchedFields.birthday && <SuccessMessage>Birthday is secure</SuccessMessage>} 

                      <SvgCalendar width={18} height={18} onClick={() => document.querySelector('.react-datepicker__input-container input').focus()}>
                            <use xlinkHref={sprite + '#icon-calendar'} />
                        </SvgCalendar>
                </WrapperSelect>

                 <WrapperSelect>
                        <Select id="species"
                                styles={customStyles}
                                placeholder="Type of pet"
                                isClearable
                                options={isspeciesOptions}
                               {...register('species', { required: 'Required' })}
                               onChange={value => setValue('species', value?.value || '')}
                        />
                  {errors.species && <Error>{errors.species.message}</Error>}
                 </WrapperSelect>

                </ContainerInput>

                  <WrapperButton>
                    <Button type='button' 
                            onClick={handleBack}>Back</Button>
                    <Button type='submit'>Submit</Button>
                  </WrapperButton>

            </ContainerForm> 
        
        </>
    )}

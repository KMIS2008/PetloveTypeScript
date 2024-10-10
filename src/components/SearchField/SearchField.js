import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {Container, Input, Svg, SvgReset} from './SearchField.styled';
import { useDispatch } from 'react-redux';

export const SearchField =({fetch})=>{
  const dispatch =  useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleResetClick = () => {
        setSearchValue('');
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(fetch({ keyword: searchValue, pageNumber: 1}));
      handleResetClick();
  };

    return(
        <Container onClick = {handleSubmit}>
           <Input placeholder="Search"
           name='name'
           type='text'
           value={searchValue}
           onChange={handleInputChange}/>

           <button type='submit'>
             <Svg >
                <use xlinkHref={sprite + '#icon-search'}/>
              </Svg  >           
           </button>

           {searchValue  &&   <SvgReset onClick = {handleResetClick}>
                <use xlinkHref={sprite + '#icon-x'}/>
            </SvgReset> }

        </Container>
    )
}


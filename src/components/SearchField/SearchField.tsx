import React, { FormEvent, useState } from 'react';
import sprite from '../../images/sprite.svg';
import { Container, Input, Svg, SvgReset } from './SearchField.styled';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store'; 

// interface SearchFieldProps {
//   fetch: (params: { keyword: string, pageNumber: number }) => Promise<any>;  
// }

export const SearchField = ({ fetch }) => {
  const dispatch = useDispatch<AppDispatch>(); 
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleResetClick = () => {
    setSearchValue('');
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (searchValue.trim()) {
      dispatch(fetch({ keyword: searchValue, pageNumber: 1 }));  
    }
    handleResetClick();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        name="name"
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />

      <button type="submit">
        <Svg>
          <use xlinkHref={sprite + '#icon-search'} />
        </Svg>
      </button>

      {searchValue && (
        <SvgReset onClick={handleResetClick}>
          <use xlinkHref={sprite + '#icon-x'} />
        </SvgReset>
      )}
    </Container>
  );
};
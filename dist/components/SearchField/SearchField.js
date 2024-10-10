import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { Container, Input, Svg, SvgReset } from './SearchField.styled';
import { useDispatch } from 'react-redux';
// interface SearchFieldProps {
//   fetch: (params: { keyword: string, pageNumber: number }) => Promise<any>;  
// }
export const SearchField = ({ fetch }) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleResetClick = () => {
        setSearchValue('');
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (searchValue.trim()) {
            dispatch(fetch({ keyword: searchValue, pageNumber: 1 }));
        }
        handleResetClick();
    };
    return (_jsxs(Container, { onSubmit: handleSubmit, children: [_jsx(Input, { placeholder: "Search", name: "name", type: "text", value: searchValue, onChange: handleInputChange }), _jsx("button", { type: "submit", children: _jsx(Svg, { children: _jsx("use", { xlinkHref: sprite + '#icon-search' }) }) }), searchValue && (_jsx(SvgReset, { onClick: handleResetClick, children: _jsx("use", { xlinkHref: sprite + '#icon-x' }) }))] }));
};
//# sourceMappingURL=SearchField.js.map
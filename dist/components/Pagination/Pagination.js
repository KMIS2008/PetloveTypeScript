import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectorTotalPages } from '../../redux/selects';
import { Container, Button, ButtonNext, StyledRiArrowLeftDoubleFill, StyledIoIosArrowBack, StyledIoIosArrowForward, StyledArrowRightDoubleFill } from './Pagination.styled';
export const Pagination = ({ handleChangeNewPage, currentPage }) => {
    const totalPages = useSelector(selectorTotalPages);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const visiblePages = isMobile ? 2 : 3;
    const generatePageNumbers = () => {
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);
        if (endPage - startPage < visiblePages - 1) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };
    const pages = generatePageNumbers();
    return (_jsx(_Fragment, { children: totalPages > 1 && (_jsxs(Container, { children: [_jsx(ButtonNext, { onClick: () => handleChangeNewPage(1), disabled: currentPage === 1, type: 'button', children: _jsx(StyledRiArrowLeftDoubleFill, {}) }), _jsx(ButtonNext, { onClick: () => handleChangeNewPage(currentPage - 1), disabled: currentPage === 1, type: 'button', children: _jsx(StyledIoIosArrowBack, {}) }), pages[0] > 1 && _jsx(Button, { children: "..." }), pages.map((page) => (_jsx(Button, { type: 'button', onClick: () => handleChangeNewPage(page), children: page }, page))), pages[pages.length - 1] < totalPages && _jsx(Button, { children: "..." }), _jsx(ButtonNext, { onClick: () => handleChangeNewPage(currentPage + 1), disabled: currentPage === totalPages, type: 'button', children: _jsx(StyledIoIosArrowForward, {}) }), _jsx(ButtonNext, { onClick: () => handleChangeNewPage(totalPages), disabled: currentPage === totalPages, type: 'button', children: _jsx(StyledArrowRightDoubleFill, {}) })] })) }));
};
//# sourceMappingURL=Pagination.js.map
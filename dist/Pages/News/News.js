import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Title } from "../../components/Title/Title";
import { SearchField } from '../../components/SearchField/SearchField';
import { Container } from './News.styled';
import { NewsList } from '../../components/NewsList/NewsList';
import { useEffect, useState } from "react";
import { fetchnews, fetchNewsByKeyword } from '../../redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { selectorNews } from '../../redux/selects';
import { Pagination } from '../../components/Pagination/Pagination';
const useAppDispatch = useDispatch;
export default function News() {
    const dispatch = useAppDispatch();
    const [ispageNumber, setIsPageNumber] = useState(1);
    const news = useSelector(selectorNews);
    const handleChangeNewPage = (number) => {
        setIsPageNumber(number);
    };
    useEffect(() => {
        dispatch(fetchnews(ispageNumber));
    }, [dispatch, ispageNumber]);
    return (_jsxs("div", { children: [_jsxs(Container, { children: [_jsx(Title, { name: 'News' }), _jsx(SearchField, { fetch: fetchNewsByKeyword })] }), _jsx(NewsList, { news: news }), _jsx(Pagination, { handleChangeNewPage: handleChangeNewPage, currentPage: ispageNumber })] }));
}
//# sourceMappingURL=News.js.map
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Title } from "../../components/Title/Title";
import { Pagination } from "../../components/Pagination/Pagination";
import { fetchnotices } from '../../redux/operations';
import { NoticesList } from '../../components/NoticesList/NoticesList';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorNotices } from '../../redux/selects';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
const useAppDispatch = useDispatch;
export default function Notices() {
    const dispatch = useAppDispatch();
    const [isPageNumber, setIsPageNumber] = useState(1);
    const notices = useSelector(selectorNotices) || [];
    const handleChangeNewPage = (number) => {
        setIsPageNumber(number);
    };
    useEffect(() => {
        dispatch(fetchnotices(isPageNumber));
    }, [dispatch, isPageNumber]);
    return (_jsxs(_Fragment, { children: [_jsx(Title, { name: "Find your favorite pet" }), _jsx(NoticesFilters, { notices: notices }), _jsx(NoticesList, { notices: notices, trash: false }), _jsx(Pagination, { handleChangeNewPage: handleChangeNewPage, currentPage: isPageNumber })] }));
}
//# sourceMappingURL=Notices.js.map
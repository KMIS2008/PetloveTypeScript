import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { NewsItem } from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';
export const NewsList = ({ news }) => {
    return (_jsx(_Fragment, { children: _jsx(List, { children: news === null || news === void 0 ? void 0 : news.map(iterm => (_jsx(NewsItem, { value: iterm }, iterm._id))) }) }));
};
//# sourceMappingURL=NewsList.js.map
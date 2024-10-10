import { jsx as _jsx } from "react/jsx-runtime";
import { NoticesItem } from '../NoticesItem/NoticesItem';
import { Container } from './NoticeList.styled';
export const NoticesList = ({ notices, trash = false }) => {
    return (_jsx(Container, { children: notices === null || notices === void 0 ? void 0 : notices.map(iterm => (_jsx(NoticesItem, { notice: iterm, trash: trash }, iterm._id))) }));
};
//# sourceMappingURL=NoticesList.js.map
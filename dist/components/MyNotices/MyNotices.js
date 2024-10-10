import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ContainerButton, Button, NoFavoriteText, NoFavoriteSpan } from './MyNotices.styled';
import { selectorUserFull } from '../../redux/selects';
import { useState } from 'react';
import { NoticesList } from '../NoticesList/NoticesList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFull } from '../../redux/operations';
const useAppDispatch = useDispatch;
export const MyNotices = () => {
    const [isFavoritePets, setIsFavoritePets] = useState(false);
    const [isViewed, setVeiwed] = useState(false);
    const [hasFavorites, setHasFavorites] = useState(false);
    const dispatch = useAppDispatch();
    const userFull = useSelector(selectorUserFull);
    const favorites = userFull.noticesFavorites;
    const viewed = userFull.noticesViewed;
    const handleFavoritList = () => {
        setIsFavoritePets(true);
        setVeiwed(false);
        dispatch(fetchUserFull());
        setHasFavorites(favorites && favorites.length > 0);
    };
    const handleVeiwed = () => {
        setIsFavoritePets(false);
        setVeiwed(true);
        dispatch(fetchUserFull());
    };
    return (_jsxs(_Fragment, { children: [_jsxs(ContainerButton, { children: [_jsx(Button, { type: "button", onClick: handleFavoritList, children: "My favorite pets" }), _jsx(Button, { type: "button", onClick: handleVeiwed, children: "Viewed" })] }), isFavoritePets && !isViewed && _jsx(NoticesList, { notices: favorites, trash: true }), !isFavoritePets && isViewed && _jsx(NoticesList, { notices: viewed, trash: false }), !hasFavorites && isFavoritePets && _jsxs(NoFavoriteText, { children: ["Oops,", _jsx(NoFavoriteSpan, { children: "looks like there aren't any furries " }), "on our adorable page yet. Do not worry! View your pets on the \"find your favorite pet\" page and add them to your favorites."] })] }));
};
//# sourceMappingURL=MyNotices.js.map
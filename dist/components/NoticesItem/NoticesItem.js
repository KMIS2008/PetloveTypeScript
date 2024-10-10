import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import sprite from '../../images/sprite.svg';
import { Button, Title, Img, ContainerList, ContainerTitle, ContainerPopulate, Rating, TitleTable, Comment, ContainerButton, ContainerItem, ButtonSVG } from './NoticeItrm.styled';
import { ModalAttention } from '../ModalAttention/ModalAttention';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selects';
import { selectorFavorite, selectorNoticesId } from '../../redux/selects';
import { addNotices, removeNotices, fetchNoticesId, fetchUserFull } from '../../redux/operations';
const useAppDispatch = useDispatch;
export const NoticesItem = ({ notice, trash }) => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const favorites = useSelector(selectorFavorite);
    const noticeId = useSelector(selectorNoticesId);
    const { imgURL, title, popularity, comment, name, birthday, species, category, sex, _id } = notice;
    const [isOpenModalAttention, setIsOpenModalAttention] = useState(false);
    const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);
    const [isFavorite, setFavorite] = useState(favorites.includes(_id));
    const openModalAttention = () => {
        setIsOpenModalAttention(true);
    };
    const openModalNotice = () => {
        setIsOpenModalNotice(true);
    };
    const handleAction = (_id) => {
        if (isLoggedIn) {
            openModalNotice();
            dispatch(fetchNoticesId(_id));
        }
        else {
            openModalAttention();
        }
    };
    const handleToggetFavorite = (_id) => {
        if (!isFavorite) {
            dispatch(addNotices(_id));
            setFavorite(true);
            console.log(favorites);
        }
        else {
            dispatch(removeNotices(_id));
            setFavorite(false);
            console.log(favorites);
        }
    };
    const handleActionFavorite = (_id) => {
        if (isLoggedIn) {
            handleToggetFavorite(_id);
        }
        else {
            openModalAttention();
        }
    };
    const handleDeleteFavorite = async (_id) => {
        try {
            await dispatch(removeNotices(_id));
            setFavorite(false);
            await dispatch(fetchUserFull());
        }
        catch (error) {
            console.error("Error deleting favorite notice:", error);
        }
    };
    return (_jsxs(ContainerItem, { children: [_jsx(Img, { src: imgURL, alt: title }), _jsxs(ContainerTitle, { children: [_jsx(Title, { children: title }), _jsxs(ContainerPopulate, { children: [_jsx("svg", { width: 16, height: 16, children: _jsx("use", { xlinkHref: sprite + '#icon-star' }) }), _jsx(Rating, { children: popularity })] })] }), _jsxs(ContainerList, { children: [_jsxs("li", { children: [_jsx(TitleTable, { children: "Name" }), _jsx("p", { children: name })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Birthday" }), _jsx("p", { children: birthday })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Sex" }), _jsx("p", { children: sex })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Species" }), _jsx("p", { children: species })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Category" }), _jsx("p", { children: category })] })] }), _jsx(Comment, { children: comment }), _jsxs(ContainerButton, { children: [_jsx(Button, { type: 'button', onClick: () => handleAction(_id), children: "Learn more" }), trash &&
                        _jsx(ButtonSVG, { onClick: () => handleDeleteFavorite(_id), children: _jsx("svg", { width: 18, height: 18, children: _jsx("use", { xlinkHref: sprite + '#icon-trash-2' }) }) }), !trash && _jsx(ButtonSVG, { "$isDefaultFavorite": isFavorite, onClick: () => handleActionFavorite(_id), children: _jsx("svg", { width: 18, height: 18, children: _jsx("use", { xlinkHref: sprite + '#icon-heart' }) }) })] }), _jsx(ModalAttention, { isOpenModalAttention: isOpenModalAttention, setIsOpenModalAttention: setIsOpenModalAttention }), _jsx(ModalNotice, { notice: noticeId, setFavorite: setFavorite, isFavorite: isFavorite, isOpenModalNotice: isOpenModalNotice, setIsOpenModalNotice: setIsOpenModalNotice })] }));
};
//# sourceMappingURL=NoticesItem.js.map
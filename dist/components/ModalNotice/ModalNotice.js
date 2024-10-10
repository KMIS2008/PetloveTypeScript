import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Modal from "react-modal";
import { useEffect } from "react";
import { Container, SvgButton, ContainerImg, Svg, Img, Title, ContainerPopulate, Rating, ContainerList, TitleTable, Text, Comment, ContainerButton, ButtonAdd, ButtonContact } from './ModalNotice.styled';
import sprite from '../../images/sprite.svg';
import { addNotices, removeNotices } from '../../redux/operations';
import { useDispatch } from "react-redux";
const useAppDispatch = useDispatch;
Modal.setAppElement('#modal');
export const ModalNotice = ({ isOpenModalNotice, setIsOpenModalNotice, notice, setFavorite, isFavorite }) => {
    const { imgURL, title, popularity, comment, name, birthday, species, sex, category, _id, user } = notice;
    const dispatch = useAppDispatch();
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(38, 38, 38, 0.3)",
        },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            maxWidth: "335px",
            maxHeight: "446px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
        },
    };
    useEffect(() => {
        if (isOpenModalNotice) {
            document.body.classList.add('no-scroll');
        }
        else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpenModalNotice]);
    const handleAddFavorite = (_id) => {
        if (!isFavorite) {
            dispatch(addNotices(_id));
            setFavorite(true);
        }
        else {
            dispatch(removeNotices(_id));
            setFavorite(false);
        }
    };
    return (_jsx(_Fragment, { children: _jsx(Modal, { isOpen: isOpenModalNotice, onRequestClose: () => {
                setIsOpenModalNotice(false);
            }, style: customStyles, contentLabel: "More info modal", children: _jsxs(Container, { children: [_jsx(SvgButton, { onClick: () => {
                            setIsOpenModalNotice(false);
                        }, children: _jsx("svg", { width: '24px', height: '24px', children: _jsx("use", { xlinkHref: sprite + '#icon-x' }) }) }), _jsxs(ContainerImg, { children: [_jsx(Img, { src: imgURL, alt: title }), _jsx(Svg, { children: category })] }), _jsx(Title, { children: title }), _jsxs(ContainerPopulate, { children: [_jsx("svg", { width: 16, height: 16, children: _jsx("use", { xlinkHref: sprite + '#icon-star' }) }), _jsx(Rating, { children: popularity })] }), _jsxs(ContainerList, { children: [_jsxs("li", { children: [_jsx(TitleTable, { children: "Name" }), _jsx(Text, { children: name })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Birthday" }), _jsx(Text, { children: birthday })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Sex" }), _jsx(Text, { children: sex })] }), _jsxs("li", { children: [_jsx(TitleTable, { children: "Species" }), _jsx(Text, { children: species })] })] }), _jsx(Comment, { children: comment }), _jsxs(ContainerButton, { children: [_jsxs(ButtonAdd, { type: "button", onClick: () => handleAddFavorite(_id), children: [" Add to", _jsx("svg", { width: 16, height: 16, children: _jsx("use", { xlinkHref: sprite + '#icon-heart-3' }) })] }), (user === null || user === void 0 ? void 0 : user.phone) && (_jsx(ButtonContact, { as: "a", href: `tel:${user.phone}`, children: "Contact" }))] })] }) }) }));
};
//# sourceMappingURL=ModalNotice.js.map
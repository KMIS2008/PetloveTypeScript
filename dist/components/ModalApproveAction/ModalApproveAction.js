import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { Container, SvgButton, Img, Text, Button, ContainerButton } from './ModalApproveAction.styled';
import sprite from '../../images/sprite.svg';
import catLogout from '../../images/catLogout.png';
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#modal');
const useAppDispatch = useDispatch;
export const ModalApproveAction = ({ isOpenModalApproveAction, setOpenModalApproveAction, isOpen = false, onClose = () => { } }) => {
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const handlLogout = () => {
        dispatch(logOut());
        navigator('/home');
        if (isOpen) {
            onClose();
        }
    };
    const [modalStyles, setModalStyles] = useState({
        overlay: {
            backgroundColor: "rgba(38, 38, 38, 0.3)",
            zIndex: 1000,
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
            maxHeight: "270px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
        },
    });
    const updateModalStyles = () => {
        const isSmallScreen = window.innerWidth <= 768;
        setModalStyles({
            overlay: {
                backgroundColor: "rgba(38, 38, 38, 0.3)",
                zIndex: 1100,
            },
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                maxWidth: isSmallScreen ? "335px" : "410px",
                maxHeight: isSmallScreen ? "270px" : "364px",
                borderRadius: "30px",
                backgroundColor: "#FFFFFF",
            },
        });
    };
    useEffect(() => {
        updateModalStyles();
        window.addEventListener('resize', updateModalStyles);
        return () => {
            window.removeEventListener('resize', updateModalStyles);
        };
    }, []);
    useEffect(() => {
        if (isOpenModalApproveAction) {
            document.body.classList.add('no-scroll');
        }
        else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpenModalApproveAction]);
    return (_jsx(_Fragment, { children: _jsx(Modal, { isOpen: isOpenModalApproveAction, onRequestClose: () => {
                setOpenModalApproveAction(false);
            }, style: modalStyles, contentLabel: "More info modal", children: _jsxs(Container, { children: [_jsx(SvgButton, { onClick: () => {
                            setOpenModalApproveAction(false);
                        }, children: _jsx("svg", { width: '24px', height: '24px', children: _jsx("use", { xlinkHref: sprite + '#icon-x' }) }) }), _jsx(Img, { src: catLogout, alt: "cat" }), _jsx(Text, { children: "Already leaving?" }), _jsxs(ContainerButton, { children: [_jsx(Button, { type: "button", onClick: handlLogout, children: "Yes" }), _jsx(Button, { type: "button", onClick: () => setOpenModalApproveAction(false), children: "Cancel" })] })] }) }) }));
};
//# sourceMappingURL=ModalApproveAction.js.map
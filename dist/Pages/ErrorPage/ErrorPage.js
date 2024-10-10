import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import catErrorRemove from '../../images/catError-removebg-preview.png';
import catErrorTablate from '../../images/catErrorTablate.png';
import catErrorDesctop from '../../images/catErrorDecstop.png';
import { Container, Title, Img, Text, Button } from './ErrorPage.styled';
import { useNavigate } from 'react-router-dom';
export default function ErrorPage() {
    const navigator = useNavigate();
    const handleNavigate = () => {
        navigator('/home');
    };
    return (_jsx(_Fragment, { children: _jsxs(Container, { children: [_jsxs(Title, { children: ["4", _jsxs("picture", { children: [_jsx("source", { media: "(min-width: 1280px)", srcSet: `
                ${catErrorDesctop} 1x,
                ` }), _jsx("source", { media: "(min-width: 768px)", srcSet: `
                ${catErrorTablate} 1x,
                ` }), _jsx("source", { media: "(min-width: 375px)", srcSet: `
               ${catErrorRemove} 1x,
               ` }), _jsx("source", { media: "(min-width: 320px)", srcSet: `
               ${catErrorRemove} 1x,
               ` }), _jsx(Img, { alt: "cat", src: catErrorRemove, srcSet: `
                ${catErrorRemove} 1x,
                      ` })] }), "4"] }), _jsx(Text, { children: "Ooops! This page not found :(" }), _jsx(Button, { type: 'button', onClick: handleNavigate, children: "To home page" })] }) }));
}
//# sourceMappingURL=ErrorPage.js.map
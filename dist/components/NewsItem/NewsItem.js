import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContainerItem, Img, Title, Text, Container, Data, Link } from './NewItem.styled';
export const NewsItem = ({ value }) => {
    const { imgUrl, title, text, date, url } = value;
    function formatDate(date) {
        const dateNews = new Date(date);
        const day = String(dateNews.getDate()).padStart(2, '0');
        const month = String(dateNews.getMonth() + 1).padStart(2, '0');
        const year = dateNews.getFullYear();
        return `${day}/${month}/${year}`;
    }
    const formattedDate = formatDate(date);
    return (_jsxs(ContainerItem, { children: [_jsx(Img, { src: imgUrl, alt: title }), _jsx(Title, { children: title }), _jsx(Text, { children: text }), _jsxs(Container, { children: [_jsx(Data, { children: formattedDate }), _jsx(Link, { to: url, target: "_blank", rel: "noopener noreferrer", children: "Read more" })] })] }));
};
//# sourceMappingURL=NewsItem.js.map
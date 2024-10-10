import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Contaiter, ListTodayWorkDay, ItemTodayWorkDay, ContainerFriend, Title, Text, TextSpan } from './FriendsItem.styled';
export const FriendsItem = ({ friend }) => {
    const { workDays, imageUrl, title, email, address, phone } = friend;
    const currentDayIndex = new Date().getDay();
    const todayWorkDay = workDays ? workDays[currentDayIndex] : null;
    return (_jsxs(Contaiter, { children: [_jsx(ListTodayWorkDay, { children: todayWorkDay ? (_jsx(ItemTodayWorkDay, { children: todayWorkDay.isOpen ? `${todayWorkDay.from} - ${todayWorkDay.to}` : 'Closed' })) : (_jsx(ItemTodayWorkDay, { children: "Day and night" })) }), _jsxs(ContainerFriend, { children: [_jsx("img", { width: 80, height: 80, src: imageUrl, alt: title }), _jsxs("div", { children: [_jsx(Title, { children: title }), email && _jsxs(Text, { children: ["Email: ", _jsxs(TextSpan, { children: [" ", email] }), " "] }), address && _jsxs(Text, { children: ["Adress: ", _jsxs(TextSpan, { children: [" ", address] }), " "] }), phone && _jsxs(Text, { children: ["Phone: ", _jsxs(TextSpan, { children: [" ", phone] }), " "] })] })] })] }));
};
//# sourceMappingURL=FriendsItem.js.map
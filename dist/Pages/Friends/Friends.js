import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../redux/operations";
import { selectorFriends } from '../../redux/selects';
import { Title } from "../../components/Title/Title";
import { Container } from './Freinds.styled';
import { FriendsList } from '../../components/FriendsList/FriendsList';
const useAppDispatch = useDispatch;
export default function FriendPage() {
    const dispatch = useAppDispatch();
    const friends = useSelector(selectorFriends) || [];
    useEffect(() => {
        dispatch(fetchFriends());
    }, [dispatch]);
    return (_jsxs(Container, { children: [_jsx(Title, { name: 'Our friends' }), _jsx(FriendsList, { friends: friends })] }));
}
//# sourceMappingURL=Friends.js.map
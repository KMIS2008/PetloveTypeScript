import { jsx as _jsx } from "react/jsx-runtime";
import { FriendsItem } from "../FriendsItem/FriendsItem";
import { Contater } from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
    return (_jsx(Contater, { children: friends === null || friends === void 0 ? void 0 : friends.map(friend => (_jsx(FriendsItem, { friend: friend }, friend._id))) }));
};
//# sourceMappingURL=FriendsList.js.map
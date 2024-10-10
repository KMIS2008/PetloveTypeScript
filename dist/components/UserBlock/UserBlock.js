import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import defaultAvatar from '../../images/user.png';
import { useSelector } from 'react-redux';
import { UserInfo, User, UserAvatar, UserUpload, UserTitle } from './UserBlock.styled';
import { selectorUserFull } from '../../redux/selects';
export const UserBlock = () => {
    const user = useSelector(selectorUserFull);
    const avatarUrl = user.avatar || defaultAvatar;
    const userName = user.name || 'Name';
    const userEmail = user.email || 'name@gmail.com';
    const userPhone = user.phone || '+380';
    const isDefaultName = userName === 'Name';
    const isDefaultEmail = userEmail === 'name@gmail.com';
    const isDefaultPhone = userPhone === '+380';
    const [isAvatar, setAvatar] = useState(false);
    const handleLoadingAvatar = () => {
        setAvatar(true);
    };
    return (_jsxs("div", { children: [user.avatar && isAvatar ? (_jsx(UserAvatar, { width: 94, height: 94, src: avatarUrl, alt: "User Avatar" })) : (_jsx(UserAvatar, { width: 94, height: 94, src: defaultAvatar, alt: "User Avatar" })), _jsx(UserUpload, { onClick: handleLoadingAvatar, children: "Upload photo" }), _jsx(UserTitle, { children: "My information" }), _jsxs(UserInfo, { children: [_jsx(User, { "$isDefault": isDefaultName, children: userName }), _jsx(User, { "$isDefault": isDefaultEmail, children: userEmail }), _jsx(User, { "$isDefault": isDefaultPhone, children: userPhone })] })] }));
};
//# sourceMappingURL=UserBlock.js.map
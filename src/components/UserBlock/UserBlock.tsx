import React, { useState } from 'react';
import defaultAvatar from '../../images/user.png';
import { useSelector } from 'react-redux';
import {UserInfo, User, UserAvatar, UserUpload, UserTitle} from './UserBlock.styled';

import { selectorUserFull} from '../../redux/selects';


export const UserBlock=()=>{

    const user = useSelector(selectorUserFull);
    const avatarUrl = user.avatar || defaultAvatar;
    const userName = user.name || 'Name';
    const userEmail = user.email ||'name@gmail.com';
    const userPhone = user.phone || '+380';

    const isDefaultName = userName === 'Name';
    const isDefaultEmail = userEmail === 'name@gmail.com';
    const isDefaultPhone = userPhone === '+380';

    const[isAvatar, setAvatar] = useState(false)

    const handleLoadingAvatar=()=>{
        setAvatar(true)
    }

    return(
        <div>
            {user.avatar&&isAvatar ? (
                <UserAvatar width={94} height={94} src={avatarUrl} alt="User Avatar" />
                
            ) : (
                <UserAvatar width={94} height={94}  src={defaultAvatar} alt="User Avatar" />
            )}
            
            <UserUpload onClick={handleLoadingAvatar}>Upload photo</UserUpload>

            <UserTitle>My information</UserTitle>

            <UserInfo>
                <User $isDefault={isDefaultName}>{userName}</User>
                <User $isDefault={isDefaultEmail}>{userEmail}</User>
                <User $isDefault={isDefaultPhone}>{userPhone}</User>
            </UserInfo>
        </div>
    )
}
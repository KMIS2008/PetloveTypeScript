import { FriendsItem } from "../FriendsItem/FriendsItem";
import {Contater} from './FriendsList.styled';
import React from "react";
import {FriendsProps} from '../../redux/friendsSlice'


interface FrienfListProps{
    friends:FriendsProps[]
}

export const FriendsList:React.FC<FrienfListProps> =({friends})=>{

    return (
        <Contater>
            {friends?.map(friend=>(
                <FriendsItem key={friend._id} friend={friend}/>
            ))}
        </Contater>
    )
}
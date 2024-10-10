import { FriendsItem } from "../FriendsItem/FriendsItem";
import {Contater} from './FriendsList.styled';

export const FriendsList =({friends})=>{

    return (
        <Contater>
            {friends?.map(friend=>(
                <FriendsItem key={friend._id} friend={friend}/>
            ))}
        </Contater>
    )
}
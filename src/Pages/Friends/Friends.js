import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "redux/operations";
import { selectorFriends } from '../../redux/selects';
import { Title } from "components/Title/Title";
import { Container } from './Freinds.styled';
import { FriendsList } from '../../components/FriendsList/FriendsList';

export default function FriendPage(){
    const dispatch = useDispatch();
    const  isFriends = useSelector(selectorFriends);

    useEffect(()=>{
        dispatch(fetchFriends())
    },[dispatch]
    )

    return(
        <Container>
             <Title name={'Our friends'}/>
             <FriendsList friends={isFriends}/>
        </Container>
    )
}


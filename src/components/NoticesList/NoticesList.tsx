import {NoticesItem} from '../NoticesItem/NoticesItem';
import {Container} from './NoticeList.styled';
import React from 'react';

interface NoticeProps{
    imgURL:string,
    title:string, 
    popularity:string, 
    comment:string, 
    name:string, 
    birthday:string, 
    species:string, 
    category:string, 
    sex:string, 
    _id:string
}

interface NotticeListProps{
    notices:NoticeProps[],
    trash:boolean
}

export const NoticesList:React.FC<NotticeListProps>=({notices, trash=false})=>{

    return (
        <Container>
            {notices?.map(iterm=>( 
            <NoticesItem key={iterm._id} notice={iterm} trash={trash}/>
        ))}
        
        </Container>
    )
}
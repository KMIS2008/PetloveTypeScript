import {NewsItem} from '../NewsItem/NewsItem';
import {List} from './NewsList.styled';
import React from 'react';

interface NewProps{
  imgUrl:string, 
  title:string, 
  text:string, 
  date:string ,
  url:string,
  _id:string
}

interface NewsAll{
  news:NewProps[]
}

export const NewsList:React.FC<NewsAll> =({news})=>{
    return (
        <>
          <List>
           {news?.map(iterm =>(
                  <NewsItem key={iterm._id} value ={iterm} />
           )
           )}            
          </List>
        </>
    )
}


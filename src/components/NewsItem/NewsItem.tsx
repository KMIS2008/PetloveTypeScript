import React from 'react';
import {ContainerItem, Img, Title, Text, Container, Data, Link} from './NewItem.styled';

interface ValueProps{
    imgUrl:string, 
    title:string, 
    text:string, 
    date:string ,
    url:string
}

interface ValuePropsAll{
    value:ValueProps
}



export const NewsItem:React.FC<ValuePropsAll>=({value})=>{
    const {imgUrl, title, text, date ,url}=value;

    function formatDate(date:string) {
        const dateNews = new Date(date);
        const day = String(dateNews.getDate()).padStart(2, '0');
        const month = String(dateNews.getMonth() + 1).padStart(2, '0'); 
        const year = dateNews.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
    const formattedDate = formatDate(date);

    return(
        <ContainerItem>
           <Img src= {imgUrl} alt={title}/>
           <Title>{title}</Title>
           <Text>{text}</Text>
           <Container>
              <Data>{formattedDate}</Data>
              <Link to={url} target="_blank" rel="noopener noreferrer">Read more</Link>
           </Container>
           
        </ContainerItem>
    )
}

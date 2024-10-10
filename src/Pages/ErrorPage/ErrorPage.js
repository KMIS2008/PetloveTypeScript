import catErrorRemove from '../../images/catError-removebg-preview.png';
import catErrorTablate from '../../images/catErrorTablate.png';
import catErrorDesctop from '../../images/catErrorDecstop.png';
import {Container, Title, Img, Text, Button} from './ErrorPage.styled';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage(){
    const navigator = useNavigate(); 
    const handleNavigate=()=>{
        navigator('/home')
    }

    return(
        <>
        <Container>
            <Title>
                4 
                <picture>
            <source
            media="(min-width: 1280px)"
            srcSet={`
                ${catErrorDesctop} 1x,
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${catErrorTablate} 1x,
                `}
            />
            <source
             media="(min-width: 375px)"
             srcSet={`
               ${catErrorRemove} 1x,
               `}
            />
            <source
             media="(min-width: 320px)"
             srcSet={`
               ${catErrorRemove} 1x,
               `}
            />
            <Img alt="cat"
                src={catErrorRemove} 
                srcSet={`
                ${catErrorRemove} 1x,
                      `}/>
        </picture>
                4
            </Title>
            <Text>Ooops! This page not found :(</Text>
            <Button type='button' onClick={handleNavigate}>To home page</Button>
        </Container>
        </>
    )
}
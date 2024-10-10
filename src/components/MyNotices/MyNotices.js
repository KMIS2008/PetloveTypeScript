import {ContainerButton, Button, NoFavoriteText, NoFavoriteSpan} from './MyNotices.styled';
import {selectorUserFull} from '../../redux/selects';
import { useState } from 'react';
import { NoticesList } from 'components/NoticesList/NoticesList';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUserFull} from '../../redux/operations';

export const MyNotices=()=>{
    const[isFavoritePets, setIsFavoritePets]=useState(false);
    const[isViewed, setVeiwed]=useState(false);
    const [hasFavorites, setHasFavorites] = useState(false);

    const dispatch=useDispatch();
    const userFull=useSelector(selectorUserFull);
    const favorites =userFull.noticesFavorites;
    const viewed=userFull.noticesViewed;

    const handleFavoritList=()=>{
        setIsFavoritePets(true);
        setVeiwed(false);
        dispatch(fetchUserFull())
        setHasFavorites(favorites && favorites.length > 0);
    }

    const handleVeiwed=()=>{
        setIsFavoritePets(false);
        setVeiwed(true);
        dispatch(fetchUserFull())
    }

    return(
        <>
        <ContainerButton>
            <Button type="button" onClick={handleFavoritList}>My favorite pets</Button>
            <Button type="button" onClick={handleVeiwed}>Viewed</Button>
        </ContainerButton>
            
            {isFavoritePets&&!isViewed&& <NoticesList notices={favorites} trash={true} />}
            {!isFavoritePets&&isViewed&& <NoticesList notices={viewed} trash={false}/>}
            {!hasFavorites&&isFavoritePets&&<NoFavoriteText>Oops, 
                <NoFavoriteSpan>looks like there aren't any furries </NoFavoriteSpan> 
                on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.</NoFavoriteText>}
        </>
    )
}
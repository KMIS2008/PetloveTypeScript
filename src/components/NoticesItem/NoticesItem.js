import sprite from '../../images/sprite.svg';
import {Button,Title, Img, ContainerList, ContainerTitle, ContainerPopulate,
        Rating, TitleTable, Comment, ContainerButton, ContainerItem, ButtonSVG
} from './NoticeItrm.styled';
import {ModalAttention} from '../ModalAttention/ModalAttention';
import {ModalNotice} from '../ModalNotice/ModalNotice';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/auth/selects';
import {selectorFavorite, selectorNoticesId} from '../../redux/selects';
import {addNotices, removeNotices, fetchNoticesId, fetchUserFull} from '../../redux/operations';

 
export const NoticesItem=({notice, trash})=>{

    const dispatch=useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    const favorites = useSelector(selectorFavorite);
    const noticeId=useSelector(selectorNoticesId);
   
    const {imgURL ,title, popularity, comment, name, birthday, species, category, sex, _id}=notice;
    const [isOpenModalAttention, setIsOpenModalAttention ] =useState(false);
    const [isOpenModalNotice, setIsOpenModalNotice ] =useState(false);
    const [isFavorite, setFavorite]=useState(favorites.includes(_id));

    const openModalAttention=()=>{
        setIsOpenModalAttention(true);
    }

    const openModalNotice=()=>{
        setIsOpenModalNotice(true);
    }

    const handleAction = (_id) => {
        if (isLoggedIn) {
            openModalNotice();
            dispatch(fetchNoticesId(_id))
        } else {
            openModalAttention();
        }
    }

    const handleToggetFavorite = (_id) => {
        if (!isFavorite) {
            dispatch(addNotices(_id)); 
            setFavorite(true)
           console.log( favorites)
        } else
     {      dispatch(removeNotices(_id));
            setFavorite(false)
            console.log( favorites)}
    };

    const handleActionFavorite = (_id) => {
        if (isLoggedIn) {
            handleToggetFavorite(_id);
        } else {
            openModalAttention();
        }
    };

    const handleDeleteFavorite = async (_id) => {
        try {
            await dispatch(removeNotices(_id));
            setFavorite(false);
            await dispatch(fetchUserFull());
        } catch (error) {
            console.error("Error deleting favorite notice:", error);
        }
    };

    return(
        <ContainerItem>
            <Img src= {imgURL} alt={title}/>
           <ContainerTitle>
              <Title>{title}</Title>
              <ContainerPopulate>
                 <svg width={16} height={16}>
                    <use xlinkHref={sprite + '#icon-star'} />
                 </svg>      
                 <Rating>{popularity}</Rating>          
              </ContainerPopulate>
            </ContainerTitle>  

            <ContainerList>

                <li>
                    <TitleTable>Name</TitleTable>
                    <p>{name}</p>
                </li>
                <li>
                    <TitleTable>Birthday</TitleTable>
                    <p>{birthday}</p>
                </li>
                <li>
                    <TitleTable>Sex</TitleTable>
                    <p>{sex}</p>
                </li>
                <li>
                    <TitleTable>Species</TitleTable>
                    <p>{species}</p>
                </li>
                <li>
                    <TitleTable>Category</TitleTable>
                    <p>{category}</p>
                </li>
                 
            </ContainerList>
            
           <Comment>{comment}</Comment>
           <ContainerButton>
            
               <Button type='button' onClick={()=>handleAction(_id)}>Learn more</Button>
               {trash&&
               <ButtonSVG onClick={() => handleDeleteFavorite(_id)}>
                   <svg width={18} height={18}>
                      <use xlinkHref={sprite + '#icon-trash-2'} />
                   </svg>                
               </ButtonSVG>}

               {!trash&&<ButtonSVG $isDefaultFavorite={isFavorite} onClick={() => handleActionFavorite(_id)}>
                   <svg width={18} height={18}>
                      <use xlinkHref={sprite + '#icon-heart'} />
                   </svg>                
               </ButtonSVG>}
               
           </ContainerButton>

           <ModalAttention isOpenModalAttention={isOpenModalAttention} setIsOpenModalAttention={setIsOpenModalAttention}/>
           <ModalNotice notice={noticeId}  
           setFavorite={setFavorite} isFavorite={isFavorite} 
           isOpenModalNotice={isOpenModalNotice} setIsOpenModalNotice={setIsOpenModalNotice}/>
        
        </ContainerItem>
    )
}
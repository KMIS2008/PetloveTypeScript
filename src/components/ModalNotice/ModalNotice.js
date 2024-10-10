import Modal from "react-modal";
import { useEffect } from "react";
import {Container, SvgButton, ContainerImg, Svg, Img, Title, ContainerPopulate, Rating,ContainerList, TitleTable, Text,
        Comment, ContainerButton, ButtonAdd, ButtonContact } from './ModalNotice.styled';
import sprite from '../../images/sprite.svg';
import {addNotices, removeNotices} from '../../redux/operations';
import { useDispatch } from "react-redux";


Modal.setAppElement('#modal');

export const ModalNotice = ({ isOpenModalNotice, setIsOpenModalNotice, notice, setFavorite, isFavorite }) => {
    const {imgURL ,title, popularity, comment, name, birthday, species, sex, category, _id, user}=notice;
    const dispatch=useDispatch();

    const customStyles = {
      overlay: {
        backgroundColor: "rgba(38, 38, 38, 0.3)",
       
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        maxWidth: "335px",
        maxHeight: "446px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
      },
    };

    useEffect(() => {
      if (isOpenModalNotice) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
  
      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, [isOpenModalNotice]);



    const handleAddFavorite = (_id) => {
      if (!isFavorite) {
          dispatch(addNotices(_id));
          setFavorite(true)
      } else {
        dispatch(removeNotices(_id));
        setFavorite(false)
      }
  };

      return (
        <>
        <Modal   
          isOpen={isOpenModalNotice}
          onRequestClose={() => {
            setIsOpenModalNotice(false);
          }}
               
          style={customStyles}
          contentLabel="More info modal"     
        >
  <Container>
          <SvgButton
             onClick={() => {
                setIsOpenModalNotice(false);
             }}>
              <svg width= '24px' height='24px'>
                  <use xlinkHref={sprite + '#icon-x'} />
              </svg> 
           </SvgButton>

           <ContainerImg>
            <Img src={imgURL} alt={title} />

            <Svg>{category}</Svg>            
           </ContainerImg>
     
           <Title>{title}</Title>

           <ContainerPopulate>
                 <svg width={16} height={16}>
                    <use xlinkHref={sprite + '#icon-star'} />
                 </svg>      
                 <Rating>{popularity}</Rating>          
              </ContainerPopulate>
              <ContainerList>

                 <li>
                    <TitleTable>Name</TitleTable>
                    <Text>{name}</Text>
                 </li>
                 <li>
                    <TitleTable>Birthday</TitleTable>
                    <Text>{birthday}</Text>
                 </li>
                 <li>
                    <TitleTable>Sex</TitleTable>
                    <Text>{sex}</Text>
                 </li>
                 <li>
                    <TitleTable>Species</TitleTable>
                    <Text>{species}</Text>
                 </li>
              </ContainerList>

              <Comment>{comment}</Comment>

              <ContainerButton>
                <ButtonAdd type="button" onClick={() => handleAddFavorite(_id)}> Add to
                     <svg width={16} height={16}>
                         <use xlinkHref={sprite + '#icon-heart-3'} />
                     </svg>  
                </ButtonAdd>
                {user?.phone && (
                  <ButtonContact as="a" href={`tel:${user.phone}`}>Contact</ButtonContact>
                )}
              </ContainerButton>
    
  </Container>
  
        </Modal> 
        </>
      );
    }; 
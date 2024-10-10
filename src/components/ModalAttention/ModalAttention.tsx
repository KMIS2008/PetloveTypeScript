import Modal from "react-modal";
import { useEffect } from "react";
import {Container, SvgButton, ContainerSvg, Img, Title, Text} from './ModalAttention.styled';
import sprite from '../../images/sprite.svg';
import dog_small from '../../images/dog_small.jpg';
import React from "react";

import { AuthNav } from '../AuthNav/AuthNav';

interface ModalAttentionProps{
  isOpenModalAttention:boolean,
  setIsOpenModalAttention:(isOpenModalAttention:boolean)=>void
}

Modal.setAppElement('#modal');

export const ModalAttention:React.FC<ModalAttentionProps> = ({ isOpenModalAttention, setIsOpenModalAttention }) => {


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
        maxHeight: "394px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
      },
    };
  
    useEffect(() => {
      if (isOpenModalAttention) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
  
      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, [isOpenModalAttention]);
    
      return (
        <>
        <Modal   
          isOpen={isOpenModalAttention}
          onRequestClose={() => {
            setIsOpenModalAttention(false);
          }}
               
          style={customStyles}
  
          contentLabel="More info modal"     
        >
  <Container>
          <SvgButton
             onClick={() => {
                setIsOpenModalAttention(false);
             }}>
              <svg width= '24px' height='24px'>
                  <use xlinkHref={sprite + '#icon-x'} />
              </svg> 
           </SvgButton>

           <ContainerSvg>
             <Img src={dog_small} alt="small-dog" width= '44px' height='44px'/>
           </ContainerSvg>
  
           <Title>Attention</Title>
  
           <Text>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials.
             If you do not already have an account, you must register to access these features.
           </Text>

           <AuthNav />
  
  </Container>
  
        </Modal>
        </>
      );
    }; 
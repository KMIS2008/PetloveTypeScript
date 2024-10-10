import Modal from "react-modal";
import { useEffect, useState } from "react";
import {Container, SvgButton, Img, Text, Button,
        ContainerButton} from './ModalApproveAction.styled';
import sprite from '../../images/sprite.svg';
import catLogout from '../../images/catLogout.png';
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from "../../redux/store";

Modal.setAppElement('#modal');

const useAppDispatch: () => AppDispatch = useDispatch;

export const ModalApproveAction=({isOpenModalApproveAction, setOpenModalApproveAction, isOpen = false, onClose = () => {}})=>{

  const dispatch = useAppDispatch();
  const navigator = useNavigate(); 

  const handlLogout =()=>{
        dispatch(logOut())
        navigator('/home')
        if(isOpen){
          onClose()
       }
    }

    const [modalStyles, setModalStyles] = useState({
      overlay: {
        backgroundColor: "rgba(38, 38, 38, 0.3)",
        zIndex: 1000,
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
        maxHeight: "270px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
      },
    });
  
    const updateModalStyles = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setModalStyles({
        overlay: {
          backgroundColor: "rgba(38, 38, 38, 0.3)",
          zIndex: 1100,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          maxWidth: isSmallScreen ? "335px" : "410px",
          maxHeight: isSmallScreen ? "270px" : "364px",
          borderRadius: "30px",
          backgroundColor: "#FFFFFF",
        },
      });
    };
  
    useEffect(() => {
      updateModalStyles();
      window.addEventListener('resize', updateModalStyles); 
      return () => {
        window.removeEventListener('resize', updateModalStyles); 
      };
    }, []);

      useEffect(() => {
        if (isOpenModalApproveAction) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [isOpenModalApproveAction]);

    return(
        <>
<Modal   
          isOpen={isOpenModalApproveAction}
          onRequestClose={() => {
            setOpenModalApproveAction(false);
          }}
               
          style={modalStyles}
          contentLabel="More info modal"     
        >
  <Container>
        <SvgButton
             onClick={() => {
                setOpenModalApproveAction(false);
             }}>
              <svg width= '24px' height='24px'>
                  <use xlinkHref={sprite + '#icon-x'} />
              </svg> 
        </SvgButton>

            <Img src={catLogout} alt="cat" />

        <Text>Already leaving?</Text>
        <ContainerButton>
            <Button type="button" onClick={handlLogout}>Yes</Button>
            <Button type="button" onClick={() => setOpenModalApproveAction(false)}>Cancel</Button>
        </ContainerButton>

  </Container>
  
        </Modal> 
        </>
    )
}
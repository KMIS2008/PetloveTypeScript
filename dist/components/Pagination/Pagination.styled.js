import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';
export const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
`;
export const Button = styled.button `
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
fill: currentColor;
border: 1px solid #2626260D;
text-align: center;

font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
color: #262626;

&:hover{
    background-color: ${p => p.theme.colors.yellow};
    color:   ${p => p.theme.colors.white};

}
`;
export const ButtonNext = styled.button `
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
border: 1px solid #2626260D;
text-align: center;
font-size: 20px;

&:hover{
    color:  #262626;
    border: 1px solid #26262633;
}
`;
export const StyledRiArrowLeftDoubleFill = styled(RiArrowLeftDoubleFill) `
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`;
export const StyledIoIosArrowBack = styled(IoIosArrowBack) `
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`;
export const StyledIoIosArrowForward = styled(IoIosArrowForward) `
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`;
export const StyledArrowRightDoubleFill = styled(RiArrowRightDoubleFill) `
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`;
//# sourceMappingURL=Pagination.styled.js.map
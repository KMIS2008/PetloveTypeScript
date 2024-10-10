import styled from "styled-components";
import { Field } from 'formik';
export const Container = styled.div `
margin-bottom: ${p => p.theme.spacing(10)};
padding: ${p => p.theme.spacing(4)};
border-radius: 30px;
background-color: #FFF4DF;
`;
export const ContainerTabletSelect = styled.div `
@media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
    justify-content: start;
    align-items: center;
}

     @media (min-width: 1280px) {
      flex-wrap: nowrap;
    } 
`;
export const ContainerSelect = styled.div `
display: flex;
gap: ${p => p.theme.spacing(2)};
margin-bottom: ${p => p.theme.spacing(4)};

flex-basis: 55%; 

@media (min-width: 1280px) {
flex-basis: 50%; 
margin-bottom:0%;
}
`;
export const CustomSelect = styled(Field) `
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border-radius: 30px;
  border: none;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #262626;

  &:focus {
    outline: none;
    color: ${(p) => p.theme.colors.yellow};
  }

  &:hover {
    color: #26262699;
    border: 1px solid #F6B83D;
  }

  @media (min-width: 768px) {
flex-basis: 50%; 
}
`;
export const CustomSelectType = styled(Field) `
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border-radius: 30px;
  border: none;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #262626;

  &:focus {
    outline: none;
    color: ${(p) => p.theme.colors.yellow};
  }

  &:hover {
    color: #26262699;
    border: 1px solid #F6B83D;
  }

  @media (min-width: 768px) {
flex-basis: 30%; 
}
`;
export const Option = styled.option `

  border: none;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #26262699;

  &:hover {
    color: ${(p) => p.theme.colors.yellow};
  }
`;
export const ContainerSvg = styled.div `
position: relative;
align-items: center;
  margin-top: 20px;
@media (min-width: 768px) {
  flex-basis: 30%; 
  height: 48px;
  margin-top: 0;
}
`;
export const Svg = styled.svg `
position: absolute;
top: 25%;
right: 10px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`;
export const SvgReset = styled.svg `
position: absolute;
top: 25%;
right: 40px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`;
export const Reset = styled.svg `
position: absolute;
top: 25%;
right: 5px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`;
export const Straight = styled.div `
margin-top: ${(p) => p.theme.spacing(2)};
margin-bottom: ${(p) => p.theme.spacing(4)};
width: 100%;
border: 1px solid #2626261A;
`;
export const RadioGroup = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const RadioButtonLabel = styled.label `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border: none;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.white};
  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1,29;
  letter-spacing: -0.03em;
  text-align: left;

  color: #262626;

  &:hover {
    background-color: ${(p) => p.theme.colors.yellow};
    color:${(p) => p.theme.colors.white};
  }
`;
export const RadioButton = styled(Field) `
 
  display: none;

  &:checked + ${RadioButtonLabel} {
    background-color: ${(p) => p.theme.colors.yellow};
    color: ${(p) => p.theme.colors.white};
  }
`;
export const Button = styled.button `
width: 123px;
height: 42px;
border-radius: 30px;

color: #262626;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,5;
letter-spacing: -0.03em;
background-color: #FFFFFF;
border: 1px solid #F6B83D;

&:hover{
    background-color: #F6B83D;
    color: #FFFFFF;
}
`;
//# sourceMappingURL=NoticesFilters.styled.js.map
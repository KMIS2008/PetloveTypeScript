import styled from 'styled-components';
export const Container = styled.div `
position: relative;
@media (min-width: 768px) {
    width: 230px;
  }
`;
export const Input = styled.input `
margin-bottom: ${p => p.theme.spacing(3)};
padding-left : ${p => p.theme.spacing(3)};
width: 100%;
height: 42px;

font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: left;

border-radius: 30px;
border: 1px solid #26262626;

&::placeholder {
font-size: 14px;
font-weight: 500;
line-height: 1,29;
color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border: 1px solid ${p => p.theme.colors.yellow}
  }

  @media (min-width: 768px) {
    width: 230px;
    height: 48px;
  }

  @media (min-width: 1280px) {
   margin-bottom:0;
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
//# sourceMappingURL=SearchField.styled.js.map
import styled from "styled-components";
export const Container = styled.div `
position: relative;
padding-top: 40px;
`;
export const SvgButton = styled.div `
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
cursor: pointer;
`;
export const ContainerSvg = styled.div `
display: block;
margin: 0 auto;
margin-bottom: 20px;
padding:18px;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #FFF4DF;
`;
export const Img = styled.img `
display: block;
margin: auto;
`;
export const Title = styled.h2 `
margin-bottom: 20px;
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
letter-spacing: -0.03em;
text-align: center;
color: ${p => p.theme.colors.yellow};
`;
export const Text = styled.p `
margin-bottom: 20px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.02em;
text-align: center;
color: #2B2B2A;
`;
//# sourceMappingURL=ModalAttention.styled.js.map
import styled from "styled-components";
export const Container = styled.div `
display: flex;
justify-content: space-between;
`;
export const ContainerButton = styled.div `
position: relative;
width: 80px;
height: 38px;
`;
export const ButtonUser = styled.button `
display: block;

width: 80px;
height: 38px;
padding: 10px 14px;
gap: 4px;
border-radius: 30px;
background: ${p => p.theme.colors.yellow};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
color: ${p => p.theme.colors.white};
text-align: left;

cursor: pointer;
`;
export const Svg = styled.svg `
position: absolute;
top: 25%;
right:14px;
width: 18px;
height: 18px;
cursor: pointer;
`;
export const ContainerSvg = styled.div `
display: flex;
width: 38px;
height: 38px;
border-radius: 50%;
background: #FFF4DF;

&:hover{
    background: #FBE7C1;
}
`;
export const SvgEdit = styled.svg `
margin: auto;
width: 18px;
height: 18px;
cursor: pointer;
`;
//# sourceMappingURL=EditUserBtn.styled.js.map
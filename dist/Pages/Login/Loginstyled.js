import styled from "styled-components";
export const ContainerLogin = styled.div `

@media (min-width: 1280px) {
display: flex;
gap:116px
}
`;
export const Container = styled.div `
padding:0 ${p => p.theme.spacing(4)};

@media (min-width: 768px) {
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
width: 424px;
}
`;
export const Text = styled.p `
margin-bottom : ${p => p.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: left;

@media (min-width: 768px) {
font-size: 18px;
line-height: 1,22;
}
`;
export const TextRegister = styled.p `
font-family: Manrope;
font-size: 12px;
font-weight: 600;
line-height: 1,67;
letter-spacing: -0.03em;
text-align: left;
color: #262626;
text-align: center;
`;
export const Span = styled.span `
color: ${p => p.theme.colors.yellow};
cursor: pointer;
`;
//# sourceMappingURL=Loginstyled.js.map
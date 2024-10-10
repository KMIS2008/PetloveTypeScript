import styled from "styled-components";
export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: ${p => p.theme.spacing(4)};

padding: 245px 32px;
background: ${p => p.theme.colors.yellow};
border-radius: 30px;

@media (min-width: 768px) {
    border-radius: 60px;
    padding: 221px 32px;
}

@media (min-width: 1280px) {
    padding: 283px 109px;
    gap: ${p => p.theme.spacing(8)};
}
`;
export const Title = styled.h1 `
display: flex;
gap: 8px;
font-family: Manrope;
font-size: 120px;
font-weight: 800;
line-height: 1;
color: ${p => p.theme.colors.white};

@media (min-width: 768px) {
    font-size: 300px;
}
`;
export const Img = styled.img `
width: 109px;
height: 109px;
border-radius: 50%;
background: #FFFFFF1A;

@media (min-width: 768px) {
    width: 300px;
    height: 300px;
}
`;
export const Text = styled.p `
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
letter-spacing: -0.03em;
color:  ${p => p.theme.colors.white};

@media (min-width: 768px) {
    font-size: 24px;
}
`;
export const Button = styled.button `
width: 150px;
height: 42px;
padding: 12px 30px;
border-radius: 30px;

font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
letter-spacing: -0.03em;
color: ${p => p.theme.colors.yellow};

background: ${p => p.theme.colors.white};

@media (min-width: 768px) {
    width: 162px;
    height: 48px;
    padding: 14px 30px;
}
`;
//# sourceMappingURL=ErrorPage.styled.js.map
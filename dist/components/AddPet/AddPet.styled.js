import styled from "styled-components";
export const Container = styled.div `
display: flex;
justify-content: space-between;
`;
export const Title = styled.p `
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
color: #2B2B2A;

@media (min-width: 768px) {
    font-size: 18px;
}
`;
export const Button = styled.button `
width: 103px;
height: 38px;
padding: 10px 16px;
gap: 4px;
border-radius: 30px;
background: #F6B83D;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
cursor: pointer;

color: #FFFFFF;

&:hover{
    background: #F9B020;
}

@media (min-width: 768px) {
    width: 118px;
    height: 40px;
    font-size: 16px;
}
`;
//# sourceMappingURL=AddPet.styled.js.map
import styled from "styled-components";

export const ContainerButton = styled.div`
display: flex;
gap: 10px;
align-items: center;
`

export const Button = styled.button`
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
cursor: pointer;

&:hover{
    background-color: #F6B83D;
    color: #FFFFFF;
}
&:active{
    background-color: #F6B83D;
    color: #FFFFFF;
}
`

export const NoFavoriteText = styled.p`
margin-top: ${p=>p.theme.spacing(8)};
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: center;
color: #262626;
`

export const NoFavoriteSpan = styled.span`
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: center;
color:${p=>p.theme.colors.yellow}
`
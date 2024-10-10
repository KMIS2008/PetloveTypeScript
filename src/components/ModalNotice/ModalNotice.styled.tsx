import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding-top: 40px;
`

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
`
export const ContainerImg = styled.div`
position: relative;
`

export const Svg = styled.div`
position: absolute;
top: 0;
left: 30%;
display: block;
padding: 8px 14px 8px 14px;
width: 52px;
height: 34px;
border-radius: 30px;
background-color: #FFF4DF;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.02em;
text-align: center;

color: ${p => p.theme.colors.yellow};
`

export const Img = styled.img`
display: block;
margin: auto;
margin-bottom: ${p => p.theme.spacing(4)};
width: 120px;
height: 120px;
border-radius: 50%;
`

export const Title = styled.h2`
margin-bottom: 8px;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;

text-align: center;
color: #2B2B2A;
`
export const ContainerPopulate = styled.div`
display: flex;
justify-content: center;
gap: 64px;
margin-bottom: 8px;
`
export const Rating = styled.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
`
export const ContainerList= styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
margin-bottom: 14px;
`
export const TitleTable= styled.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`

export const Text= styled.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`

export const Comment= styled.p`
margin-bottom: 16px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`

export const ContainerButton= styled.div`
display: flex;
gap: 8px;
justify-content: center;
align-items: center;
`
export const ButtonAdd= styled.button`
display: flex;
margin: auto;
align-items: center;
justify-content: center;
gap: 4px;
background-color: ${p => p.theme.colors.yellow};
border-radius: 30px;
width: 135px;
height: 44px;

font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: center;
color:${p => p.theme.colors.white};
cursor: pointer;

&:hover{
    background-color: #F9B020;
}
`

export const ButtonContact= styled.a`
display: flex;
margin: auto;
align-items: center;
justify-content: center;
background-color: ${p => p.theme.colors.rose};
border-radius: 30px;
width: 135px;
height: 44px;

font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: center;
color:${p => p.theme.colors.yellow};

&:hover{
    background-color: #FBE7C1;
}
`
import styled from "styled-components";

export const ContainerDiscription = styled.div` 

padding: 60px 30px;
background-color: ${p=>p.theme.colors.yellow};
border-radius: 0 0 30px 30px;

@media (min-width: 768px) {
    border-radius: 0 0 60px 60px;

}

@media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding: 60px 60px 20px 64px;
    
}
`

export const Title = styled.h1`  
margin-bottom: 24px;
font-family: Manrope;
font-size: 50px;
font-weight: 700;
line-height: 0,96;
letter-spacing: -0.03em;
text-align: left;
color: rgba(255, 255, 255, 1);

@media (min-width: 768px) {
font-size: 80px;
}

@media (min-width: 1260px) {
    font-size: 90px;
    width: 760px;
}
`

export const Span = styled.span`  
color: rgba(255, 255, 255, 0.4);
`

export const Text = styled.h1`  
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: left;
color: rgba(255, 255, 255, 1);

@media (min-width: 768px) {
    margin-left: auto;
    font-size: 18px;
    line-height: 1,22;
    width: 255px;
}

@media (min-width: 1260px) {
    display: flex;
    align-items: flex-end;
    text-align: justify;
}
`

export const Img = styled.img`  
border-radius: 55px;
object-fit: cover;

@media (min-width: 768px) {
    border-radius: 90px;
}
`



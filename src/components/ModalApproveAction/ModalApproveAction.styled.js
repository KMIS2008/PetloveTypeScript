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
cursor: pointer;
`

export const Img = styled.img`
display: block;
margin: auto;
margin-bottom: ${p => p.theme.spacing(4)};
width: 80px;
height: 80px;
border-radius: 50%;
`

export const Text = styled.p`
margin-bottom: ${p => p.theme.spacing(4)};
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
letter-spacing: -0.03em;

text-align: center;
`

export const ContainerButton = styled.div`
display: flex;
gap: 10px;
`

export const Button = styled.button`
width: 134px;
height: 42px;
padding: 12px 44px;
border-radius: 30px;
background: #2626260D;
cursor: pointer;

&:hover{
    background: ${p => p.theme.colors.yellow};
    color: ${p => p.theme.colors.white};
}
`
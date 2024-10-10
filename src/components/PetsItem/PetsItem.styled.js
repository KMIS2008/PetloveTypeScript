import styled from  "styled-components";


export const DeleteButton = styled.button`
display: block;
width: 30px;
height: 30px;
border-radius: 50%;
background: #FFF4DF;

&:hover{
    background: #FBE7C1;
}
`

export const Container= styled.li`
margin-bottom: 20px;
padding: 16px;


display: flex;
gap: 16px;

border-radius: 20px;
border: 1px solid #2626261A;
`

export const Img= styled.img`

width: 66px;
height:66px;
flex-shrink: 0;
border-radius: 50%;
background: #FBE7C1;
`
export const ContainerInfo= styled.div`
width: 100%;
`
export const ContainerTitle= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Title= styled.h5`
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
text-align: left;
color: #2B2B2A;
`
export const ContainerTable= styled.div`
display: flex;
justify-content: space-between;
`

export const TitleTable= styled.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`
export const TextTable= styled.p`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,17;
letter-spacing: -0.02em;
color: #262626;
`





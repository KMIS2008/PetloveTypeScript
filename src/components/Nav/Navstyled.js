import styled from "styled-components";

export const Button = styled.button`
width: 119pxpx;
height: 48pxpx;
padding: 15px 39px 15px 39px;
margin-right: 10px;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.03em;
text-align: lcenter;

border-radius: 30px;
cursor: pointer;

border: 1px solid ${props => (props.$isHome ? '#FFFFFF' : '#262626')}; 
color: ${props => (props.$isHome ? '#FFFFFF' : '#262626')}; 

transition: all 0.3s ease;

&:hover{
    border: 1px solid ${p=>p.theme.colors.yellow};
}
`

export const Container = styled.div`

display: ${({ $grid }) => ($grid ? 'grid' : 'row')};
  grid-template-columns: ${({ $grid }) => ($grid ? ' 1fr' : 'none')};
  gap: ${({ $grid }) => ($grid ? '16px' : '0')};
`

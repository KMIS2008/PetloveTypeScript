import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const ContainerItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;

width: 335px;
margin: 0 auto;

@media (min-width: 768) {
flex: 0 1 calc(50% - 8px); 
box-sizing: border-box;
width: 340px;

}

@media (min-width: 1280) {
    width: 361px;
    flex:0 1 calc(33.33% - 8px)
}
`

export const Img = styled.img`
display: block;
width: 100%;
margin-bottom: ${p=>p.theme.spacing(4)};
border-radius: 15px;

@media (min-width: 768px) {
    height: 226px;
    
}
@media (min-width: 1280px) {
    width: 361px;
}
`

export const Title = styled.h3`
margin-bottom: ${p=>p.theme.spacing(4)};

font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: left;
color: #262626;
`

export const Text = styled.p`
margin-bottom: ${p=>p.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.02em;
text-align: left;

color: #262626;
`

export const Container = styled.div`
margin-bottom: ${p=>p.theme.spacing(4)};

display: flex;
justify-content: space-between;
`

export const Data = styled.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.02em;
text-align: left;
color: #26262680;
`

export const Link = styled(NavLink)`
margin-bottom: ${p=>p.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25px;
letter-spacing: -0.02em;
text-align: left;
color: ${p => p.theme.colors.yellow};
`
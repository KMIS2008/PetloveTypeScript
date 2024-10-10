import styled from "styled-components";

export const Img = styled.img` 
margin-bottom : ${p=>p.theme.spacing(14)};
border-radius: 55px;
object-fit: cover;

@media (min-width: 768px) {
    border-radius: 90px;
}
`
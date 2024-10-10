import styled from "styled-components";

export const Contater = styled.ul`
background: #F9F9F9;
list-style: none;
padding: 40px 0;

@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
`
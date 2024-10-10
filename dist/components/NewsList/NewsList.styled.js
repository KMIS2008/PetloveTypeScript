import styled from "styled-components";
export const List = styled.ul `
list-style: none;

display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) and (max-width: 1279px) {
        grid-template-columns: 1fr 1fr; 
    }

    @media (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr;  
    }
`;
//# sourceMappingURL=NewsList.styled.js.map
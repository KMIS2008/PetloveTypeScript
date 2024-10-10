import styled from "styled-components";
export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  margin: 0 auto;
  border-radius: 30px 30px 0 0;
  background-color: ${props => (props.$isHome ? '#F6B83D' : '#F9F9F9')}; 

  @media (min-width: 768px) {
    padding: 16px 32px;
  }

  @media (min-width: 1280px) {
    padding: 16px 64px;
}
`;
export const ContainerNav = styled.div `
display: flex;
gap: 10px;
align-items: center;
`;
export const Svg = styled.svg `
width: 32px;
height: 32px;
cursor: pointer;
`;
//# sourceMappingURL=AppBarstyled.js.map
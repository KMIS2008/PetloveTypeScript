import styled from 'styled-components';
export const BurgerMenuContainer = styled.div `

  position: fixed;
  margin: 0 auto;
  padding: 236px 0 28px 0;

  top: 0;
  left: auto;
  right: 0;
  width: 218px;
  height: 100%; 
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => (props.$isHome ? '#FFFFFF' : '#F6B83D')}; 
  
  z-index: 1;

  @media (min-width: 768px) {

    padding: 396px 0 28px 0;
    width: 374px;
}
`;
export const CloseIcon = styled.svg `
  position: absolute;
  top: 28px;
  right: 32px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const ContainerNav = styled.div `
margin: 0 auto;
`;
//# sourceMappingURL=BurgerMenu.styled.js.map
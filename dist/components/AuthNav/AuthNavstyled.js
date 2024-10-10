import styled from "styled-components";
export const ContainerButton = styled.div `
  display: ${({ $grid }) => ($grid ? 'grid' : 'flex')};
  grid-template-columns: ${({ $grid }) => ($grid ? '1fr' : 'none')};
  gap: ${({ $grid }) => ($grid ? '16px' : '0')};
  justify-items: center;
  flex-direction: ${({ $grid }) => ($grid ? 'initial' : 'row')};
  

  @media (min-width: 768px) {
    display: flex
  }
`;
export const ButtonLogin = styled.button `
  display: inline-block;
  margin-right: 10px;
  width: 119px;
  height: 50px;

  color: rgba(255, 255, 255, 1);
  background-color: ${p => p.theme.colors.yellow};
  text-transform: uppercase;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 1,25;
  letter-spacing: -0.03em;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    color: ${props => (props.$isHome ? '#F6B83D' : '#FFFFFF')}; 
    background-color: ${props => (props.$isHome ? '#FFF4DF' : '#F9B020')}; 
  }
`;
export const ButtonRegistration = styled.button `
  display: inline-block;
  width: 149pxpx;
  height: 50pxpx;
  padding: 15px 20px 15px 20px;
  border-radius: 30px;
  opacity: 0px;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 1,25;
  letter-spacing: -0.03em;
  text-align: center;

  color: ${p => p.theme.colors.yellow}; 
  background-color: ${p => p.theme.colors.rose}; 
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #FBE7C1;
  }
`;
//# sourceMappingURL=AuthNavstyled.js.map
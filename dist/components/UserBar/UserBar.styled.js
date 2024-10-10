import styled from 'styled-components';
export const Container = styled.div `
display: flex;
align-items: center;

img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }

  p {
    display: none;
    font-size: 16px;
    color: #333;
    font-family: Manrope;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.03em;

    @media (min-width: 768px) {
      display: block;

      img {
    width: 50px;
    height: 50px;
  }
    }
  }
`;
//# sourceMappingURL=UserBar.styled.js.map
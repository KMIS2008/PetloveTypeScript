import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p=>p.theme.spacing(3)};
`;

export const Text = styled.p`
  font-weight: 700;
  color: ${p=>p.theme.colors.darkblue};
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px 8px;
  border: 3px solid #f08080;
  color: ${p=>p.theme.colors.darkblue};
  background-color: #BC8F8F;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 12px;

  &:hover {
    background-color: ${p=>p.theme.colors.rose};
  }
`;
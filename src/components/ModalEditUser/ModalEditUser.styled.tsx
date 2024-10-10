import styled from "styled-components";

interface InputProps {
  $isError?: boolean;
  $isSuccess?: boolean;
}


export const Container = styled.div`
position: relative;
padding: 20px 0;
width: 293px;

@media (min-width: 768px) {
    padding: 50px 30px;
    width: 380px;
    }
`

export const SvgButton = styled.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
cursor: pointer;
`

export const Title = styled.h5`
margin-bottom: ${p=>p.theme.spacing(4)};
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
text-align: left;
color: #2B2B2A;
`

export const UserAvatar = styled.img`
margin: auto;
margin-bottom: 10px;

width: 80px;
height: 80px;

@media (min-width: 768px) {
    width: 86px;
    height: 86px;
    }
`;


export const ContainerInput = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input<InputProps>`
width: 100%;
  margin-bottom: 5px;
  padding: 9px 20px;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid #26262626;
  outline: none;

  border: 1px solid ${({ $isError, $isSuccess }) =>
    $isError ? 'red' : $isSuccess ? 'green' : '#08AA83'};
  
  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border: 1px solid ${p => p.theme.colors.yellow};
  }
`;


export const ButtonLoad = styled.button` 
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 42px;
gap: 8px;
border-radius: 30px;
border:none;

background-color: #FFF4DF;
cursor: pointer;

&:hover{
    background-color: #FBE7C1;
}
`
export const ButtonLoadSpan = styled.span` 
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,33;
letter-spacing: -0.02em;
color: #262626;
`

export const SuccessMessage = styled.p`
  margin-left: 10px;
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #08AA83;
`;

export const Error = styled.span`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,16;
letter-spacing: -0.03em;

  color: #EF2447;
  margin-bottom: 8px;
`;

export const Button = styled.button`
margin-top: 20px;
width: 100%;
height: 42px;

padding: 12px ;
gap: 10px;
border-radius: 30px;
color: #262626;
cursor: pointer;

&:hover {
  background-color: ${p => p.theme.colors.yellow};
  color: ${p => p.theme.colors.white};
}

    &::before {
      content: 'Go to profile';
    }

@media (min-width: 769px) {
    margin-top: 50px;
    &::before {
      content: 'Save';
    }
  }
`;
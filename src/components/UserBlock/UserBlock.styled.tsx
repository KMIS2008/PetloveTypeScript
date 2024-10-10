import styled from 'styled-components';

interface UserProps{
    $isDefault:boolean
}

export const UserInfo = styled.div`
margin-bottom: 40px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:10px;
    }
`;

export const UserAvatar = styled.img`
margin: auto;

width: 94px;
height: 94px;

@media (min-width: 768px) {
    width: 110px;
    height: 110px;
    }
`;

export const User = styled.p<UserProps>`
margin-bottom: 10px;
    font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.03em;

width: 100%;
height: 42px;
padding: 12px;
gap: 10px;
border-radius: 30px;
border: ${(props) => (props.$isDefault ? '1px solid #26262626' : '1px solid #F6B83D')};
`;

export const UserUpload = styled.p`
margin-bottom: 20px;

font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: center;

color: #262626;
cursor: pointer;

@media (min-width: 768px) {
    font-size: 14px;
    }
`;

export const UserTitle = styled.h5`
margin-bottom: 20px;

font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;

color: #2B2B2A;

@media (min-width: 768px) {
    font-size: 18px;
    }
`;


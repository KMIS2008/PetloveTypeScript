import styled from "styled-components";
export const Contaiter = styled.li `
padding: 12px 20px;
margin-bottom: 20px;
border-radius: 15px;
background: ${p => p.theme.colors.white};

display: flex;
flex-direction: column;
`;
export const ListTodayWorkDay = styled.ul `
display: flex;
margin-left: auto;
justify-content: center;
align-items: center;
 text-align: center; 
list-style: none;

height: 32px;
border-radius: 30px;
background: #FFF4DF;

font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.02em;
color: ${p => p.theme.colors.yellow}; 
`;
export const ItemTodayWorkDay = styled.li `
padding: 0 8px;
`;
export const ContainerFriend = styled.div `
display: flex;
gap: 20px;
`;
export const Title = styled.h4 `
margin-bottom: 20px;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
letter-spacing: -0.04em;
`;
export const Text = styled.p `
margin-bottom: 8px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
color: #26262680;
`;
export const TextSpan = styled.span `
color: #262626;
`;
//# sourceMappingURL=FriendsItem.styled.js.map
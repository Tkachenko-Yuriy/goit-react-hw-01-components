import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #f7f5f5;
  box-shadow: 6px 5px 11px 0px rgba(0, 0, 0, 0.75);
`;
/**
  |============================
  | Варіант через функцію та свич
  // const setBgColor = ({ isOnline, theme }) => {
  //     switch (isOnline) {
  //             case true:
  //                 return theme.colors.green;
  //             case false:
  //                 return theme.colors.red;
  //             default:
  //                 return theme.colors.white;
  //         }
  // }
  
  // export const Chip = styled.span`
  //   width: 15px;
  //   height: 15px;
  
  //   border-radius: 50%;
  //   color: #fff;
  
  //   background-color: ${setBgColor}
  // `;
  |============================
*/
/**
  |============================
  |Варіант через пропс
  |============================
  */
export const Chip = styled.span`
  width: 15px;
  height: 15px;

  border-radius: 50%;
  color: #fff;

  /* background-color: ${({ isOnline}) => (isOnline ? 'green' : 'red')}; */

background-color: ${({ isOnline, theme }) => (isOnline ? theme.colors.green : theme.colors.red)};

`;

export const Avatar = styled.img`
  margin-left: 15px;
  border-radius: 10px;
`;

export const Friendsname = styled.p`
  font-size: 24px;
  font-weight: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
`
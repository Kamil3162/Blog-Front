import styled from "styled-components";


export const UsersListContainer = styled.div`
    display: flex;
    flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const HeaderListContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  font-weight: 800;
`;

export const OnlineUserContainer = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 15px;
  background-color: #64676a;
  justify-content: center;
  align-items: center;
  
  img {
    flex: 1;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
`;

export const OnlineUserUsernames = styled.div`
    flex: 1;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
`;



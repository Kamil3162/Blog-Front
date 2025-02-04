import styled from "styled-components";

export const UserMeLeftPanel = styled.div`
  display: ${props => props.isColapsed ? "flex": "none"};
  flex-direction: column;
  justify-items: center;
  align-items: center;
  row-gap: 5px;
  width: 200px;
  padding: 15px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  position: fixed;
  top: 80px;
  left: 20px;
  z-index: 1000;

  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    margin-left: 5px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      color: #4a90e2;
      background-color: rgba(74, 144, 226, 0.1);
      border-radius: 5px;
    }
  }
`;

export const UserMeInfoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(7, 6, 6, 0.35);
  display: flex;
  position: relative;
  //padding: 10px;
`;

export const MainContentWrapper = styled.div`
  //flex: 1;
  //padding: 10px;
  //margin-left: 50px;
  //position: relative;
  //z-index: 1;
`;

export const NavbarWrapper = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  //position: relative;
  z-index: 1001;
  position: fixed;
  
  @media (max-width: 768px){
    margin-top: 0;  
  }
  
`;

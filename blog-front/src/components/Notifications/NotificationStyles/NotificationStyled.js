import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: absolute;
  width: 450px;
  height: 150px;
  background-color: #181818;
  z-index: 1;
  top: 50%;
  left: 40%;
  border-radius: 20px;

  body {
    visibility: hidden;
  }
`;

export const NotificationText = styled.p`
    font-family: 'Raleway',sans-serif;
    font-size: 25px;
    font-weight: 800;
  color: white;
`;

export const NotificationOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

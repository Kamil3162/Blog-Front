import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
  from {
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const NotificationContainer = styled.div`
  position: fixed;
  width: 90%;
  max-width: 450px;
  background-color: #181818;
  z-index: 1000;
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.5s ease-out forwards;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  min-height: 150px;
`;

export const NotificationText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const NotificationOptions = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

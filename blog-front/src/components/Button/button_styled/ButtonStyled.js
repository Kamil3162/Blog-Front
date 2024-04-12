import styled from "styled-components";
import {IconPanelContainer} from "../../AdminPanel/styles/LeftPanelStyled";

export const ButtonContainer = styled(IconPanelContainer)`
  position: absolute;
  z-index: 1;
  right: 10%;
  background-color: #ececec;
  border-radius: 15px;
  padding: 10px;
  border: none;
  transition: background-color 1s linear 0.1s; /* Add a delay of 0.5s */

  &:hover {
    background-color: red;
  }

  margin-left: 30px;
`;

export const ButtonModifyContainer = styled(ButtonContainer)`
    right: 5%;
    
    &:hover{
      background-color: purple;
    }
`;

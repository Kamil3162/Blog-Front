import styled from "styled-components";
import bc_esa from "../../../assets/icons/bc_esa.jpg";

import {LeftPanelElementText} from "./LeftPanelStyled";


export const AdminPanelContainer = styled.div`
  display: flex;
  min-width: 100vh;
  min-height: 100vh;
  //background-color: #c0bfbf;
  //background-repeat: no-repeat;
  //background: linear-gradient(to top left, #61dafb 0, #007bff 100);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const DashBoardContainer = styled.div`
    flex: 5;
    p{
      font-family: 'Lexend', sans-serif;
      font-size: 20px;
    }
`;

export const DashBoardBussinesInfoContainer = styled.div`
    display: flex;
  margin-left: 30px;
  gap: 100px; /* Adjust this value as needed */

`;
export const DashBoardBussinessElement = styled.div`
  background-color: #f7f7f7;
  display: flex;
  padding: 5px;
  width: 250px;
  border-radius: 15px;
  justify-content: center;
  
`;
export const DashBoardBussinessTextContainer = styled.div`
  //flex: 3;
  justify-content: center;
  justify-items: center;
  
  p {
    color: #070606;
    font-size: 20px;
    font-family: 'Lexend', sans-serif;
    font-weight: 800;
    margin-top: 8px; /* Adjusted for additional spacing */
    margin-bottom: 0;
  }

  h1 {
    color: #82899b;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;

  }
`;

export const DashBoardInfoContainer = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  margin-right: 30px;
  display: flex;
  gap: 50px;
  max-height: 400px;
`;

export const LeftDashBoardInfoContainer = styled.div`
  flex: 3;
  display: flex;
  border-radius: 15px;
  background-color: #f7f7f7;
  padding: 10px;
`;
export const LeftDashBoardImageContainer = styled.div`
  padding: 5px;
  
  img{
    height: auto;
    width: 100%;
    object-fit: contain; // Adjusts the image to fit within the container
  }
`;

export const RightDashBoardInfoContainer = styled.div`
    flex: 2;
    border-radius: 15px;
    background-color: #182d20;
    padding: 10px;
    margin-right: 20px;
    background-image: url("${bc_esa}");
`;


export const LeftDashBoardPanelEsa = styled.div`
    flex: 4;
  
`;
export const DashBoardInfoFont = styled(LeftPanelElementText)`
  font-weight: 1000;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const DashBoardPanelsFonts = styled.p`
    font-size: ${props => props.font_size}px;
    font-weight: ${props => props.font_weight}px;
    font-family: ${props => props.font_family};
    margin-bottom: ${props => props.margin_bottom}px;
    color : ${props => props.color};
    
`;
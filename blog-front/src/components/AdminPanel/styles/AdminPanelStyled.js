import styled from "styled-components";
import bc_esa from "../../../assets/icons/bc_esa.jpg";

import {LeftPanelElementText} from "./LeftPanelStyled";


export const AdminPanelContainer = styled.div`
  display: flex;
  min-width: 100vh;
  min-height: 100vh;
  //background-color: #c0bfbf;
  //background: linear-gradient(to top left, #61dafb 0, #007bff 100);
  //background-repeat: no-repeat;
  //background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-color: rgba(91, 88, 88, 0.07);
`;

export const DashBoardContainer = styled.div`
    flex: 5;
  
    p{
      font-family: 'Lexend', sans-serif;
      font-size: 20px;
      margin-left: 35px;
    }
`;

export const DashBoardBussinesInfoContainer = styled.div`
    display: flex;
  gap: 100px; /* Adjust this value as needed */
  width: 60%;
  //margin-left: 30px;
  margin: auto;
  justify-content: space-between;
`;
export const DashBoardBussinessElement = styled.div`
  //background: linear-gradient(135deg, rgba(179, 182, 182, 0.95) 0%, rgba(23, 76, 145, 0.42) 100%);
  background-color: rgba(169, 169, 169, 0.24);
  display: flex;
  padding: 24px;
  width: 300px;
  height: 50px;
  border-radius: 16px;
  justify-content: space-between;


`;
export const DashBoardBussinessTextContainer = styled.div`
  flex: 3;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 0 16px;
  gap: 10px;
  h1 {
    color: #070707;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    //margin: 0 0 8px 0;
    margin:5px;
    font-weight: 500;
  }

  p {
    color: #070606;
    font-size: 28px;
    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    margin: 0;
  }
`;

export const DashboardBussinessInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  &:hover img {
    opacity: 1;
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
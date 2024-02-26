import styled from "styled-components";


export const AdminPanelContainer = styled.div`
  display: flex;
  min-width: 100vh;
  min-height: 100vh;
  background-color: #fdfdfd;
`;

export const DashBoardContainer = styled.div`
    flex: 5;
`;

export const DashBoardBussinesInfoContainer = styled.div`
    display: flex;
  margin-left: 30px;
  gap: 100px; /* Adjust this value as needed */

`;
export const DashBoardBussinessElement = styled.div`
  background-color: #dee0e0;
  display: flex;
  padding: 15px;
  width: auto;
  border-radius: 15px;
`;
export const DashBoardBussinessTextContainer = styled.div`
    display: flex;
    flex-direction: column;
  p{
    color: white;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    margin-top: 0; /* Removes the top margin */
    margin-bottom: 10px; /* Adjust the bottom margin as needed */
    /* Alternatively, you could set both top and bottom margins at once:
    margin: 0 0 10px 0; */
  }
`;

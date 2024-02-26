import styled from "styled-components";


export const LeftPanelContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-items: center;
    margin-left: 20px;
`;

export const LeftPanelElement = styled.div`
  display: flex;
  margin-top: 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  background-color: #e5e3e3;
`;

export const IconPanelContainer = styled.div`
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-weight: 1000;
    border-bottom: 1px solid black;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
  
    img{
      width: auto;
      height: 5vh; /* Example: Set height relative to the viewport size */
    }
    
`;
export const LeftPanelElementText = styled.div`
    flex: 4;
    text-align: left;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    margin-left: 5px;
`;
export const LeftPanelElementIcon = styled.div`
  display: flex; /* Enables flexbox */
  justify-content: center; /* Centers children horizontally */
  align-items: center; /* Centers children vertically */
  flex: 1;
  padding: 5px;
  background-color: #b2519a;
  border-radius: 15px;

  justify-items: center;
  text-align: center;

  img {
    width: auto;
    height: 3vh;
  }
`;

export const BreakPanel = styled(LeftPanelElement)`
    background-color: inherit;
`;
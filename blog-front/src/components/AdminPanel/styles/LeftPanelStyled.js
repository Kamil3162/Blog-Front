import styled from "styled-components";


export const LeftPanelContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-items: center;
    margin-left: 20px;
    //background-color: #282c34;
    //opacity: 0.2;
    padding: 10px;
`;

export const LeftPanelElement = styled.div`
  display: flex;
  margin-top: 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  background-color: #dee0e0;
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
  h1{
    font-size: 20px;
    color: white;
    background:
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
  //justify-content: center; /* Centers children horizontally */
  align-items: center; /* Centers children vertically */
  padding: 5px;
  //background-color: #8899c5;
  border-radius: 15px;
  //height: 40px; /* Fixed height of the container */
  justify-items: center;

  img {
    max-height: 50px; /* Reduced to make the image smaller */
    object-fit: contain; /* Maintains aspect ratio without cropping */
    min-height: 30px; /* Adjusted down to allow the image to become smaller */
  }
`;

export const BreakPanel = styled(LeftPanelElement)`
    background-color: inherit;
    margin-top: 100px;
`;
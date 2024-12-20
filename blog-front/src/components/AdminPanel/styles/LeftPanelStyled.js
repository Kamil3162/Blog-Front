import styled from "styled-components";


export const LeftPanelContainer = styled.div`
  //flex: 1;
  width: 60px;
  height: 90vh;
  margin-top: 2rem;
  margin-left: 20px;
  border-radius: 20px;
  flex-direction: column;
  justify-items: center;
  background-color: rgba(7, 6, 6, 0.05);
  padding: 20px;
  border: 1px solid black;
`;

export const LeftPanelElement = styled.div`
  display: flex;
  margin-top: 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  //background-color: rgba(255, 255, 255, 0.9);

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 2px 2px 10px 5px;
    transition: all 0.2s ease-in-out;
  }
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
    color: black;
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
    max-height: 30px; /* Reduced to make the image smaller */
    object-fit: contain; /* Maintains aspect ratio without cropping */
    min-height: 30px; /* Adjusted down to allow the image to become smaller */
  }
  
  
  //&:hover {
  //  transition: all 0.5s ease-out;
  //  background: linear-gradient(135deg, #dde0ee 0%, #707072 100%);
  //}

`;

export const BreakPanel = styled(LeftPanelElement)`
    background-color: inherit;
    margin-top: 100px;
`;
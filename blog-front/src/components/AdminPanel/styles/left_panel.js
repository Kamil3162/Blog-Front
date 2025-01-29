import styled from "styled-components";


export const LeftPanelContainer = styled.div`
  @media (max-width: 600px){
    position: absolute;
    background-color: rgb(253, 253, 253);
    z-index: 1;
    top: 0;
    //padding: 20px;
    border-radius: 20px;
    //border-bottom: none;
    width: 85px;
    max-height: 600px;
    margin-left: 25px;
    
  }
  //flex: 1;
  

  @media (min-width: 600px) {
    width: 60px;
    height: 90vh;
    margin-top: 2rem;
    margin-left: 20px;
    border-radius: 20px;
    flex-direction: column;
    justify-items: center;
    background-color: rgba(7, 6, 6, 0.05);
    padding: 20px;
    border: 1px solid #eeeeee;
  }

  img {
    //background-color: white;
    padding: 10px;
  }
`;

export const LeftPanelElement = styled.div`
  padding: 5px;
  
  @media (min-width: 600px){
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
  }
  
`;

export const IconPanelContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  max-height: 50px;
  width: 50px;
  z-index: 1;
  padding: 10px;
  position: relative;
  background-color: #879393;
  margin-left: 10px;
  border-radius: 20px;

  :hover {
  }

  h1 {
    font-size: 20px;
    color: black;
  }

  @media (min-width: 600px) {

    display: flex;
    font-family: 'Raleway', sans-serif;
    font-weight: 1000;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding-bottom: 15px;

    img {
      width: auto;
      height: 5vh; /* Example: Set height relative to the viewport size */
    }

    h1 {
      font-size: 20px;
      color: black;
    }
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
  display: flex;
  align-content: center;
  justify-content: center;

  img {
    max-height: 30px; /* Reduced to make the image smaller */
    min-height: 30px; /* Adjusted down to allow the image to become smaller */
  }
  
  
  @media (min-width: 600px){
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

import styled from "styled-components";

export const FooterContainer = styled.div`
  //position: static;
  bottom: 0;
  left: 0;
  height: 150px;
  padding: 20px;
  background-color: black;
`;

export const ConterContainerFooter = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  width: 100%; // Ensure the footer takes the full width of its parent
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
`;

export const ColumnFooterContainer = styled.div`
  flex: 1; // This ensures each column takes equal width
  display: flex; // Add this if you want to align the items inside the column
  flex-direction: column; // Stack the items vertically
  //justify-content: flex-start; // Center the content vertically inside the column
  //align-items: center; // Center the content horizontally inside the column
  padding: 0 10px; // Add some padding on the sides of each column for spacing, adjust as needed
  //text-align: center; // Ensure the text within each column is centered, if that's your desired outcom
  margin-bottom: 40px;
  text-align: right;
  
  p {
    margin-top: 5px; // Removes the top margin
    margin-bottom: 0; // Adjusts or removes the bottom margin as needed
    font-family: 'Raleway', sans-serif;
    color: ${props => props.fontColor || "#8b8b8f"} ;

  }

  h1 {
    font-size: 20px;
    margin-top: 5px; // Removes the top margin
    margin-bottom: 0; // Adjusts or removes the bottom margin as needed
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color: ${props => props.fontColor || "white"} ;
    
  }
`;

export const FooterImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px; // Adjust as needed
  overflow: hidden; // Ensures the image corners are clipped to the border radius
  border: 2px solid #000; // Example border; adjust color and width as desired
`;

export const FooterTitle = styled.p`
  font-family: 'Raleway',sans-serif;
  font-size: 15px;
  font-weight: 600;
`;
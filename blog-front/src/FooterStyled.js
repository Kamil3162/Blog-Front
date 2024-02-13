
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #110c42;
  height: 200px;
  border-radius: 15px;
  padding: 20px;
`;

export const ContentContainerFooterUpp = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbbbb;
  color: white;
  justify-content: space-between;
`;

export const ConterContainerFooter = styled(ContentContainerFooterUpp)`
    border: none;
`;

export const FooterImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px; // Adjust as needed
  overflow: hidden; // Ensures the image corners are clipped to the border radius
  border: 2px solid #000; // Example border; adjust color and width as desired
`;
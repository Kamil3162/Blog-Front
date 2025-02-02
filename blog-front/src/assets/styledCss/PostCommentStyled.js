import styled from "styled-components";
import {AddText, InputDataPostCreate} from "./PostCreateStyled";


export const CreateCommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; // Adjust the gap as needed
  margin: 0 auto; // Center the container
  max-width: 600px; // Adjust the max width as needed
`;

export const CreateCommentField = styled(AddText)`
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  padding: 20px; /* Adds some space inside the textarea */
  box-sizing: border-box; /* Ensures padding does not affect the overall dimensions */
  resize: vertical; /* Allows the user to resize the textarea vertically */
  font-family: 'Raleway', sans-serif;
  font-size: 16px; /* Sets a comfortable font size for reading and writing */
  line-height: 1.5; /* Improves the readability of multiline text */
  outline: none; /* emoves the default focus outline to use a custom style if desired */
  background-color: #fdfdfd;
  color: black;
  font-weight: 800;
  height: 100px;

  &:focus {
    border-color: black; /* Highlights the textarea when focused */
  }
`;

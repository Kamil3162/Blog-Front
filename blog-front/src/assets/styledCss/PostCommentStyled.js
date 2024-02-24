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
    height: 70px;
    background-color: white;
    padding: 5px;
    text-wrap: normal;
    margin-right: 10px;
  
  &:focus{
    border-color: black; /* Highlights the textarea when focused */
  }
`;

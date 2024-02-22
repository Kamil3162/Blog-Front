import styled from "styled-components";
import {AuthButtonComponent} from "./components/Button/AuthButtonComponent";


export const CommentsContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    width: auto;
`;
export const CommentContainer = styled.div`
    display: flex;
`;

export const PhotoContainer = styled.div`
    flex: 1;
    border-radius: 20px;
    justify-content: center; // This centers the image horizontally
    align-items: center; // This centers the image vertically
    overflow: hidden; // This ensures that any part of the image that exceeds the border-radius is clipped

  img {
    max-width: 100%;
    max-height: 90%;
    height: auto; // Maintain aspect ratio
    width: auto; // Maintain aspect ratio
  }
`;

export const TextTitleContainer = styled.div`
    flex: 7;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-bottom: 0;
  
  p{
    margin-right: 5px;
  }
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0;
`;

export const NameContainer = styled.div`
  font-family: 'Raleway',sans-serif;
  font-weight: 800;
  justify-content: flex-start;
  display: flex;
`;

// export const UploadButton = styled.button(AuthButtonComponent)`
//     margin-left: 0px;
// `;
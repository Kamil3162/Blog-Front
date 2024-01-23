import styled from "styled-components";

export const PostHeader = styled.div`
  display: block;
  font-size: 35px;
  font-family: 'Lexend', sans-serif;
  font-weight: 800;
  margin-bottom: 50px;
  border-bottom: 1px solid grey;
  
`;

export const SiteContentContainer = styled.div`
    margin-top: 10vh; // Adjust the value as needed
    width: 100%;
`;
export const HomeHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
  
  &:hover{
    color: purple;
  }
`;
export const HomeDate = styled.p`
  color: #868686;
  margin-bottom: 5px; // Adjust this value as needed
  padding: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
`;
export const HomeTitle = styled.p`
  margin-top: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 30px;
  padding: 0;
`;
export const HomeDataContainer = styled.div`
`;
export const HomePhotoContainer = styled.div`
    max-width: 100%;
  max-height: 100%;
  overflow: hidden; // This will prevent the image from overflowing the container

  img {
    max-width: 100%; // Sets the width of the image to 100% of the container
    height: auto; // Keeps the aspect ratio of the image
    object-fit: contain; // Adjusts the image to fit within the container
    border-radius: 10px;
  }
  
  @media (min-width: 500px){
    img{
      max-width: 60%;
      height: auto; // Keeps the aspect ratio of the image
      object-fit: contain; // Adjusts the image to fit within the container
    }
  }
`;
export const HomeContentContainer = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  color: black;
  margin-bottom: 20px;
  max-width: 50%;
  
  @media (min-width: 500px){
    img{
      max-width: 60%;
      height: auto; // Keeps the aspect ratio of the image
      object-fit: contain; // Adjusts the image to fit within the container
    }
  }
`;



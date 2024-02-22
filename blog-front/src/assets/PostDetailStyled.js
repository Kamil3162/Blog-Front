import styled from "styled-components";
import {HomePhotoContainer} from "./PostStyled";


export const PostDetailContainer = styled.div`
    text-align: center;
  padding: 10px;
`;

export const PostDetailHeader = styled.div`
    display: block;
  
  @media (min-width: 600px){
    padding-bottom: 20px;
    display: flex;
    background: linear-gradient(55deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, #FFF5FC 45%, #FFF5FC 45%);
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }
`;

export const PostDetailPhotoContainer = styled(HomePhotoContainer)`
  
    @media (min-width: 600px){
      display: flex;
      max-width: 80%;
      max-height: 60%;
      flex: 1;
      margin-right: -300px; // Adjust this value as needed
      justify-content: flex-end;
      
      img{
        border-radius: 0;
      }
    }
`;

export const PostDetailHeaderTitle = styled.div`
    height: auto;
    text-align: center;
`;

export const PostDetailContentContainer = styled.div`
    text-align: center;
`;

export const PostDetailContent = styled.div`
  text-align: left;
  margin:auto;
  font-family: 'Raleway',sans-serif;
  font-size: 20px;
  font-weight: 600;
  
  @media (min-width: 500px){
    width: 50%;
    text-align: left;
    margin:auto;
    font-family: 'Raleway',sans-serif;
    font-size: 25px;
    font-weight: 800;
  }
`;

export const PostDetailInformation = styled.div`
  @media (min-width: 600px){
    flex: 1;
    text-align: center;
    padding-left: 100px; // Adjust this value to match the negative margin
  }
`;
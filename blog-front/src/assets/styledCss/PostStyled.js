import styled, {keyframes} from "styled-components";
const fadeIn = keyframes`
    from{
      transform: translateY(20px);
    } 
    to{
      transform: translateY(0px);
    }
`;
export const PostHeader = styled.div`
  display: block;
  font-family: 'Lexend', sans-serif;
  font-weight: 800;
  margin-bottom: 50px;
  border-bottom: 1px solid #ddd;
  
  @media (min-width: 600px){
    flex: 2;
    margin-left: 100px;
    animation: ${fadeIn} 0.2s ease-out;

  }
  h1{
    font-size: 50px;
    font-family: 'Raleway', sans-serif;
  }
`;

export const SiteContentContainer = styled.div`
    display: block;
    padding: 10px;
    @media (min-width: 600px){
      margin-top: 10vh; // Adjust the value as needed
      width: 100%;
      display: flex;
    }
    
    
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

export const HomeEditdsadsadsadsadas = styled.input`
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  background-color: #fdfdfd;
  color: black;
  margin-bottom: 5px; // Adjust this value as needed
  padding: 10px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  &:focus{
    border: 1px solid red;
  }
`;

export const HomeTitlePost = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const HomeCategory = styled.p`
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  background-color:blue;
  color: #dee0e0!important;
  padding: 10px;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
`

export const HomeTitle = styled.p`
  margin-top: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  padding: 0;
  font-size: 2rem;
`;

export const HomeTitleEdit = styled.input`
  margin-top: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  padding: 10px;
  font-size: 2rem;
  text-align: center;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  background-color: #fdfdfd;
  
  
`;
export const HomeDataContainer = styled.div`
    width: 50%;
    height: auto;
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
  font-size: 20px;
  color: black;
  margin-bottom: 20px;
  max-width: 100%;
  overflow-wrap: break-word;
  
  @media (min-width: 500px){
    img{
      max-width: 60%;
      height: auto; // Keeps the aspect ratio of the image
      text-align: center;
    }
  }
`;

export const HomeContentText = styled.div`
  font-family: 'Raleway',sans-serif;
  text-align: left; // Align text to the left within the centered block
  display: inline-block; // Make the div inline so it takes only the necessary width
`;



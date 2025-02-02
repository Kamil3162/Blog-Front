import styled, { keyframes } from "styled-components";
import { HomePhotoContainer } from "./PostStyled";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const PostDetailContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ResetPasswordContainer = styled(PostDetailContainer)`
    //margin-top: 100px;
  width: 100%;
  height: 100%;
`

export const PostDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: auto;
  padding: 20px;
  transition: all 0.3s ease;

  @media (min-width: 600px) {
    padding-bottom: 40px;
    //background: linear-gradient(55deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, #FFF5FC 45%, #FFF5FC 45%);
    align-items: center;
    justify-content: center;
    min-height: 400px;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      right: -50%;
      bottom: -50%;
      background: linear-gradient(to right, rgba(255,255,255,0) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 80%);
      animation: ${shimmer} 5s infinite;
      transform: rotate(30deg);
    }
  }
`;
export const PostEditDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: auto;
  padding: 20px;
  transition: all 0.3s ease;

  @media (min-width: 600px) {
    padding-bottom: 40px;
    //background: linear-gradient(55deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, #FFF5FC 45%, #FFF5FC 45%);
    align-items: center;
    justify-content: center;
    min-height: 400px;
    position: relative;
    overflow: hidden;
  }
`;

export const PostDetailPhotoContainer = styled(HomePhotoContainer)`
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease;
  margin-bottom: 50px;
  max-width: 600px;
  max-height: 300px;

  img {
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    max-width: 80%;
    max-height: 60%;
  }

  @media (min-width: 600px) {
    display: flex;
    max-width: 1200px;
    max-height: 450px;
    flex: 1;
    z-index: 1;
    
    img{
      object-fit: cover;
    }
  }
`;

export const PostDetailHeaderTitle = styled.div`
  height: auto;
  align-content: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
  }
`;

export const PostDetailContentContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const PostDetailContent = styled.div`
  text-align: left;
  //margin: auto;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  color: #070707;

  @media (min-width: 500px) {
    width: 70%;
    font-size: 16px;
    font-weight: 700;
  }
`;
export const PostModifyArea = styled.textarea`
  text-align: left;
  //margin: auto;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  color: #070707;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 90%;
    height: 400px;
    padding: 10px;
    border-radius: 15px;
    font-weight: 700;
    background-color: #fdfdfd;
    border: 1px solid rgba(0, 0, 0, 0.18);
    font-size: 15px;
  }
  
  @media (min-width: 500px) {
    max-width: 100%;
    width: 90%;
    height: 90%;
    padding: 10px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 700;
    background-color: #fdfdfd;
    border: 1px solid rgba(0, 0, 0, 0.18);
  }
`;

export const PostDetailInformation = styled.div`
  margin-bottom: 70px;
  margin-top: 100px;
  
  @media (min-width: 600px) {
    flex: 1;
    text-align: center;
    animation: ${fadeIn} 0.5s ease-out 0.2s both;
  }
`;

export const PostModifyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

// code responsible for adjustment like icons to post detail
export const IconVote = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  padding: 5px;
  transition: all 0.3s ease-in-out;  // Add smooth transitions
  cursor: pointer;  // Show clickable cursor

  &:hover {
    transform: scale(1.1);  // Grow slightly on hover
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Add subtle shadow on hover
    background-color: ${props => props.backgroundColor};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: flex-end;  // 'right' is not a valid value, use flex-end
  gap: 20px;
  padding: 15px;  // Add some padding
`;
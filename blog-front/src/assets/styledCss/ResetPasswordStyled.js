import styled from "styled-components";


export const ImageResetPasswordContainer = styled.div`
    width: 20%;
    margin: auto;
  
   img {
     overflow: hidden;
     width: 70%;
     
  }
`;

export const ResetPasswordTitle = styled.p`
    margin-top: 40px;
    font-family: 'Raleway', sans-serif;
    font-weight: 1000;
    font-size: 35px;
`;

export const ResetPasswordDescription = styled.p`
    font-size: 15px;
    color: grey;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
`;

export const ResetPasswordForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const BackContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center; /* This centers child elements horizontally */
  
    img{
      width: 5%;
    }
  
  a{
    margin-left: 15px;
    font-size: 15px;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    text-decoration: none;
  }
`;
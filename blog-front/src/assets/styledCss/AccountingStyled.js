import styled from "styled-components";

export const AccountingContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh; // Use viewport height to ensure it stretches to the bottom
    overflow: hidden;
    padding: 0;
  
    p{
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 15px;
    }
    a{
      color: black;
    }
`;

export const UserDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px; // Adjust this value as needed to create space between FormField components
`

export const ImageAccount = styled.div`
    flex:1;
    display: none;
  
    @media (min-width: 640px){
        flex: 2;
        display: block;
        overflow: hidden;
        text-align: center;
        img {
          width: 100%; // Make the image fill the container width
          height: 100%; // Make the image fill the container height
          object-fit: cover; // Resize the image to cover the container while maintaining its aspect ratio
          float: left;
      }
    }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; // Center children horizontally
  width: 100%; // Adjust as needed
`;

export const AuthFields = styled.div`
    display: flex;
    flex:8;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    float: left;
    
   h1{
     font-family: 'Plus Jakarta Sans', sans-serif;
     font-size: 40px;
   }
`;

export const FormField = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 25px;
  justify-items: center;
`;


export const LoginInputLabel = styled.label`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  text-align: left;

  a{
    position: relative;
    text-align: right;
    color: #0d0c22;
    font-size: 14px;
    font-weight: normal;
    text-decoration: underline;
    float: right;
  }
`;

export const LoginInputField = styled.input`
  width: 35vh;
  border-radius: 10px;
  padding: 10px;
  height: 4vh;
  border: 1.5px solid #e7e7e9;

  &:hover {
    box-shadow: 1px 1px 2px 2px #4c6296;
    transition: 0.1s linear;
  }
  
`;

export const LabelContainer = styled.div`
    display: flex;
    margin-bottom: 0;
`;

export const LinkStyle = styled.p`
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
`;

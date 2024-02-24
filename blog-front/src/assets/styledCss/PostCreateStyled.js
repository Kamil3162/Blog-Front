import styled from "styled-components";


export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100vh;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  margin-bottom: 100px;
`;

export const AddFileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  cursor: pointer;
  margin: auto; // Add this to center the form itself if it's not already centered
  
  @media (max-width: 600px){
    height: 150px;
    width: 150px;
  }
`;

export const AddTitle = styled.input`
  font-size: 25px;
  text-align: center;
  width: 700px;
  padding: 5px;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  margin-bottom: 15px;
  color: black;
  background-color: inherit;
  border-bottom: 2px dashed white;
  
  &::placeholder {
    color: black; /* Adjust the opacity as needed */
  }
  @media (max-width: 600px){
    width: 200px;
  }
  @media (min-width: 1000px){
    width: 400px;
  }
`;

export const AddText = styled.textarea`
  width: 520px;
  height: 400px;
  margin: 10px auto 20px auto; /* Top, Right&Left, Bottom, Right&Left */
  border-radius: 15px;
  padding: 20px; /* Adds some space inside the textarea */
  box-sizing: border-box; /* Ensures padding does not affect the overall dimensions */
  resize: vertical; /* Allows the user to resize the textarea vertically */
  font-family: 'Raleway', sans-serif;
  font-size: 16px; /* Sets a comfortable font size for reading and writing */
  line-height: 1.5; /* Improves the readability of multiline text */
  outline: none; /* emoves the default focus outline to use a custom style if desired */
  background-color:#2138cd14 ;
  color: black;
  font-weight: 800;
  
  &::placeholder {
    color: black; /* Adjust the opacity as needed */
  }
  
  &:focus {
    border-color: #007bff; /* Highlights the textarea when focused */
  }
  
  @media (max-width: 600px){
    width: 320px;
  }
`;


export const InputDataPostCreate = styled.input`
    font-family: 'Raleway', sans-serif;
    width: 300px;
    padding: 10px;
    font-weight: 600;
    background-color:#2138cd14 ;
    border: 1px solid black;
    border-radius: 5px;
    margin: auto;
  
  @media (min-width: 600px){
    width: 520px; /* Max width for larger screens */
  }
`;

export const StyledSelect = styled.select`
  font-family: 'Raleway', sans-serif;
  width: 320px; /* Max width for larger screens */
  padding: 10px;
  font-weight: 600;
  background-color: #2138cd14; /* Slightly transparent blue */
  border: 1px solid black;
  border-radius: 5px;
  margin: 20px auto; /* Consolidated margin for top, bottom, and center alignment */
  
  option{
    font-weight: 800;
  }
  
  @media (min-width: 600px){
    width: 520px; /* Max width for larger screens */
    
  }
  
`;



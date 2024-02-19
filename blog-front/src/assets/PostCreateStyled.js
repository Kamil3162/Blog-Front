import styled from "styled-components";


export const PhotoContainer = styled.div`
    // responsible for display image ony my web page during update a photo
  //display: flex;
  //flex-direction: column;
  //height: 100vh;
  text-align: center;
  //justify-content: center;
  //padding: 20px;
  background-color: #d3d3d3;
  padding: 20px;
`;

export const AddFileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border: 2px dashed #914545;
  cursor: pointer;
  margin: auto; // Add this to center the form itself if it's not already centered
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
  
`;

export const AddText = styled.textarea`
  width: 700px;
  border: 1px solid black;
  height: 400px;
  margin: 10px auto 0 auto; /* Top, Right&Left, Bottom, Right&Left */
  border-radius: 15px;
  padding: 20px; /* Adds some space inside the textarea */
  box-sizing: border-box; /* Ensures padding does not affect the overall dimensions */
  resize: vertical; /* Allows the user to resize the textarea vertically */
  font-family: 'Raleway', sans-serif;
  font-size: 16px; /* Sets a comfortable font size for reading and writing */
  line-height: 1.5; /* Improves the readability of multiline text */
  outline: none; /* emoves the default focus outline to use a custom style if desired */
  background-color:#20285b ;
  color: white;
  font-weight: 800;
  &::placeholder {
    color: white; /* Adjust the opacity as needed */
  }
  &:focus {
    border-color: #007bff; /* Highlights the textarea when focused */
  }
  
`;




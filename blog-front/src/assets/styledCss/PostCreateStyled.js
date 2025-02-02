import styled from "styled-components";


export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  margin-bottom: 50px;
`;

export const AddFileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  cursor: pointer;
  padding-top: 10px;
  margin-top: 50px;
  
  @media (max-width: 600px){
    display: block;
    height: 450px;
    //margin-left: 10%;
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
    width: 300px;
    height: 200px;
    margin: 10px auto 20px auto;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    background-color: #fdfdfd;
    color: black;
    
    &::placeholder {
        color: black;
    }
    
    &:focus {
        outline: none;
    }
    
    @media (min-width: 600px) {
        width: 420px;
        height: 200px;
        margin: 10px auto 20px auto;
        border-radius: 15px;
        padding: 20px;
        font-size: 16px;
        line-height: 1.5;
        background-color: #fdfdfd;
        font-weight: 800;
    }
`;


export const InputDataPostCreate = styled.input`
    font-family: 'Raleway', sans-serif;
    width: 300px;
    padding: 10px;
    font-weight: 600;
    background-color: #fdfdfd;
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
  background-color: #fdfdfd;  border: 1px solid black;
  border-radius: 5px;
  margin: 20px auto; /* Consolidated margin for top, bottom, and center alignment */
  
  option{
    font-weight: 800;
  }
  
  @media (min-width: 600px){
    width: 520px; /* Max width for larger screens */
    
  }
  
`;
export const StyledPhotoTable = styled.table`
    
`



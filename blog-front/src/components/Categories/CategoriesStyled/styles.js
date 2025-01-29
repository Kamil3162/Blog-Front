import styled from "styled-components";
import {HomeCategory} from "../../../assets/styledCss/PostStyled";

export const CategoryCreateContainer = styled.div`
    
  flex-direction: row;
  display: block;
  
    @media(min-width: 600px){
      //display: flex;
      height: 650px;
      flex-direction: row;
      justify-content: space-between;
    }
`;

export const CategoryFieldsContainer = styled.div`
  text-align: center;
  
  @media(min-width: 600px){
    display: flex;
    flex: 3;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    //height: 100vh;
    text-align: center;
    padding-top: 30px;
  }
  
`;

export const CategoryUnderline = styled(HomeCategory)`
  text-decoration-line: underline;
  text-decoration-style: double;
  text-decoration-color: white;
`;
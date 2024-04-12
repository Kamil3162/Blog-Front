import styled from "styled-components";
import {HomeCategory} from "../../../assets/styledCss/PostStyled";

export const CategoryCreateContainer = styled.div`
    display: flex;
    height: 650px;
    flex-direction: row;
    justify-content: space-between;
`;

export const CategoryFieldsContainer = styled.div`
  display: flex;
  flex: 3;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  //height: 100vh;
  text-align: center;
  
`;

export const CategoryUnderline = styled(HomeCategory)`
  text-decoration-line: underline;
  text-decoration-style: double;
  text-decoration-color: white;
`;
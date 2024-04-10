import styled from "styled-components";


export const CategoriesContainer = styled.div`
  
  p{
    font-size: 15px;
    font-family: 'Raleway',sans-serif;
    font-weight: 800;
  }
  
    @media (min-width: 700px){
      padding: 20px;
      flex: 1;
      justify-content: flex-start;
    }
`;

export const CategoryTitle = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    font-family: 'Raleway',sans-serif;
    font-size: 25px;
    font-weight: 800;
  
`;

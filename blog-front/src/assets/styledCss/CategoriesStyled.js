import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from{
      transform: translateY(-20px);
    } 
    to{
      transform: translateY(20px);
    }
`;

const fadeIn1 = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const CategoriesContainer = styled.div`
  font-size: 20px;
  animation: ${fadeIn1} 1s ease-out;
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
    animation: ${fadeIn1} 1.3s ease-out;

`;

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


export const CategoryP = styled.p`
  box-sizing: border-box;
  display: block;
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  background-color: ${props => props.clicked ? "transparent" : "#111111"};
  padding: 5px 15px;
  border-radius: 10px;
  width: 100%;
  margin: 8px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const CategoriesContainer = styled.div`
  font-size: 20px;
  animation: ${fadeIn1} 1s ease-out;
  
  p{
    box-sizing: border-box;  // Include padding in width calculation
    display: inline-block;
    font-size: 15px;
    font-family: 'Raleway',sans-serif;
    font-weight: 800;
    background-color: ${props => props.clicked ? "#911111" : "transparent"};
    padding: 5px;
    border-radius: 10px;
    width: auto;
    margin-left: 5px;
    margin-right: 5px;
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

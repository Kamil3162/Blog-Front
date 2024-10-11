import styled, {keyframes} from "styled-components";

export const inputAnimation = keyframes`
     0% { background-position: -1000px 0; }
     100% { background-position: 1000px 0; }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PostListAllContainer = styled.div`
    padding: 20px;
    animation: ${inputAnimation} 5s infinite;
`;

export const PostListContainer = styled.div`
     
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;  
    transition: all 0.5s ease;
    
    @media (min-width: 600px){
    display: grid;
    grid-template-columns: 1fr 4fr;
    animation: ${fadeIn} 0.5s ease-out;
    
    &:hover p{
        color: purple;
      }
    }
    
    /* Apply the hover effect to all direct child paragraphs */
    & > p {
      transition: color 0.3s ease;
    }
    
    &:hover > p {
      color: purple;
    }
`;

export const PostListCategory = styled(PostListContainer)`
    flex: 1;
    display: block;
    padding: 10px;
`;

export const PostListPhoto = styled.div`
     @media (min-width: 600px){
         display: flex;
         justify-content: center;
         align-items: center;
     }
 `;


export const PostMovingContainer = styled.div`
  display: flex;
  width: 50%;
  margin:auto;
`;

export const PostMovingButton = styled.div`
 text-align: center;
  img{
   width: 25%;
   transition: transform 0.7s ease 0.1s; /* Add transition for smooth animation */
  }
 
 &:hover img{
    transform: translateX(10px);
  }
`;

export const PostBackButton = styled.div`
 text-align: center;
 img{
    width: 25%;
    transform: rotate(180deg);
  transition: transform 0.7s ease 0.1s; /* Add transition for smooth animation */
  
 }
 &:hover img{
  transform: rotate(180deg) translateX(10px); /* Apply translation transformation only during hover */
 }
 
`;
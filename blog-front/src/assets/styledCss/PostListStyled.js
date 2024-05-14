import styled from "styled-components";

export const PostListContainer = styled.div`
  
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
 
    @media (min-width: 600px){
      display: grid;
      grid-template-columns: 1fr 4fr;
      &:hover p{
        color: purple;
      }
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
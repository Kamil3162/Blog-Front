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

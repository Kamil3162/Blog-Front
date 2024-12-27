import styled from "styled-components";

export const InfoBlogsContainer = styled.div`
  padding: 10px;
  @media (min-width: 600px){
    margin-left: 30px;
    margin-right: 30px;

    background-color: #e5e3e3;
    border-radius: 15px;
    padding: 10px;
    margin-top: 30px;
  }
`;

export const InfoBlogTableth = styled.th`
  font-family: 'Raleway', sans-serif;
  max-width: 50px;
  width: auto;
  
  @media (min-width: 600px){
    min-width: 30px;
    color: #050505;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    opacity: 0.8;
    width: 200px;
  }
`;
export const InfoBlogTd = styled.td`
  width: 200px;
  text-align: center;
  font-family: 'Jost', sans-serif;
  font-weight: 800;
  font-size: 17px;
  color: #0a0909;
  
  img{
    width: 100%;
    height: 100%;
  }
`;

export const OwnderInforBlogTd = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    
  p{
    font-size: 15px;
  }
`
export const OwnderInfoPhotoBlog = styled.div`
  width: 100%;
  //background-color: #fafafa;
  padding: 5px;
  display: flex; 
  justify-content: flex-end;
;
  
  img {
    width: 30px;
    height: 30px;
    overflow: hidden;
    background-color: #fafafa;
    padding: 10px;
    border-radius: 40px;
    object-fit: cover;
  }
  
`;
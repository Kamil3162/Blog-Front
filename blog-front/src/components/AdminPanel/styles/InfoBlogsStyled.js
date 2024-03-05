import styled from "styled-components";

export const InfoBlogsContainer = styled.div`
  margin-left: 20px;
  background-color: #b9b9b9;
  border-radius: 15px;
  padding: 10px;
  margin-top: 30px;
`;

export const InfoBlogTableth = styled.th`
  min-width: 50px;
  color: #050505;
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  opacity: 0.8;
  width: 200px;
`;
export const InfoBlogTd = styled.td`
  width: 200px;
  text-align: center;
  font-family: 'Jost', sans-serif;
  font-weight: 800;
  font-size: 17px;
  color: #0a0909;
`;

export const OwnderInforBlogTd = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 15px;
`
export const OwnderInfoPhotoBlog = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: #fafafa;
  padding: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  
`;
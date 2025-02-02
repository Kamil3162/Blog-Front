import styled from "styled-components";

export const UserOnline = styled.div`
  display: flex;
  padding: 10px;
  max-width: 100%;  // Changed to max-width
  //min-width: 300px;   // Added min-width to prevent too small size
  margin-left: auto;  // Forces to right
  max-height: 30px;
  justify-content: right;
  border-radius: 10px 10px 0 0 ;
  background-color: white;
`;

export const PhotoHolder = styled.div`
  //width: 50px;
  //min-width: 50px; // Prevents shrinking
  //max-height: 50px; // Fixed height
  border-radius: 20px;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 20px;
    background-color: #d3cccc;
    padding: 5px;
  }
`;

export const UserDetail = styled.div`
  display: flex;
  max-width: 250px;
  width: 200px;
  height: 100%;
  text-align: center;
  //justify-items : center;
  justify-content: center;
  white-space: nowrap;  // Prevents text wrapping
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  
  @media (max-width: 768px){
    width: 90%;
  }
  
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OrganizationText = styled.span`
  color: #666;
  font-size: 13px;
  margin-right: 4px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 600px){
    display: block;
  }
`;

export const UserProfile1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

export const UserInformationContainer = styled.div`
  //background-color: rgba(147, 146, 146, 0.5);
  padding: 20px;
  //border-radius: 0 0 10px 10px;
  border-radius: 10px;
  width: 100%;

  @media (max-width: 600px) {
    width: 90%;
    height: 100%;
  }

`;

export const PersonalInfoShort = styled.div`
    height: 150px;
    display: flex;
    background-color: white;
    border-radius: 20px;
    align-items: center;
  
    @media (max-width: 768px){
      display: block;
      height: 100px;
      width: 100%;
      background-color: white;
      //margin-bottom: 100px;
    }
`;

export const PersonNamePosition = styled.div`
  height: 80%;
  max-height: 100px;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
  margin-left: 30px;
  border-right: 1px solid black;
  
  @media (max-width: 600px){
    width: auto;
    border-right: none;
    margin-bottom: 20px;
  }
  
`;
export const PersonImage = styled.image`
  display: flex;
  width: 60px;
  border-radius: 50%;
  //object-fit: cover;
  background-color: #61dafb;
  justify-content: center;
  text-align: center;
  min-width: 70px;
  height: 60px;
`;

export const PersonStaffInfo = styled.div`
    display: block;
    flex: 1;
    min-width: 300px;
    text-align: left;
  
  h1{
    font-size: 20px;
    font-family: 'Lexend', sans-serif;
    margin-bottom: 0;
    color: ${props => props.fontColor ? "black" : "blue"};
  }
  p{
    font-family: 'Lexend', sans-serif;
    font-size: 15px;
  }
`;
export const StyledH1 = styled.h1`
  font-size: ${props => props.fontSize ? "5px" : "10px"}
  font-family: 'Lexend', sans-serif;
  margin-bottom: 0;
  color: ${props => props.fontColor ? props.fontColor : "black"};
`;

export const UserInformationAccess = styled.div`
    display: flex;
    gap: 50px;
    margin-left: 50px;
  
  @media (max-width: 768px){
    display: block;
    gap: 0;
    margin-left: 0;
    height: 300px;
    background-color: white;
    border-radius: 20px;
  }
`;

export const UserInfoAccContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  
  h1{
    color: darkgray;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    margin: 0 10px 0 0;
  
  }
  p{
    color: black;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    margin: 0 ;
  }
  input{
    border-radius: 10px;
    border: 1px solid black;
    padding: 5px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
  }
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    justify-items: center;
  }
`;

export const PersonalInformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-top: 20px;

  @media (max-width: 768px){
    display: block;
    height: 300px;
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

export const PersonalInfoAdd = styled(PersonalInfoShort)`
    flex: 1;
    padding: 20px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    height: 600px;
  
    @media (max-width: 768px){
      height: 250px;
      margin-top: 200px;
      display: flex;
      width: 90%;
      //flex-direction: column;
      justify-content: center;
    }
    
`

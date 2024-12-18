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
  background-color: rgba(253, 253, 253, 0.8);
  padding: 20px;
  border-radius: 0 0 10px 10px;
  width: 100%;
`;

export const PersonalInfoShort = styled.div`
    max-height: 300px;
    height: 150px;
    display: flex;
    background-color: white;
    border-radius: 20px;
    align-items: center;
  
`;

export const PersonNamePosition = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
  margin-left: 30px;
  border-right: 1px solid black;
  
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
  }
  p{
    font-family: 'Lexend', sans-serif;
    font-size: 15px;
  }
`;

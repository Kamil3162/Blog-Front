import styled from "styled-components";


export const NavbarContainer = styled.div`
    /*
      using display flex my screen will ajust autotaticly during 
      making small screen
      
      justify co
     */
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px){
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 94px 1fr;
    }
`;

export const AuthButton = styled.button`
  display: none;
  background-size: auto;
  

  @media (min-width: 768px){
    display: block;
    font-family: 'Gothic A1', sans-serif;
    content: ${props => props.text};
    padding: 10px;
    font-weight: 1000;
    border-radius: 20px;
    width: 80px;
    height: 40px;
    font-size: 15px;
    border: none;
  }
  a{
    text-decoration: none;
  }
`;

export const AuthButtonCom = styled.button`
  background-size: auto;
  font-family: 'Gothic A1', sans-serif;
  content: "${props => props.text}"; // Use props.text directly
  padding: 10px;
  font-weight: 1000;
  border-radius: 20px;
  width: 160px; // Use props.width directly
  height: 50px; // Use props.height directly
  font-size: 15px; // Use props.font_size directly
  border: none;
  background: ${props => props.background || 'initial'}; // Use props.background directly
  color: ${props => props.color};

  @media (min-width: 768px) {
    display: block;
    font-family: 'Gothic A1', sans-serif;
    content: "${props => props.text}"; // Use props.text directly
    padding: 10px;
    font-weight: 1000;
    border-radius: 20px;
    width: ${props => props.width ? props.width + 'px' : '80px'}; // Use props.width directly
    height: ${props => props.height ? props.height + 'px ' : '40px'}; // Use props.height directly
    font-size: ${props => props.font_size || '15px'}; // Use props.font_size directly
    border: none;
    background: ${props => props.background || 'initial'}; // Use props.background directly
    color: ${props => props.color};
  }

  &:hover {
    background-color: rgba(13, 82, 225, 0.73); /* Replace with valid color values */
    transition: 0.1s linear background-color;
  }
`;

export const SignUpButton = styled(AuthButton)`
  background-color: #0f24a8;
  color: white;

`;

export const SearchField = styled.input`
    display: none;
  
    @media (min-width: 768px){
      display: block;
      background-color: inherit;
      border:none;
      outline: none;
      font-weight: 600;
      font-family: 'Raleway', sans-serif;
      color: black;
      font-size: 1.5vh;
    }
`;

export const SearchContainer = styled.div`
    width: 150px;
  
  @media (min-width: 1060px){
    /*
      this will work if screen will have minimum 768px
     */
    border-radius: 20px;
    background-color: #e7e7e7;
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 40px;
    width: 300px;
    justify-items: center;
    align-items: center;
  }
`;

export const LogBtn = styled.button`
    
`;

export const NavbarElementsContainer = styled.div`
    display: flex;
    justify-content: ${props => props.alignment};
    align-items: center;
    gap: 24px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  background-color: black;
  border-radius: 10px;
  border-top: 1px solid #e7e7e9;
  padding: 10px;
  width: 80%;
  gap: 10px;

  @media (min-width: 500px) {
    display: ${props => props.display ? "initial" : "none"};
    border: none;
  }
  
`;

export const NavigationElement = styled.div`
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    padding: 10px;
    //background-color: white;
    border-radius: 10px;
    max-width: 90%;
    color: white;
`;


export const NavbarElement = styled.div`
  display: flex;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 1000;
  width: 120px;
  height: 50px;
  align-items: center;

  &:hover {
    color: #656869;
    transition: 0.1s color linear;
  }
`;



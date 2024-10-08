import styled, {keyframes} from "styled-components";


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
  text-decoration: none;
  

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
    color: black;
    font-weight: 800;
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
  margin: auto;
  margin-top: 10px;

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
  a{
    color: white;
  }
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
    display: flex;
  
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
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  background-color: #2c3e50;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 15px;
  width: 85%;
  max-width: 300px;
  gap: 12px;
  animation: ${fadeIn} 0.3s ease-out;

  @media (min-width: 500px) {
    display: ${props => props.showOnSite ? "flex" : "none"};
    width: 200px;
    box-shadow: none;
    padding: 0;
    background-color: #f3f2f3;
  }
`;

export const NavigationElement = styled.div`
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  padding: 12px 15px;
  border-radius: 8px;
  color: #ecf0f1;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(236, 240, 241, 0.1);
    transform: translateX(5px);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #3498db;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: translateX(0);
    }
  }

  @media (min-width: 500px) {
    color: #2c3e50;
    padding: 8px 12px;

    &:hover {
      background-color: rgba(44, 62, 80, 0.1);
      transform: translateY(-2px);
    }
  }
`;


export const NavbarElement = styled.div`
  display: flex;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 1000;
  width: 200px;
  height: 50px;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    
    &:hover {
      color: blue;
      transition: 0.1s color linear;
    }
  }

  &:hover {
    color: #248db0;
    transition: 0.1s color linear;
  }
`;



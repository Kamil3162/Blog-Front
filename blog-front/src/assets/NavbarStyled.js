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
      display: grid;
      grid-template-columns: 1fr 94px 1fr;
    }
`;

export const AuthButton = styled.button`
  display: none;
  background-size: auto;


  @media (min-width: 768px){
    display: block;
    font-family: 'Plus Jakarta Sans', sans-serif;
    content: ${props => props.text};
    padding: 10px;
    font-weight: 1000;
    border-radius: 20px;
    width: 80px;
    height: 40px;
    font-size: 15px;
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
  display: block;
  position: absolute;
  z-index: 1;
  background-color: #fafafa;
  border-top: 1px solid #e7e7e9;
  padding: 10px;
  width: 80%;

  @media (min-width: 500px) {
    display: ${props => props.display ? "initial" : "none"};
    border: none;
  }
`;

export const NavigationElement = styled.div`
    width: 100%;
    font-family: 'DM Sans', sans-serif;

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



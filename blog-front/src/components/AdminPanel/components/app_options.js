import styled from "styled-components";

// Constants for consistent styling
const COLORS = {
    primary: "#1a73e8",
    secondary: "#5f6368",
    background: "#f8f9fa",
    white: "#ffffff",
    border: "#e0e0e0",
    text: {
        primary: "#202124",
        secondary: "#5f6368",
    },
    hover: {
        background: "#f1f3f4",
    }
};

const SHADOWS = {
    small: "0 1px 2px rgba(0, 0, 0, 0.1)",
    medium: "0 2px 4px rgba(0, 0, 0, 0.1)",
    large: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const TRANSITIONS = {
    default: "all 0.2s ease-in-out",
};

// Base container for options
export const OptionsContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 1600px;
  padding: 24px;
  margin: 0 auto;
  
  p{
    font-size: 16px;
    font-family: 'Lexend', sans-serif;
    color: ${COLORS.text.secondary};
    color: black;
    margin: 0;
    line-height: 1.5;
    
  }
`;

// Container for option changes with improved grid layout
export const OptionChangeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 20px 0;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

// Enhanced admin option container
export const OptionAdminContainer = styled.div`
  display: flex;
  width: calc(50% - 12px);
  min-width: 280px;
  background-color: ${COLORS.white};
  border-radius: 12px;
  padding: 24px;
  height: auto;
  min-height: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: ${SHADOWS.medium};
  transition: ${TRANSITIONS.default};
  
  &:hover {
    box-shadow: ${SHADOWS.large};
    transform: translateY(-2px);
  }

  p {
    margin: 0;
    font-size: 18px;
    color: ${COLORS.text.primary};
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Improved header component
export const TopHeader = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  border-radius: 12px;
  padding: 24px;
  box-shadow: ${SHADOWS.small};
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
    font-family: 'Lexend', sans-serif;
    color: ${COLORS.text.primary};
    margin: 0 0 8px 0;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-family: 'Lexend', sans-serif;
    color: ${COLORS.text.secondary};
    margin: 0;
    line-height: 1.5;
  }
`;

// Enhanced search container
export const UserSearchContainerAdmin = styled.div`
  margin: 20px 0;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${COLORS.border};
`;

// Improved table components
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid ${COLORS.border};
  background-color: ${COLORS.white};
  box-shadow: ${SHADOWS.small};
  margin-bottom: 50px;
`;

export const TableHeader = styled.div`
  display: flex;
  height: 56px;
  background-color: ${COLORS.background};
  border-bottom: 1px solid ${COLORS.border};
`;

export const TableHeaderElement = styled.div`
  display: flex;
  font-size: 14px;
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  flex: 1;
  color: ${COLORS.text.secondary};
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  
  &:not(:last-child) {
    border-right: 1px solid ${COLORS.border};
  }
`;

export const TableRow = styled.div`
  display: flex;
  height: 52px;
  font-size: 14px;
  font-family: 'Lexend', sans-serif;
  border-bottom: 1px solid ${COLORS.border};
  transition: ${TRANSITIONS.default};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${COLORS.hover.background};
  }
`;

export const TableCell = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: ${COLORS.text.primary};
  
  &:not(:last-child) {
    border-right: 1px solid ${COLORS.border};
  }
`;

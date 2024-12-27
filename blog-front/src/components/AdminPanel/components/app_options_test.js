import styled from "styled-components";

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

export const TableContainer = styled.div`
  width: 100%;
  background: ${COLORS.white};
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    border-radius: 8px;
    box-shadow: none;
    border: 1px solid ${COLORS.border};
  }
`;

export const TableHeader = styled.div`
  display: flex;
  background: ${COLORS.background};
  border-bottom: 1px solid ${COLORS.border};
  
  @media (max-width: 600px) {
    display: none;  // Hide header on mobile
  }
`;

export const TableHeaderElement = styled.div`
  flex: 1;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.text.secondary};
  text-align: left;
  font-family: 'Lexend', sans-serif;
  
  &:first-child {
    padding-left: 24px;
  }
  
  &:last-child {
    padding-right: 24px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.border};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${COLORS.hover.background};
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid ${COLORS.border};
    
    &:not(:last-child) {
      border-bottom: 1px solid ${COLORS.border};
    }
  }
`;

export const TableCell = styled.div`
  flex: 1;
  padding: 16px;
  font-size: 14px;
  color: ${COLORS.text.primary};
  display: flex;
  align-items: center;
  min-width: 0; // Enables text truncation
  
  &:first-child {
    padding-left: 24px;
  }
  
  &:last-child {
    padding-right: 24px;
  }

  // Handle overflow text
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  @media (max-width: 600px) {
    padding: 8px 0;
    
    &:before {
      content: attr(data-label);
      width: 120px;
      font-weight: 500;
      color: ${COLORS.text.secondary};
    }
    
    &:first-child {
      padding-left: 0;
    }
    
    &:last-child {
      padding-right: 0;
    }
  }
`;

// Status indicators
export const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  
  ${props => props.status === 'Active' && `
    background-color: #e6f4ea;
    color: #1e8e3e;
  `}
  
  ${props => props.status === 'Verified' && `
    background-color: #e8f0fe;
    color: #1a73e8;
  `}
  
  ${props => props.status === 'Inactive' && `
    background-color: #fce8e6;
    color: #d93025;
  `}
`;
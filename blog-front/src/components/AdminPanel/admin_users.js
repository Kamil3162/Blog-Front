import LeftPanel from "./components/left_panel";
import {
    OptionsContainer,
    TopHeader,
    UserSearchContainerAdmin,

} from "./components/app_options";
import {
    TableContainer,
    TableHeader,
    TableHeaderElement,
    TableRow,
    TableCell, StatusIndicator
} from "./components/app_options_test";
import {AdminPanelContainer} from "./styles/admin_panel";
import React, {useContext, useState} from "react";
import {SearchContainer, SearchField, SearchIconContainer} from "../../assets/styledCss/NavbarStyled";
import photo1 from "../../assets/icons/loop.png";
import PreviousButton from "../Button/button_previous";
import NextButton from "../Button/button_next";
import {PostMovingContainer} from "../../assets/styledCss/PostListStyled";
import styled from "styled-components";
import { Save, X } from 'lucide-react';
import {InputDataPostCreate} from "../../assets/styledCss/PostCreateStyled";
import {ButtonModify} from "./admin_categories";

const EditorContainer = styled.div`
  max-width: 42rem; // equivalent to max-w-2xl
  margin: 0 auto; // equivalent to mx-auto
  padding: 1rem; // equivalent to p-4
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem; // equivalent to rounded-lg
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); // equivalent to shadow-sm
  background-color: white;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem; // equivalent to space-y-4
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem; // equivalent to text-sm
  font-weight: 500; // equivalent to font-medium
  color: #374151; // equivalent to text-gray-700
  margin-bottom: 0.25rem; // equivalent to mb-1
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem; // equivalent to px-3 py-2
  border: 1px solid #d1d5db;
  border-radius: 0.375rem; // equivalent to rounded-md
  
  &:focus {
    outline: none;
    border-color: #3b82f6; // equivalent to focus:border-blue-500
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2); // equivalent to focus:ring-2 focus:ring-blue-500
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end; // equivalent to justify-end
  gap: 0.5rem; // equivalent to space-x-2
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  
  ${props => props.primary ? `
    background-color: #2563eb; // equivalent to bg-blue-600
    color: white;
    border: none;
    
    &:hover {
      background-color: #1d4ed8; // equivalent to hover:bg-blue-700
    }
  ` : `
    border: 1px solid #d1d5db;
    background-color: transparent;
    
    &:hover {
      background-color: #f9fafb; // equivalent to hover:bg-gray-50
    }
  `}
`;

const IconWrapper = styled.span`
  width: 1rem; // equivalent to w-4
  height: 1rem; // equivalent to h-4
  margin-right: 0.25rem; // equivalent to mr-1
`;

const InputData = styled(InputDataPostCreate)`
        width: 200px;
    `;


function AdminUsers(){
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState("");
    const [editID, setEditId] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        // handlePostSearch(searchTerm);
    }

    const handleEdit = (user_id) => {
        setEditId(user_id);
    }

    const handleSave = (user_id) => {
        setEditId("");
    }

    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            role: 'Admin',
            status: 'Verified',
            accountStatus: 'Active'
        },
        // Add more initial users...
    ]);

    const handleInputChange = (key, keyword, value) => {
        setUsers(users.map(user =>
            user.id === key
                ? { ...user, [keyword]: value }
                : user
        ));
    };

    return (
        <AdminPanelContainer>
            <LeftPanel />
            <OptionsContainer>
                <TopHeader>
                    <h1>Users</h1>
                    <p>Admin Dashboard > Users</p>
                </TopHeader>
                <UserSearchContainerAdmin>
                    <SearchContainer
                        backgroundColor="black"
                    >
                        <SearchField
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearchInputChange}
                            fontColor="white"
                        />
                        <SearchIconContainer
                            backgroundColor="white"
                            padding="7px"
                            borderRadius="20px"
                        >
                            <img src={photo1} width="20px" height="20px" onClick={handleSearchClick}/>
                        </SearchIconContainer>
                    </SearchContainer>
                </UserSearchContainerAdmin>
                <p>Admin Users</p>
                <TableContainer>
                    <TableHeader>
                        <TableHeaderElement>First Name</TableHeaderElement>
                        <TableHeaderElement>Last Name</TableHeaderElement>
                        <TableHeaderElement>Email</TableHeaderElement>
                        <TableHeaderElement>Role</TableHeaderElement>
                        <TableHeaderElement>Status</TableHeaderElement>
                        <TableHeaderElement>Account</TableHeaderElement>
                        <TableHeaderElement>Modify</TableHeaderElement>
                    </TableHeader>
                        {users.map(user => (  // Changed {} to () for implicit return
                            <TableRow key={user.id}>  {/* Added key prop */}
                                <TableCell data-label="First Name">
                                    <InputData
                                        value={user.firstName}  // Using user data instead of hardcoded
                                        disabled={user.id !== editID}  // Reversed logic - enabled when editing
                                        onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell data-label="Last Name">
                                    <InputData
                                        value={user.lastName}
                                        disabled={user.id !== editID}
                                        onChange={(e) => handleInputChange(user.id, 'lastName', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell data-label="Email">
                                    <InputData
                                        value={user.email}
                                        disabled={user.id !== editID}
                                        onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell data-label="Role">
                                    <InputData
                                        value={user.role}
                                        disabled={user.id !== editID}
                                        onChange={(e) => handleInputChange(user.id, 'role', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell data-label="Status">
                                    <StatusIndicator status={user.status}>
                                        {user.status}
                                    </StatusIndicator>
                                </TableCell>
                                <TableCell data-label="Account">
                                    <StatusIndicator status={user.accountStatus}>
                                        {user.accountStatus}
                                    </StatusIndicator>
                                </TableCell>
                                <TableCell data-label="Modify">
                                    {user.id !== editID ? (
                                        <ButtonModify onClick={() => handleEdit(user.id)}>  {/* Added onClick handler */}
                                            Modify
                                        </ButtonModify>
                                    ) : (
                                        <ButtonModify onClick={() => handleSave(user.id)}>  {/* Fixed event handler */}
                                            Save
                                        </ButtonModify>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableContainer>
                <PostMovingContainer>
                    <PreviousButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                    <NextButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                </PostMovingContainer>
            </OptionsContainer>

        </AdminPanelContainer>
    )
}

export default AdminUsers;
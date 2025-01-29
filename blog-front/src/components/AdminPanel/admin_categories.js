import LeftPanel from "./components/left_panel";
import {
    AdminPanelContainer,
} from "./styles/admin_panel";
import React, {useState} from "react";
import {
    OptionsContainer, TableCell, TableContainer, TableHeader, TableHeaderElement, TableRow,
    TopHeader,
    UserSearchContainerAdmin
} from "./components/app_options";
import {SearchContainer, SearchField, SearchIconContainer} from "../../assets/styledCss/NavbarStyled";
import photo1 from "../../assets/icons/loop.png";
import {PostMovingContainer} from "../../assets/styledCss/PostListStyled";
import PreviousButton from "../Button/button_previous";
import NextButton from "../Button/button_next";
import {StatusIndicator} from "./components/app_options_test";
import styled from "styled-components";

export const ButtonModify = styled.button`
  width: 75px;
  height: 36px;
  border-radius: 15px;
  background-color: #007bff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  border: none;
  color: white;
  font-size: 15px;
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 123, 255, 0.2);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
    );
    transform: translateX(-100%);
    transition: 0.6s;
  }

  &:hover::after {
    transform: translateX(100%);
  }

  /* Optional: Add focus state for accessibility */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }

  /* Optional: Add loading state */
  &.loading {
    opacity: 0.8;
    cursor: wait;
  }
`;

function AdminCategories() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState("");
    const [editID, setEditID] = useState(null);
    const [editedValues, setEditedValues] = useState({});

    const [exampleCategories, setExampleCategories] = useState([
        { id: 1, category_name: 'category1'},
        { id: 2, category_name: 'category2' }
    ]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        // Implementation for search
    };

    const handleEdit = (category) => {
        setEditID(category.id);
        setEditedValues(category);
    };

    const handleChange = (e) => {
        setEditedValues({
            ...editedValues,
            category_name: e.target.value
        });
    };

    const handleSave = (id) => {
        setExampleCategories(exampleCategories.map(category =>
            category.id === id ? {...category, ...editedValues} : category
        ));

        setEditID(null);
        setEditedValues({});
    };

    return (
        <AdminPanelContainer>
            <LeftPanel />
            <OptionsContainer>
                <TopHeader>
                    <h1>Categories</h1>
                    <p>Admin Dashboard > Categories</p>
                </TopHeader>
                <UserSearchContainerAdmin>
                    <SearchContainer backgroundColor="black">
                        <SearchField
                            type="text"
                            placeholder="Search..."
                            fontColor="white"
                            onChange={handleSearchInputChange}
                        />
                        <SearchIconContainer
                            backgroundColor="white"
                            padding="7px"
                            borderRadius="20px"
                        >
                            <img
                                src={photo1}
                                width="20px"
                                height="20px"
                                onClick={handleSearchClick}
                                alt="search"
                            />
                        </SearchIconContainer>
                    </SearchContainer>
                </UserSearchContainerAdmin>
                <p>Admin Categories</p>
                <TableContainer>
                    <TableHeader>
                        <TableHeaderElement>Category Name</TableHeaderElement>
                        <TableHeaderElement>Modification</TableHeaderElement>
                    </TableHeader>
                    {exampleCategories.map(category => (
                        <TableRow key={category.id}>
                            <TableCell>
                                <SearchField
                                    type="text"
                                    value={editID === category.id ? editedValues.category_name : category.category_name}
                                    onChange={handleChange}
                                    disabled={editID !== category.id}
                                />
                            </TableCell>
                            <TableCell>
                                {editID === category.id ? (
                                    <ButtonModify onClick={() => handleSave(category.id)}>
                                        Save
                                    </ButtonModify>

                                ) : (
                                    <ButtonModify onClick={() => handleEdit(category)}>
                                        Modify
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
    );
}

export default AdminCategories;
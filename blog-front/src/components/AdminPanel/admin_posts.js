import LeftPanel from "./components/left_panel";
import {
    AdminPanelContainer,
} from "./styles/admin_panel";

import React, {useContext, useState} from "react";
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
import {NavCon} from "../../context/NavbarContext";


function AdminPosts(){
    const [searchTerm, setSearchTerm] = useState("");
    const { handlePostSearch } = useContext(NavCon);
    const [currentPage, setCurrentPage] = useState("0");

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        handlePostSearch(searchTerm);

    }

    return (
        <AdminPanelContainer>
            <LeftPanel/>
            <OptionsContainer>
                <TopHeader>
                    <h1>Posts</h1>
                    <p>Admin Dashboard > Posts</p>
                </TopHeader>
                <UserSearchContainerAdmin>
                    <p>Search post by Post Title:</p>
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
                            <img src={photo1} width="20px" height="20px" onClick={handleSearchClick}/>
                        </SearchIconContainer>
                    </SearchContainer>
                </UserSearchContainerAdmin>
                <TableContainer>
                    <TableHeader>
                        <TableHeaderElement>Title</TableHeaderElement>
                        <TableHeaderElement>Created At</TableHeaderElement>
                        <TableHeaderElement>Updated At</TableHeaderElement>
                        <TableHeaderElement>Owner</TableHeaderElement>
                    </TableHeader>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>test</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>test@test.pl</TableCell>
                        <TableCell>Blogger</TableCell>
                    </TableRow>
                </TableContainer>
                <PostMovingContainer>
                    <PreviousButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                    <NextButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                    <p>Current page: {currentPage}</p>
                </PostMovingContainer>
            </OptionsContainer>
        </AdminPanelContainer>
    )
}

export default AdminPosts;
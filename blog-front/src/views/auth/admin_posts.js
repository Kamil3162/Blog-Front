import LeftPanel from "../../components/AdminPanel/components/LeftPanel";
import {
    AdminPanelContainer,
    DashBoardBussinesInfoContainer,
    DashBoardContainer,
    DashBoardInfoContainer
} from "../../components/AdminPanel/styles/AdminPanelStyled";
import {DASHBOARD_INFO} from "../../components/AdminPanel/constants/constant_panel";
import BusinessInfoCard from "../../components/AdminPanel/components/BusinessInfoCard";
import DashboardInfoPanel from "../../components/AdminPanel/components/DashboardInfoPanel";
import {InfoBlogsContainer} from "../../components/AdminPanel/styles/InfoBlogsStyled";
import PostsTable from "../../components/AdminPanel/components/PostsTable";
import React, {useContext, useState} from "react";
import {
    OptionsContainer, TableCell, TableContainer, TableHeader, TableHeaderElement, TableRow,
    TopHeader,
    UserSearchContainerAdmin
} from "../../components/AdminPanel/components/app_options";
import {SearchContainer, SearchField, SearchIconContainer} from "../../assets/styledCss/NavbarStyled";
import photo1 from "../../assets/icons/loop.png";
import {PostMovingContainer} from "../../assets/styledCss/PostListStyled";
import PreviousButton from "../../components/Button/PreviousButton";
import NextButton from "../../components/Button/NextButton";
import NavbarContext from "../../context/nav_contextes/nav_context";


function AdminPosts(){
    const [searchTerm, setSearchTerm] = useState("");
    const { handlePostSearch } = useContext(NavbarContext);
    const [currentPage, setCurrentPage] = useState("");

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
                    <SearchContainer>
                        <SearchField
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearchInputChange}
                        />
                        <SearchIconContainer>
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
                </PostMovingContainer>
            </OptionsContainer>
        </AdminPanelContainer>
    )
}

export default AdminPosts;
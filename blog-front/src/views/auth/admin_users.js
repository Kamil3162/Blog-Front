import LeftPanel from "../../components/AdminPanel/components/LeftPanel";
import {
    OptionsContainer,
    TopHeader,
    UserSearchContainerAdmin,
    TableContainer,
    TableHeader,
    TableHeaderElement,
    TableRow,
    TableCell
} from "../../components/AdminPanel/components/app_options";
import {AdminPanelContainer} from "../../components/AdminPanel/styles/AdminPanelStyled";
import React, {useContext, useState} from "react";
import {SearchContainer, SearchField, SearchIconContainer} from "../../assets/styledCss/NavbarStyled";
import photo1 from "../../assets/icons/loop.png";
import NavbarContext from "../../context/nav_contextes/nav_context";
import PreviousButton from "../../components/Button/PreviousButton";
import NextButton from "../../components/Button/NextButton";
import {PostMovingContainer} from "../../assets/styledCss/PostListStyled";


function AdminUsers(){
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
                        <TableHeaderElement>Verified</TableHeaderElement>
                        <TableHeaderElement>Active</TableHeaderElement>
                    </TableHeader>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Verified</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Verified</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Verified</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Verified</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Verified</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>test</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>test@test.pl</TableCell>
                        <TableCell>Blogger</TableCell>
                        <TableCell>Verified</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                </TableContainer>
                <PostMovingContainer>
                    <PreviousButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                    <NextButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                </PostMovingContainer>
            </OptionsContainer>
            <p>Top users</p>

        </AdminPanelContainer>
    )
}

export default AdminUsers;
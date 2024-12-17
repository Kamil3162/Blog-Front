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


function AdminUsers(){
    const [searchTerm, setSearchTerm] = useState("");
    const { handlePostSearch } = useContext(NavbarContext);

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
            </OptionsContainer>
            <p>Top users</p>

        </AdminPanelContainer>
    )
}

export default AdminUsers;
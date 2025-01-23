import LeftPanel from "../../components/AdminPanel/components/LeftPanel";
import {
    AdminPanelContainer,
} from "../../components/AdminPanel/styles/AdminPanelStyled";
import React, {useState} from "react";
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
                                    <button onClick={() => handleSave(category.id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button onClick={() => handleEdit(category)}>
                                        Modify
                                    </button>
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
import axios from "axios";
import React, {useState} from "react";
import {
    HomeCategory,
    HomeContentContainer, HomeContentText,
    HomeDate,
    HomeTitle,
    HomeTitlePost
} from "../../assets/styledCss/PostStyled";
import {createCategory} from "../../services/categories";
import {CategoryFieldsContainer} from "./CategoriesStyled/styles";
import {AddFileForm, InputDataPostCreate} from "../../assets/styledCss/PostCreateStyled";
import {AuthButtonComponent} from "../Button/auth_button";

function CategoryCreate(){

    const [category, setCategoryName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const status = createCategory(category);
        console.log(status);

        setCategoryName("");
        alert("wyslano data");
    }

    const handleInputChange = (e) => {
        setCategoryName(e.target.value);
    };

    return(
        <CategoryFieldsContainer>

            <HomeTitle>Create category</HomeTitle>
            <AddFileForm onSubmit={handleSubmit}>
                <InputDataPostCreate
                    placeholder="Category Name..."
                    value={category}
                    onChange={handleInputChange}

                />

                <AuthButtonComponent
                    width={450}
                    height={50}
                    background={"blue"}
                    color={"white"}
                    text="Create Category"/>
            </AddFileForm>
        </CategoryFieldsContainer>
    )
}

export default CategoryCreate;
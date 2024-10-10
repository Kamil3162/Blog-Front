import Navbar from "../../components/Navbar/Navbar";
import RolloutOptions from "../../components/RolloutOptions/RolloutOptions";
import ContentPart from "../../components/ContentPart/ContentPart";
import HeaderPost from "../../components/HeaderPost/HeaderPost";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import React, {useContext, useState} from "react";
import {PostListCategory, PostListContainer, PostListPhoto} from "../../assets/styledCss/PostListStyled";
import {
    HomeCategory,
    HomeContentContainer, HomeContentText,
    HomeDate,
    HomePhotoContainer,
    HomeTitle,
    HomeTitlePost
} from "../../assets/styledCss/PostStyled";
import blog_image from "../../assets/icons/blog_image.png";
import {
    CategoryCreateContainer,
    CategoryFieldsContainer, CategoryUnderline
} from "../../components/Categories/CategoriesStyled/CategoryCreateStyled";
import CategoryCreate from "../../components/Categories/CategoryCreate";
import {WindowSizeContext} from "../../context/WindowsSizeContext";
import {NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";

function CategoryCreateView(){

    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);

    console.log(width);
    console.log(isNavVisible);

    return(
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <CategoryCreateContainer>
                <PostListCategory>
                    <div>
                        <HomeTitlePost>
                            <HomeDate>DEC 19, 2023</HomeDate>
                            <CategoryUnderline>Interview</CategoryUnderline>
                        </HomeTitlePost>
                        <HomeTitle>4 Web Desgn Trends to Watch in 2024</HomeTitle>
                        <HomeContentContainer>
                            <HomeContentText>
                                Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                            </HomeContentText>
                        </HomeContentContainer>
                    </div>
                </PostListCategory>
                <CategoryCreate/>
            </CategoryCreateContainer>
            <Footer/>
        </HomeContainer>
    )
}

export default CategoryCreateView;
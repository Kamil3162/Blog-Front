import Navbar from "../../components/Navbar/navbar";
import RolloutOptions from "../../components/RolloutOptions/rollout";
import Footer from "../../components/Footer/footer";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import React, {useContext, useState} from "react";
import {PostListCategory} from "../../assets/styledCss/PostListStyled";
import {
    HomeContentContainer, HomeContentText,
    HomeDate,
    HomeTitle,
    HomeTitlePost
} from "../../assets/styledCss/PostStyled";

import {
    CategoryCreateContainer,
    CategoryUnderline
} from "../../components/Categories/CategoriesStyled/styles";
import CategoryCreate from "../../components/Categories/category_create";
import {WindowSizeContext} from "../../context/WindowsSizeContext";
import {NavigationVisibilityContext} from "../../context/NavigationVisibilityContext";


function CreateCategoryHelper({children}){
    return (
        <CategoryCreateContainer>
            <PostListCategory>
                <div>
                    <HomeTitlePost>
                        <HomeDate>DEC 19, 2023</HomeDate>
                        <CategoryUnderline>Interview</CategoryUnderline>
                    </HomeTitlePost>
                    <HomeTitle>4 Web Design Trends to Watch in 2024</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Gone are the days of aesthetics trumping experience.
                            Today, web design is all about crafting immersive experiences
                            that connect, captivate, motivate, and delight.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListCategory>
            {children}
        </CategoryCreateContainer>
    );
}
function CategoryCreateView(){

    const { width } = useContext(WindowSizeContext);
    const { isNavVisible, setIsNavVisible } = useContext(NavigationVisibilityContext);

    console.log(width);
    console.log(isNavVisible);

    return(
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <CreateCategoryHelper>
                <CategoryCreate/>
            </CreateCategoryHelper>
            <Footer/>
        </HomeContainer>
    )
}

export default CategoryCreateView;
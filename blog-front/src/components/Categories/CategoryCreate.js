import axios from "axios";
import {useState} from "react";
import {
    HomeCategory,
    HomeContentContainer, HomeContentText,
    HomeDate,
    HomeTitle,
    HomeTitlePost
} from "../../assets/styledCss/PostStyled";

function CategoryCreate(){

    const [categoryName, setCategoryName] = useState("");

    return(
        <div>
            <HomeTitlePost>
                <HomeDate>DEC 19, 2023</HomeDate>
                <HomeCategory>Interview</HomeCategory>
            </HomeTitlePost>
            <HomeTitle>4 Web Desgn Trends to Watch in 2024</HomeTitle>
            <HomeContentContainer>
                <HomeContentText>
                    Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                </HomeContentText>
            </HomeContentContainer>
        </div>
    )
}

export default CategoryCreate;
import {
    PostListContainer,
    PostListPhoto,
    PostMovingContainer,
    PostListAllContainer} from "../../../assets/styledCss/PostListStyled";
import blog_image from "../../../assets/icons/blog_image.png";
import {
    HomeCategory,
    HomeContentContainer,
    HomeContentText,
    HomeDate,
    HomePhotoContainer,
    HomeTitle,
    HomeTitlePost
} from "../../../assets/styledCss/PostStyled";
import NextButton from "../../Button/NextButton";
import React, {useEffect} from "react";
import PreviousButton from "../../Button/PreviousButton";
import {useContext} from "react";
import NavbarContext from "../../../context/nav_contextes/nav_context";

function PostList(){

    const { searchedPosts } = useContext(NavbarContext);

    return (
        <PostListAllContainer>
            <PostListContainer>
                <PostListPhoto>
                    <HomePhotoContainer>
                        <img src={blog_image}/>
                    </HomePhotoContainer>
                </PostListPhoto>
                <div>
                    <HomeDate>DEC 19, 2023</HomeDate>
                    <HomeTitle>0 Web Desgn Trends to Watch in 2024</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListContainer>
            <PostListContainer>
                <PostListPhoto>
                    <HomePhotoContainer>
                        <img src={blog_image}/>
                    </HomePhotoContainer>
                </PostListPhoto>
                <div>
                    <HomeTitlePost>
                        <HomeDate>DEC 19, 2023</HomeDate>
                        <HomeCategory>Interview</HomeCategory>
                    </HomeTitlePost>
                    <HomeTitle>1 Web Desgn Trends to Watch in 2024</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListContainer>
            <PostListContainer>
                <PostListPhoto>
                    <HomePhotoContainer>
                        <img src={blog_image}/>
                    </HomePhotoContainer>
                </PostListPhoto>
                <div>
                    <HomeDate>DEC 19, 2023</HomeDate>
                    <HomeTitle>2 Web Desgn Trends to Watch in 2024</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListContainer>

            <PostListContainer>
                <PostListPhoto>
                    <HomePhotoContainer>
                        <img src={blog_image}/>
                    </HomePhotoContainer>
                </PostListPhoto>
                <div>
                    <HomeDate>DEC 19, 2023</HomeDate>
                    <HomeTitle>3 Web Desgn Trends to Watch in 2024</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListContainer>
            <PostMovingContainer>
                <PreviousButton/>
                <NextButton/>
            </PostMovingContainer>
        </PostListAllContainer>
    )
}

export default PostList;

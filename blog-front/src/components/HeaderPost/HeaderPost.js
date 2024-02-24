import {
    HomeContentContainer, HomeContentText,
    HomeDate,
    HomeHeaderContainer,
    HomePhotoContainer,
    HomeTitle,
    PostHeader
} from "../../assets/styledCss/PostStyled";
import blog_image from "../../assets/icons/blog_image.png";
import PostList from "../PostList/PostList";


function HeaderPost({title}){
    console.log("Generowanie Header Post");
    return (
        <PostHeader>
            <h1>To jest rendering post</h1>
            {/*{title}*/}
            <HomeHeaderContainer>
                <HomeDate>DEC 19, 2023</HomeDate>
                <HomeTitle>4 Web Design Trends to Watch in 2024</HomeTitle>
                <HomePhotoContainer>
                    <img src={blog_image}/>
                </HomePhotoContainer>
                <HomeContentContainer>
                    <HomeContentText>
                        Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                    </HomeContentText>
                </HomeContentContainer>
            </HomeHeaderContainer>
            <PostList/>
        </PostHeader>
    )
}
export default HeaderPost;

import {
    HomeContentContainer,
    HomeDate,
    HomeHeaderContainer,
    HomePhotoContainer,
    HomeTitle,
    PostHeader
} from "../../assets/PostStyled";
import blog_image from "../../assets/blog_image.png";


function HeaderPost({title}){
    console.log("Generowanie Header Post");
    return (
        <PostHeader>
            To jest
            <br/>
                rendering post
            {title}
            <HomeHeaderContainer>
                <HomeDate>DEC 19, 2023</HomeDate>
                <HomeTitle>4 Web Design Trends to Watch in 2024</HomeTitle>
                <HomePhotoContainer>
                    <img src={blog_image}/>
                </HomePhotoContainer>
            </HomeHeaderContainer>
            <HomeContentContainer>
                Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
            </HomeContentContainer>

            To jest
            <br/>
            rendering post
            {title}
            <HomeHeaderContainer>
                <HomeDate>DEC 19, 2023</HomeDate>
                <HomeTitle>4 Web Design Trends to Watch in 2024</HomeTitle>
                <HomePhotoContainer>
                    <img src={blog_image}/>
                </HomePhotoContainer>
            </HomeHeaderContainer>
            <HomeContentContainer>
                Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
            </HomeContentContainer>
        </PostHeader>
    )
}
export default HeaderPost;

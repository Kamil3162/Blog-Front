import {PostListContainer, PostListPhoto} from "../../assets/PostListStyled";
import blog_image from "../../assets/blog_image.png";
import {HomeContentContainer, HomeContentText, HomeDate, HomePhotoContainer, HomeTitle} from "../../assets/PostStyled";

function PostList(){
    return (
        <div>
            <PostListContainer>
                <PostListPhoto>
                    <HomePhotoContainer>
                        <img src={blog_image}/>
                    </HomePhotoContainer>
                </PostListPhoto>
                <div>
                    <HomeDate>DEC 19, 2023</HomeDate>
                    <HomeTitle>4 Web Desgn Trends to Watch in 2024</HomeTitle>
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
                    <HomeTitle>4 Web Desgn Trends to Watch in 2024</HomeTitle>
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
                    <HomeTitle>4 Web Desgn Trends to Watch in 2024</HomeTitle>
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
                    <HomeTitle>4 Web Desgn Trends to Watch in 2024</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListContainer>
        </div>
    )
}

export default PostList;

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
import React, {useEffect, useState} from "react";
import PreviousButton from "../../Button/PreviousButton";
import {useContext} from "react";
import NavbarContext from "../../../context/nav_contextes/nav_context";
import {fetchPosts} from "../../../services/post";

function PostList() {
    const { searchedPosts } = useContext(NavbarContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts_data = await fetchPosts();
                setPosts(posts_data);
            } catch (error) {
                console.error("Failed to load posts:", error);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    return (
        <PostListAllContainer>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {posts.map((post, index) => (
                        <PostListContainer key={post.id || index}>
                            <PostListPhoto>
                                <HomePhotoContainer>
                                    <img src={blog_image} alt="Blog post" />
                                </HomePhotoContainer>
                            </PostListPhoto>
                            <div>
                                <HomeTitlePost>
                                    <HomeDate>DEC 19, 2023</HomeDate>
                                    <HomeCategory>{post.category?.category_name}</HomeCategory>
                                </HomeTitlePost>
                                <HomeTitle>{post.title}</HomeTitle>
                                <HomeContentContainer>
                                    <HomeContentText>
                                        {post.content}
                                    </HomeContentText>
                                </HomeContentContainer>
                            </div>
                        </PostListContainer>
                    ))}
                    <PostMovingContainer>
                        <PreviousButton />
                        <NextButton />
                    </PostMovingContainer>
                </>
            )}
        </PostListAllContainer>
    );
}

export default PostList;

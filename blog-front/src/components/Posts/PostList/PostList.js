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
import {fetchPosts} from "../../../services/post";
import {useNavigate} from "react-router-dom";
import {NavCon} from "../../../context/NavbarContext";

function PostList() {
    const { searchedPosts } = useContext(NavCon);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const { filteredPosts } = useContext(NavCon);

    const generatePostDetail = (postId) => {
        navigate(`/post-detail/${postId}`); // Navigate to post detail page
    };

    useEffect(() => {
        const loadPosts = async (currentPage) => {
            try {
                const posts_data = await fetchPosts(currentPage);
                setPosts(posts_data);
                setLoading(false);
                console.log(currentPage);
            } catch (error) {
                console.log("failed to load posts")
                // showNotification(error.message, NotificationType.ERROR); // Use it here
            }
        };
        loadPosts(currentPage);
    }, [currentPage]);

    return (
        <PostListAllContainer>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {posts.map((post, index) => (
                        <PostListContainer
                            key={post.id || index}
                            onClick={() => generatePostDetail(post.id)}
                        >
                            <PostListPhoto>
                                <HomePhotoContainer>
                                    <img src={blog_image} alt="Blog post" />
                                </HomePhotoContainer>
                            </PostListPhoto>
                            <div>
                                <HomeTitlePost>
                                    <HomeDate>DEC 19, 2023</HomeDate>
                                    <HomeCategory>{post.category}</HomeCategory>
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
                        <PreviousButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                        <NextButton page_number={currentPage} setCurrentPage={setCurrentPage}/>
                        <p>Current page: {currentPage}</p>
                    </PostMovingContainer>
                    <div>
                    </div>

                </>
            )}
        </PostListAllContainer>
    );
}

export default PostList;

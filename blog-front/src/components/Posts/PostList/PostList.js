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
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const {
        setPosts,
        setSearchedPosts,
        setFilteredPosts,
        filteredPosts
    } = useContext(NavCon);
    const navigate = useNavigate();

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const postsData = await fetchPosts(currentPage);
                setPosts(postsData);
                setSearchedPosts(postsData);
                setFilteredPosts(postsData);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load posts:", error);
                setLoading(false);
            }
        };

        loadPosts();
    }, [currentPage, setPosts, setSearchedPosts, setFilteredPosts]);

    const generatePostDetail = (postId) => {
        navigate(`/post-detail/${postId}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <PostListAllContainer>
            {filteredPosts.map((post) => (
                <PostListContainer
                    key={post.id}
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
                            <HomeContentText>{post.content}</HomeContentText>
                        </HomeContentContainer>
                    </div>
                </PostListContainer>
            ))}
            <PostMovingContainer>
                <PreviousButton
                    page_number={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <NextButton
                    page_number={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <p>Current page: {currentPage}</p>
            </PostMovingContainer>
        </PostListAllContainer>
    );
}

export default PostList;

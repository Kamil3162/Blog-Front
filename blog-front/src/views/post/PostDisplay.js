import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/Navbar";
import RolloutOptions from "../../components/RolloutOptions/RolloutOptions";
import PostDetail from "../../components/Posts/PostDetail/PostDetail";
import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {postDetail, postGenDetail} from "../../services/post";


function PostDisplay(){
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPostObj = async () => {
            const response = await postGenDetail(id);
            setPost(response);
            setLoading(false);
        }
        loadPostObj();
        console.log(post);

    }, [id]);
    if (loading) return <div>Loading...</div>;

    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <PostDetail post={post}/>
            <Footer/>
        </HomeContainer>
    )
}

export default PostDisplay;
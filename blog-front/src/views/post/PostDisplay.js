import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/Navbar";
import RolloutOptions from "../../components/RolloutOptions/RolloutOptions";
import PostDetail from "../../components/Posts/PostDetail/PostDetail";
import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import axiosClientAPI from "../../services/base";
import axios from "axios";


function PostDisplay(){

    console.log(process.env.REACT_APP_BACKEND_API_URL);

    const response = axiosClientAPI.get(`/posts/post/2`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });



    console.log(response);

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://kamilholub.pl/api/posts/post/2')
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        console.log(post);
        // setLoading(false);
    }, [id]);

    // if (loading) return <div>Loading...</div>;

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
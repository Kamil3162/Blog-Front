import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../../components/Navbar/Navbar";
import RolloutOptions from "../../components/RolloutOptions/RolloutOptions";
import PostDetail from "../../components/Posts/PostDetail/PostDetail";
import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {postDetail, postGenDetail} from "../../services/post";
import axiosClientAPI from "../../services/base";
import axios from 'axios';

function PostDisplay(){
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

   console.log(`${process.env.REACT_APP_BACKEND_API_URL}/posts/post/2`);
   console.log(id);

   const response = axios.get('https://kamilholub.pl/api/posts/post/?post_id=2');
   const response1 = axios.get('/api/posts/post/?post_id=2');


    console.log(response);

    //useEffect(() => {
     //   const loadPostObj = async () => {
      //      const response = await postGenDetail(2);
      //      setPost(response);
       //     setLoading(false);
       // }
        //loadPostObj();
        //console.log(post);

   // }, [id]);
    //if (loading) return <div>Loading...</div>;
//   useEffect(() => {
//    fetch('https://kamilholub.pl/api/posts/post/2', {
//        method: 'GET',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//    })
//    .then(response => response.json())
//    .then(data => {
//        setPost(data);
//        setLoading(false);
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//}, [id]);

  // if (loading) {
   // return <p>Loading...</p>; // Wyświetlamy komunikat ładowania
  //}
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

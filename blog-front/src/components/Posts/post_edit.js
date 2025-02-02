import React, {useState} from "react";
import {
    PostDetailContainer, PostDetailContent, PostDetailHeader,
    PostDetailHeaderTitle,
    PostDetailInformation, PostDetailPhotoContainer, PostEditDetailContainer, PostModifyArea
} from "../../assets/styledCss/PostDetailStyled";
import styled from "styled-components";
import {HomeDate, HomeEdit, HomeEditdsadsadsadsadas, HomeTitle, HomeTitleEdit} from "../../assets/styledCss/PostStyled";
import blog_image from "../../assets/icons/blog_image.png";
import {HomeContainer} from "../../assets/styledCss/HomeStyled";
import Navbar from "../Navbar/navbar";
import RolloutOptions from "../RolloutOptions/rollout";
import PostDetail from "./post_detail";
import Footer from "../Footer/footer";
import {AuthButtonComponent} from "../Button/auth_button";

// TODO : add request to api
export const PostModifyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
  
    @media (max-width: 700px){
        display: block;
    }
`;

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  /* For mobile devices */
  @media (max-width: 768px) {
    //margin-top: 30px;
  }

  /* For tablets */
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 75px;
  }

  /* For large screens */
  @media (min-width: 1025px) {
    margin-top: 105px;
  }
`;
function PostModify(){
    const [title, setTitle] = useState("fdsfds");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");


    const handleDateChange = (e) => {
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <>
            <PostModifyContainer>
                <div>
                    <PostEditDetailContainer>
                        <PostDetailInformation>
                            <PostDetailHeaderTitle
                                className="post-title">
                                <HomeTitleEdit type="text" value="Test"/>
                            </PostDetailHeaderTitle>
                            <HomeEditdsadsadsadsadas
                                type="text"
                                value={title}
                                onChange={handleContentChange}
                            />
                        </PostDetailInformation>
                        <PostDetailPhotoContainer>
                            <img src={blog_image}/>
                        </PostDetailPhotoContainer>
                    </PostEditDetailContainer>
                </div>
                <ResponsiveContainer>
                    <PostModifyArea
                        className="post-content"
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </PostModifyArea>
                    <AuthButtonComponent
                        width={150}
                        height={50}
                        background={"blue"}
                        color={"white"}
                        text="Send"/>
                </ResponsiveContainer>

            </PostModifyContainer>
        </>

    )
}

function PostEditComponent(){
    return (
        <HomeContainer>
            <Navbar/>
            <RolloutOptions/>
            <PostModify/>
            <Footer/>
        </HomeContainer>
    )
}

export default PostEditComponent;
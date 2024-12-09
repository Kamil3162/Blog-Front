import {
    PostDetailContainer, PostDetailContent, PostDetailContentContainer,
    PostDetailHeader,
    PostDetailHeaderTitle,
    PostDetailInformation,
    PostDetailPhotoContainer, PostModifyContainer
} from "../../../assets/styledCss/PostDetailStyled";
import blog_image from "../../../assets/icons/blog_image.png";
import {HomeDate, HomePhotoContainer, HomeTitle} from "../../../assets/styledCss/PostStyled";
import Footer from "../../Footer/Footer";
import {
    CommentContainer,
    CommentsContainer,
    NameContainer,
    PhotoContainer, TextContainer,
    TextTitleContainer
} from "../../../CommentsStyled";
import Photo from "../../../assets/icons/Photo.png";
import {CreateCommentContainer, CreateCommentField} from "../../../assets/styledCss/PostCommentStyled";
import {AuthButtonComponent} from "../../Button/AuthButtonComponent";
import React, {useState} from "react";
import AddComment from "../../Comments/AddComment";
import DeleteButton from "../../Button/DeleteButton";
import ModifyButton from "../../Button/ModifyButton";
import Notification from "../../Notifications/Notification";
import CancelButton from "../../Button/CancelButton";

function PostDetail({post}){ // add here button edit

    const [notificationVisibility, setNotificationVisibility] = useState(false);

    const [modifyStatus, setModifyStatus] = useState(false);
    const [postDeleteStatus, setPostDeleteStatus] = useState(false);

    const [postDeleteApprove, setPostDeleteApprove] = useState(false);
    const [postUpdateApprove, setPostUpdateApprove] = useState(false);


    const highlightStyle = {
        border: "1px solid #ccc",
        padding: "5px"
    };

    const handleModifyBtnClick = (e) => {
        console.log("handle modify click");
        console.log(e);
        setModifyStatus(true);
    };

    const handleModifyElements = (e) => {
        const title = document.querySelector('.post-title');
        const content = document.querySelector('.post-content');

        title.style.border = highlightStyle.border;
        title.style.padding = highlightStyle.padding;
        content.style.border = highlightStyle.border;
        content.style.padding = highlightStyle.padding;

        title.contentEditable = "true"
        content.contentEditable = "true"
    };

    const handlePostBtnDelete = (e) => {
        console.log("handle delete click");
        console.log(e);

        setPostDeleteStatus(true);
    };

    const handleCancelBtn = (e) => {
        const title = document.querySelector('.post-title');
        const content = document.querySelector('.post-content');

        console.log(title);
        console.log(content);

        title.contentEditable = "false"
        content.contentEditable = "false"

        console.log("cancel button click");
    }

    return (
        <PostDetailContainer>
            {
                modifyStatus ? (
                    <Notification
                        text="Are you sure you wanna modify post?"
                        option1="Accept"
                        option2="Decline"
                        setModify={setModifyStatus}

                    />
                ) : postDeleteStatus ? (
                    <>
                        <Notification
                            text="Are you sure you wanna delete post?"
                            option1="Accept"
                            option2="Decline"
                            setDel={setPostDeleteStatus}
                        />
                        <div style={{ height: '650px' }}> {/* Adjust the height value as needed */}
                            {/* Content of the div */}
                        </div>
                    </>
                    ):(
                    <>
                        {/*<PostModifyContainer>*/}
                        {/*    <DeleteButton onClick={handlePostBtnDelete} />*/}
                        {/*    <ModifyButton onClick={handleModifyElements} />*/}
                        {/*    <CancelButton onClick={handleCancelBtn}/>*/}
                        {/*</PostModifyContainer>*/}
                        <PostDetailHeader>
                            <PostDetailPhotoContainer>
                                <img src={blog_image}/>
                            </PostDetailPhotoContainer>
                            <PostDetailInformation>
                                <PostDetailHeaderTitle
                                    className="post-title"
                                    contentEditable="false">
                                    <HomeTitle>
                                        {post.post.title}
                                    </HomeTitle>
                                </PostDetailHeaderTitle>
                                <HomeDate>DEC 19, 2023</HomeDate>
                            </PostDetailInformation>
                        </PostDetailHeader>
                        <PostDetailContentContainer>
                            <PostDetailContent
                                className="post-content"
                                contentEditable="false"
                            >
                                {post.post.content}
                                {/*Thanks to our friends at Webflow for sponsoring this blog post!*/}
                                {/*<br/>*/}
                                {/*Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight. As tech continues to evolve, and as more organizations zero in on meeting customer expectations, we’re eyeing new trends that are poised to redefine our perception of digital aesthetics and functionality.*/}
                                {/*<br/>*/}
                                {/*<br/>*/}
                                {/*Keeping a pulse on how the world of design continues to shift allows designers and developers alike to stay abreast of what’s resonating with today’s audiences, solve design challenges, and tap into new creative opportunities. However, it’s important to remember that as soon as new trends emerge, they can dissolve, which is why creatives should be thoughtful before embracing a new design strategy or format with open arms. As Felix Lee, co-founder and CEO of the creative mentorship collective ADPList puts it: “Always let your intentions pave the way for your design, and then let the trends follow. I think most people tend to skip the first part because of the shiny object syndrome.”*/}
                                {/*<br/>*/}
                                {/*<br/>*/}
                                {/*Before we sign off for the year, here’s four web design trends our team at Webflow is keeping our eyes on for 2024.*/}
                            </PostDetailContent>
                        </PostDetailContentContainer>

                        <CommentsContainer>
                            <HomeTitle>Comments</HomeTitle>
                            <AddComment/>
                            <CommentContainer>
                                <PhotoContainer>
                                    <img src={Photo}/>
                                </PhotoContainer>
                                <TextTitleContainer>
                                    <NameContainer>
                                        <p>Kamil Holub</p>
                                        <p> now</p>
                                    </NameContainer>
                                    <TextContainer>
                                        dsadas
                                    </TextContainer>
                                </TextTitleContainer>
                            </CommentContainer>
                        </CommentsContainer>
                    </>
                )
            }
        </PostDetailContainer>
    );
}

export default PostDetail;
import {
    IconContainer,
    IconVote,
    PostDetailContainer, PostDetailContent, PostDetailContentContainer,
    PostDetailHeader,
    PostDetailHeaderTitle,
    PostDetailInformation,
    PostDetailPhotoContainer, PostModifyContainer
} from "../../assets/styledCss/PostDetailStyled";
import blog_image from "../../assets/icons/blog_image.png";
import {HomeDate, HomeTitle} from "../../assets/styledCss/PostStyled";
import {
    CommentsContainer,
} from "../../CommentsStyled";
import React, {useEffect, useState} from "react";
import AddComment from "../Comments/add_comment";
import Notification from "../Notifications/notification";
import upvote from "../../assets/icons/upvote.png";

function PostDetail({post}){ // add here button edit

    const [notificationVisibility, setNotificationVisibility] = useState(false);

    const [modifyStatus, setModifyStatus] = useState(false);
    const [postDeleteStatus, setPostDeleteStatus] = useState(false);

    const [postDeleteApprove, setPostDeleteApprove] = useState(false);
    const [postUpdateApprove, setPostUpdateApprove] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // setComments(post.comments);
       // setComments(post.comments);
    }, []);

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

    const displayPostComments = () => {

    }

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
                        <PostDetailHeader>
                            <PostDetailInformation>
                                <PostDetailHeaderTitle
                                    className="post-title"
                                    contentEditable="false">
                                    <HomeTitle>
                                        Test
                                    </HomeTitle>
                                </PostDetailHeaderTitle>
                                <HomeDate>DEC 19, 2023</HomeDate>
                            </PostDetailInformation>
                            <PostDetailPhotoContainer>
                                <img src={blog_image}/>
                            </PostDetailPhotoContainer>
                        </PostDetailHeader>
                        <PostDetailContentContainer>
                            <PostDetailContent
                                className="post-content"
                                contentEditable="false"
                            >
                                Test information
                            </PostDetailContent>
                            <IconContainer>
                                <IconVote
                                    name="upvote"
                                    backgroundColor="#4CAF50"
                                    src={upvote} />
                                <IconVote
                                    name="downvote"
                                    backgroundColor="#FF5252"
                                    src={upvote}
                                    style={{ transform: 'rotate(180deg)' }}
                                />
                            </IconContainer>
                        </PostDetailContentContainer>
                    	<CommentsContainer>
                            <HomeTitle>Comments</HomeTitle>
                            <AddComment/>
                        </CommentsContainer>
		            </>
                )
           }

        </PostDetailContainer>
    );
}

export default PostDetail;

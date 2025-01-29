import {CreateCommentContainer, CreateCommentField} from "../../assets/styledCss/PostCommentStyled";
import {AuthButtonComponent} from "../Button/auth_button";
import React from "react";


function AddComment(){
    return (
        <CreateCommentContainer>
            <CreateCommentField placeholder="Add comment..."/>
            <AuthButtonComponent
                mar
                width={150}
                height={50}
                background={"blue"}
                color={"white"}
                text="Upload"/>
        </CreateCommentContainer>
    )
}

export default AddComment;
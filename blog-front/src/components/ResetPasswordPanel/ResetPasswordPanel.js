import {PostDetailContainer} from "../../assets/PostDetailStyled";
import {
    BackContainer,
    ImageResetPasswordContainer,
    ReserPasswordTitle,
    ResetPasswordDescription, ResetPasswordForm,
    ResetPasswordTitle
} from "../../assets/ResetPasswordStyled";
import key from "../../assets/key.png";
import Footer from "../Footer/Footer";
import {FormField, LoginInputField, LoginInputLabel} from "../../assets/AccountingStyled";
import React from "react";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import turn_back from "../../assets/turn-back.png";
function ResetPasswordPanel(){
    return (
        <>
            <PostDetailContainer>
                <ImageResetPasswordContainer>
                    <img src={key}/>
                </ImageResetPasswordContainer>
                <ResetPasswordTitle>Forgot password?</ResetPasswordTitle>
                <ResetPasswordDescription>No worries, we'll send you reset link</ResetPasswordDescription>
                <ResetPasswordForm>
                    <FormField>
                        <LoginInputLabel>
                            Email
                        </LoginInputLabel>
                        <LoginInputField />
                        <AuthButtonComponent
                            width={350}
                            height={50}
                            background={"blue"}
                            color={"white"}
                            text="Reset">Reset</AuthButtonComponent>
                    </FormField>
                </ResetPasswordForm>
                <BackContainer>
                    <img src={turn_back}/>
                    <p>Back to login panel</p>
                </BackContainer>
            </PostDetailContainer>
        </>

    )
}

export default ResetPasswordPanel;
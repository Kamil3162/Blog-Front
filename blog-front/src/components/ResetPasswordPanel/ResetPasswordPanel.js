import {PostDetailContainer, ResetPasswordContainer} from "../../assets/styledCss/PostDetailStyled";
import {
    BackContainer,
    ImageResetPasswordContainer,
    ReserPasswordTitle,
    ResetPasswordDescription, ResetPasswordForm,
    ResetPasswordTitle
} from "../../assets/styledCss/ResetPasswordStyled";
import key from "../../assets/icons/key.png";
import Footer from "../Footer/Footer";
import {FormField, LoginInputField, LoginInputLabel} from "../../assets/styledCss/AccountingStyled";
import React from "react";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import turn_back from "../../assets/icons/turn-back.png";

function ResetPasswordPanel(){
    return (
        <>
            <ResetPasswordContainer>
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
                    <a href="/login">
                        Back to login panel
                    </a>
                </BackContainer>
            </ResetPasswordContainer>
        </>

    )
}

export default ResetPasswordPanel;
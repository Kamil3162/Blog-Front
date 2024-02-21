import {PostDetailContainer} from "../../assets/PostDetailStyled";
import {
    BackContainer,
    ImageResetPasswordContainer,
    ResetPasswordDescription, ResetPasswordForm,
    ResetPasswordTitle
} from "../../assets/ResetPasswordStyled";
import key from "../../assets/key.png";
import {FormField, LoginInputField, LoginInputLabel} from "../../assets/AccountingStyled";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import key_chain from "../../assets/key-chain.png";
import React from "react";


function NewPasswordSetPanel(){
    return (
        <>
            <PostDetailContainer>
                <ImageResetPasswordContainer>
                    <img src={key_chain}/>
                </ImageResetPasswordContainer>
                <ResetPasswordTitle>Enter new password</ResetPasswordTitle>
                <ResetPasswordDescription>Enter here you brand new password for your account</ResetPasswordDescription>
                <ResetPasswordForm>
                    <FormField>
                        <LoginInputLabel>
                            Password
                        </LoginInputLabel>
                        <LoginInputField />
                        <AuthButtonComponent
                            width={350}
                            height={50}
                            background={"blue"}
                            color={"white"}
                            text="Set Password">Set Password</AuthButtonComponent>
                    </FormField>
                </ResetPasswordForm>
            </PostDetailContainer>
        </>
    )
}
export default NewPasswordSetPanel;
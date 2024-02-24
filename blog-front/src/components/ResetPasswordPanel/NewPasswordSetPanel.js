import {PostDetailContainer} from "../../assets/styledCss/PostDetailStyled";
import {
    BackContainer,
    ImageResetPasswordContainer,
    ResetPasswordDescription, ResetPasswordForm,
    ResetPasswordTitle
} from "../../assets/styledCss/ResetPasswordStyled";
import key from "../../assets/icons/key.png";
import {FormField, LoginInputField, LoginInputLabel} from "../../assets/styledCss/AccountingStyled";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import key_chain from "../../assets/icons/key-chain.png";
import React, {useEffect, useState} from "react";
import { check_password } from ".//utils/checker";

function NewPasswordSetPanel(){

    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    useEffect(() => {
        if (check_password(password, repassword)){
            setPasswordsMatch(true);
        }
        else {
            setPasswordsMatch(false);
        }
    }, [password, repassword]);

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
                        <LoginInputField
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <LoginInputLabel>
                            Retype-Password
                        </LoginInputLabel>
                        <LoginInputField
                            type="password"
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                        <AuthButtonComponent
                            width={350}
                            height={50}
                            background={"blue"}
                            color={"white"}
                            text="Set Password">Set Password</AuthButtonComponent>
                    </FormField>
                    {!passwordsMatch && (
                        <p style={{
                            color: 'red',
                            fontFamily: 'Gothic A1',
                            fontWeight: 800
                        }}>Passwords do not match!</p>
                    )}
                </ResetPasswordForm>
            </PostDetailContainer>
        </>
    )
}
export default NewPasswordSetPanel;
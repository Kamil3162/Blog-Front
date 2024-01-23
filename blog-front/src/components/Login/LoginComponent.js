import {
    AccountingContainer,
    AuthFields, FormField,
    ImageAccount, LabelContainer, LinkStyle, LoginForm,
    LoginInputField,
    LoginInputLabel
} from "../../assets/AccountingStyled";
import logo_login from "../../assets/logo_login.png";
import {AuthButton, SignUpButton} from "../../assets/NavbarStyled";
import React from "react";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";

export function LoginComponent(){
    return(
        <AccountingContainer>
            <ImageAccount>
                <img src={logo_login}/>
            </ImageAccount>
            <AuthFields>
                <h1>Sign in to Blog</h1>

                <LoginForm>
                    <FormField>
                        <LoginInputLabel>
                            Username or Email
                        </LoginInputLabel>
                        <LoginInputField />
                    </FormField>
                    <FormField>
                        <LoginInputLabel>
                            Password
                            <a href="/forgot">Forgot?</a>
                        </LoginInputLabel>
                        <LoginInputField />
                    </FormField>
                    <AuthButtonComponent
                        width={350}
                        height={50}
                        background={"blue"}
                        color={"white"}
                        text="Sign up">Sign up</AuthButtonComponent>
                </LoginForm>
                <p>
                    Don't have an account?
                    <a href="/sing-up">Sign up</a>
                </p>
            </AuthFields>
        </AccountingContainer>
    )
}
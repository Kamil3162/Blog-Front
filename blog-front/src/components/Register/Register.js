import React from "react";
import {
    AccountingContainer,
    AuthFields,
    FormField,
    ImageAccount,
    LoginForm,
    LoginInputField,
    LoginInputLabel, UserDetailsContainer
} from "../../assets/AccountingStyled";
import logo_login from "../../assets/logo_login.png";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";

function RegisterComponent(){
    return (
        <>
            <AccountingContainer>
                <ImageAccount>
                    <img src={logo_login}/>
                </ImageAccount>
                <AuthFields>
                    <h1>Sign up to Blog</h1>
                    <LoginForm>
                        <FormField>
                            <LoginInputLabel>
                                Name
                            </LoginInputLabel>
                            <LoginInputField />
                        </FormField>
                        <FormField>
                            <LoginInputLabel>
                                Username
                            </LoginInputLabel>
                            <LoginInputField />
                        </FormField>
                        <FormField>
                            <LoginInputLabel>
                                Email
                            </LoginInputLabel>
                            <LoginInputField />
                        </FormField>
                        <FormField>
                            <LoginInputLabel>
                                Password
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
                        Already have an account ?
                        <a href="/login">Sign in</a>
                    </p>
                </AuthFields>
            </AccountingContainer>
        </>
    )
}

export default RegisterComponent;
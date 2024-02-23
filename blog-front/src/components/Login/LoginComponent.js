import {
    AccountingContainer,
    AuthFields, FormField,
    ImageAccount, LabelContainer, LinkStyle, LoginForm,
    LoginInputField,
    LoginInputLabel
} from "../../assets/AccountingStyled";
import logo_login from "../../assets/logo_login.png";
import {AuthButton, SignUpButton} from "../../assets/NavbarStyled";
import React, {useState} from "react";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
import { useAuth} from "../../context/AuthContext";
import {login_user, register} from "../../services/loginservice";
import { handleValueChange} from "../../utils/tools_functions";

export function LoginComponent(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Logowanie");
        try {
            const response = await login_user(username, password);
            console.log(response);
            console.log(response.access_token);
            login(response.access_token);
        } catch (error) {
            console.error("Registration failed", error);
            // Handle errors (e.g., display an error message)
        }
    }


    return(
        <AccountingContainer>
            <ImageAccount>
                <img src={logo_login}/>
            </ImageAccount>
            <AuthFields>
                <h1>Sign in to Blog</h1>
                <LoginForm onSubmit={handleSubmit}>
                    <FormField>
                        <LoginInputLabel>
                            Username or Email
                        </LoginInputLabel>
                        <LoginInputField
                            type="text"
                            value={username}
                            onChange={handleValueChange(setUsername)}
                        />
                    </FormField>
                    <FormField>
                        <LoginInputLabel>
                            Password
                            <a href="/forgot">Forgot?</a>
                        </LoginInputLabel>
                        <LoginInputField
                            type="text"
                            value={password}
                            onChange={handleValueChange(setPassword)}
                        />
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
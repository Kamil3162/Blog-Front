import React, {useState} from "react";
import {
    AccountingContainer,
    AuthFields,
    FormField,
    ImageAccount,
    LoginForm,
    LoginInputField,
    LoginInputLabel, UserDetailsContainer
} from "../../assets/styledCss/AccountingStyled";
import logo_login from "../../assets/icons/logo_login.png";
import {AuthButtonComponent} from "../Button/auth_button";
import {register} from "../../services/user";
import { handleValueChange } from "../../utils/tools_functions";

function RegisterComponent(){
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async (event) => {
        event.preventDefault();

        console.log("rejestracja");
        try {
            const response = await register(name, username, email, password);
            console.log(response.data); // Assuming you want to do something with the response data
            // Process successful registration (e.g., redirect or display a success message)
        } catch (error) {
            console.error("Registration failed", error);
            // Handle errors (e.g., display an error message)
        }
    }

    return (
        <>
            <AccountingContainer>
                <ImageAccount>
                    <img src={logo_login}/>
                </ImageAccount>
                <AuthFields>
                    <h1>Sign up to Blog</h1>
                    <LoginForm onSubmit={createUser}>
                        <FormField>
                            <LoginInputLabel>
                                Name
                            </LoginInputLabel>
                            <LoginInputField
                                type="text"
                                value={name}
                                onChange={handleValueChange(setName)}
                            />
                        </FormField>
                        <FormField>
                            <LoginInputLabel>
                                Username
                            </LoginInputLabel>
                            <LoginInputField
                                type="text"
                                value={username}
                                onChange={handleValueChange(setUsername)}
                            />
                        </FormField>
                        <FormField>
                            <LoginInputLabel>
                                Email
                            </LoginInputLabel>
                            <LoginInputField
                                type="email"
                                value={email}
                                onChange={handleValueChange(setEmail)}
                            />
                        </FormField>
                        <FormField>
                            <LoginInputLabel>
                                Password
                            </LoginInputLabel>
                            <LoginInputField
                                type="password"
                                value={password}
                                onChange={handleValueChange(setPassword)}
                            />
                        </FormField>
                        <AuthButtonComponent
                            width={350}
                            height={50}
                            background={"blue"}
                            color={"white"}
                            text="Sign up"
                        >Sign up</AuthButtonComponent>
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
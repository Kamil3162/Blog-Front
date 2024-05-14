import React from "react";
import {NavigationContainer, NavigationElement} from "../../assets/styledCss/NavbarStyled";
import { NavigationVisibilityContext } from '../../context/NavigationVisibilityContext';
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import {useContext} from "react";


function RolloutOptions(){
    const { isNavVisible } = useContext(NavigationVisibilityContext);
    const { width } = useContext(WindowSizeContext);

    return (
        isNavVisible && width < 500 && (
            <NavigationContainer>
                <>
                    <NavigationElement>
                        <a href="/about/me">
                            About me
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/home">
                            Home
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/post-create">
                            Post Create
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/category/create">
                            Category Create
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/admin-panel">
                            Admin Panel
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/post-detail">
                            Post Detail
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/login">
                            Login
                        </a>
                    </NavigationElement>
                    <NavigationElement>
                        <a href="/sing-up">
                        Sign up
                    </a></NavigationElement>
                </>
            </NavigationContainer>
        )
    );
}

export default RolloutOptions;

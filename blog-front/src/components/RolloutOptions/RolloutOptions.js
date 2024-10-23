import React from "react";
import { Link } from "react-router-dom"
import { NavigationContainer, NavigationElement } from "../../assets/styledCss/NavbarStyled";
import { NavigationVisibilityContext } from '../../context/NavigationVisibilityContext';
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import {useContext} from "react";
import {navigationItems} from "./navigationConfig";


function RolloutOptions(){
    const { isNavVisible} = useContext(NavigationVisibilityContext);
    const { setIsNavVisible } = useContext(NavigationVisibilityContext);

    const { width } = useContext(WindowSizeContext);

    console.log(isNavVisible);
    console.log(width);
    console.log(width <= 500 && isNavVisible);

    const changeClickNavVisible = (event) => {
        setIsNavVisible(false);
        console.log("changeclicknav visible");
    }

    console.log("test message");

    return (
         width <= 500 && isNavVisible &&
                <NavigationContainer showOnSite={width <= 500 && isNavVisible}>
                    {navigationItems.map((item, index) => (
                        <NavigationElement key={index}>
                            <Link to={item.href} onClick={changeClickNavVisible}>
                                {item.label}
                            </Link>
                        </NavigationElement>
                    ))}
                </NavigationContainer>
    );
}

export default RolloutOptions;

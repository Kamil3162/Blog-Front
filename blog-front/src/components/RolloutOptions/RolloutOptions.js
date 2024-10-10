import React from "react";
import { Link } from "react-router-dom"
import { NavigationContainer, NavigationElement } from "../../assets/styledCss/NavbarStyled";
import { NavigationVisibilityContext } from '../../context/NavigationVisibilityContext';
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import {useContext} from "react";
import {navigationItems} from "./navigationConfig";


function RolloutOptions(){
    const { isNavVisible } = useContext(NavigationVisibilityContext);
    const { width } = useContext(WindowSizeContext);

    const generateRolloutPanel = () =>{
        if (width <= 500 && !isNavVisible){
            return (
                <>
                    <NavigationContainer>
                        {navigationItems.map((item, index) => (
                            <NavigationElement key={index}>
                                <Link to={item.href}>{item.label}</Link>
                            </NavigationElement>
                        ))}
                    </NavigationContainer>
                </>
            )
        }
    }

    return (
        <NavigationContainer showOnSite={width <= 500 && isNavVisible}>
            {navigationItems.map((item, index) => (
                <NavigationElement key={index}>
                    <Link to={item.href}>{item.label}</Link>
                </NavigationElement>
            ))}
        </NavigationContainer>
    );
}

export default RolloutOptions;

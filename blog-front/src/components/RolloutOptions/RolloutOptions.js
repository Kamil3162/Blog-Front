import React from "react";
import {NavigationContainer, NavigationElement} from "../../assets/NavbarStyled";
import { NavigationVisibilityContext } from '../../context/NavigationVisibilityContext';
import { WindowSizeContext} from "../../context/WindowsSizeContext";
import {useContext} from "react";


function RolloutOptions(){
    const { isNavVisible } = useContext(NavigationVisibilityContext);
    const { width } = useContext(WindowSizeContext);

    return (
        <NavigationContainer>
            {(isNavVisible && width < 500) && (
                <>
                    <NavigationElement>Option1</NavigationElement>
                    <NavigationElement>Option2</NavigationElement>
                    <NavigationElement>Option3</NavigationElement>
                    <NavigationElement>Option4</NavigationElement>
                </>
            )}
        </NavigationContainer>
    );
}

export default RolloutOptions;

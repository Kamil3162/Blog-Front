import {useState} from "react";
import {LeftPanelElement} from "../styles/LeftPanelStyled";


function ElementLeftPanel(){

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }

    return (
        <LeftPanelElement clicked={isClicked} onClick={handleClick}>
            Click me
        </LeftPanelElement>
    )
}
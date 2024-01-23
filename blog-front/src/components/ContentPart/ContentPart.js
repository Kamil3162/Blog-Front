import React from "react";
import {SiteContentContainer} from "../../assets/PostStyled";


function ContentPart(props){
    return (
        <SiteContentContainer>
            {props.children}
        </SiteContentContainer>
    )
}

export default ContentPart;
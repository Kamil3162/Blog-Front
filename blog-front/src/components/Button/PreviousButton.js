import {PostBackButton} from "../../assets/styledCss/PostListStyled";
import right from "../../assets/icons/right.png";

function PreviousButton(){
    return(
        <PostBackButton>
            <img src={right}/>
        </PostBackButton>
    )
}

export default PreviousButton;
import right from "../../assets/icons/right.png";
import {PostMovingButton} from "../../assets/styledCss/PostListStyled";

function NextButton(){
    return(
        <PostMovingButton>
            <img src={right}/>
        </PostMovingButton>
    )
}

export default NextButton;
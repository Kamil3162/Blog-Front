import right from "../../assets/icons/right.png";
import {PostMovingButton} from "../../assets/styledCss/PostListStyled";

function NextButton({page_number, setCurrentPage}){
    const loadNextPosts = (page_number) => {
        page_number += 1;
        setCurrentPage(page_number)
        console.log("next page");
        console.log(page_number);
    }

    return(
        <PostMovingButton onClick={() => loadNextPosts(page_number)}>
            <img src={right}/>
        </PostMovingButton>
    )
}

export default NextButton;
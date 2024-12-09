import {PostBackButton} from "../../assets/styledCss/PostListStyled";
import right from "../../assets/icons/right.png";

function PreviousButton({page_number, setCurrentPage}){
    const loadPreviousPosts = (page_number) => {
        if (page_number > 1){
            page_number += -1;
            setCurrentPage(page_number);
        }
    }

    return(
        <PostBackButton onClick={() => loadPreviousPosts(page_number)}>
            <img src={right}/>
        </PostBackButton>
    )
}

export default PreviousButton;
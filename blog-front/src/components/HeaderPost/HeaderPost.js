import {PostHeader} from "../../assets/PostStyled";



function HeaderPost({title}){
    console.log("Generowanie Header Post");
    return (
        <PostHeader>
            To jest rendering post
            {title}
        </PostHeader>
    )
}
export default HeaderPost;

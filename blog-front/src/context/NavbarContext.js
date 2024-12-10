import NavbarContext from "./nav_contextes/nav_context";
import {useContext, useState} from "react";
import {searchPost} from "../utils/search_field_functions";

function NavContext({children}){

    const [searchedPosts, setSearchedPosts] = useState([]);
    const handlePostSearch = (postTitle) =>{
        const posts = searchPost("HomeTitle", postTitle);

        console.log(postTitle);
        console.log(posts);

        setSearchedPosts(posts);
    }

    return(
        <NavbarContext.Provider value={{searchedPosts, handlePostSearch}}>
            {children}
        </NavbarContext.Provider>

    )
}
export default NavContext;
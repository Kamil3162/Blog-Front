import NavbarContext from "./nav_contextes/nav_context";
import {useState} from "react";

function NavContext(){
    const [post, setPost] = useState("");

    return(
        <NavbarContext.Provider value={post}>

        </NavbarContext.Provider>

    )
}

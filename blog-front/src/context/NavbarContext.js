import {createContext, useCallback, useEffect, useState} from "react";
import {searchPost} from "../utils/search_field_functions";

export const NavCon = createContext();

function NavContextProvider({children}){
    const [category, setCategory] = useState("all");
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const searchPostByCategory = useCallback((posts, selectedCategory) => {
        if (!posts) return [];
        if (selectedCategory === "all") return posts;

        return posts.filter(post =>
            post.category.toLowerCase() === selectedCategory.toLowerCase()
        );
    }, []);

    const handleCategoryChange = useCallback((newCategory) => {
        setCategory(newCategory);
        const categoryFiltered = searchPostByCategory(searchedPosts, newCategory);
        setFilteredPosts(categoryFiltered);
    }, [searchedPosts, searchPostByCategory]);

    // Combined search function for both title and category
    const handlePostSearch = useCallback((postTitle) => {
        setSearchedPosts(postTitle);
        const posts = searchPost("HomeTitle", postTitle);
        const categoryFiltered = searchPostByCategory(posts, category);

        setSearchedPosts(posts);
        setFilteredPosts(categoryFiltered);
    }, [category, searchPostByCategory]);


    // Effect to update filtered posts when category or search changes
    useEffect(() => {
        const categoryFiltered = searchPostByCategory(searchedPosts, category);
        setFilteredPosts(categoryFiltered);
    }, [category, searchedPosts, searchPostByCategory]);

    return(
        <NavCon.Provider
            value={{
                searchedPosts,
                category,
                setCategory,
                filteredPosts,
                setFilteredPosts,
                handlePostSearch,
                searchPostByCategory
            }}
        >
            {children}
        </NavCon.Provider>

    )
}
export default NavContextProvider;
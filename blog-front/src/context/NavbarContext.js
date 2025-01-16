import {createContext, useCallback, useEffect, useState} from "react";
import {searchPost} from "../utils/search_field_functions";

export const NavCon = createContext();

function NavContextProvider({children}){
    const [category, setCategory] = useState("all");
    const [posts, setPosts] = useState([]);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const addSelectedCategories = (category) => {
        setSelectedCategories(...selectedCategories, category);
    }

    const searchPostByCategory = useCallback((posts, selectedCategory) => {
        if (!posts?.length) return [];
        if (selectedCategory === "all") return posts;

        return posts.filter(post =>
            post.category.toLowerCase() === selectedCategory.toLowerCase()
        );
    }, []);

    const handlePostSearchCategories = useCallback(() => {
        console.log("click", selectedCategories);

        if (!selectedCategories?.length) {
            console.log("No categories selected");
            setFilteredPosts(posts);
            return;
        }

        const searchResults = posts.filter(post =>
            selectedCategories.some(category =>
                post.category.toLowerCase() === category.toLowerCase()
            )
        );

        setFilteredPosts(searchResults);
    }, [selectedCategories, posts]); // Add dependencies here

    const handlePostSearchByTitle = useCallback((title) => {
        if (!title.trim()) {
            setSearchedPosts(posts);
            setFilteredPosts(searchPostByCategory(posts, category));
            return;
        }

        const searchResults = posts.filter(post =>
            post.title.toLowerCase().includes(title.toLowerCase())
        );

        setSearchedPosts(searchResults);
        setFilteredPosts(searchPostByCategory(searchResults, category));
    }, [posts, category, searchPostByCategory]);

    // Effect to update filtered posts when category or search changes
    useEffect(() => {
        const categoryFiltered = searchPostByCategory(searchedPosts, category);
        setFilteredPosts(categoryFiltered);
    }, [category, searchedPosts, searchPostByCategory]);

    return (
        <NavCon.Provider
            value={{
                posts,
                setPosts,
                searchedPosts,
                setSearchedPosts,
                category,
                setCategory,
                filteredPosts,
                selectedCategories,
                setFilteredPosts,
                handlePostSearchByTitle,
                searchPostByCategory,
                searchQuery,
                setSearchQuery,
                setSelectedCategories,
                handlePostSearchCategories,
                addSelectedCategories
            }}
        >
            {children}
        </NavCon.Provider>
    );
}
export default NavContextProvider;
import {CategoriesContainer, CategoryP, CategoryTitle} from "../../assets/styledCss/CategoriesStyled";
import {fetchCategories} from "../../services/categories";
import React, {useContext, useEffect, useState} from "react";
import {NavCon} from "../../context/NavbarContext";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";

function Categories(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category, setCategory } = useContext(NavCon);
    const { selectedCategories, setSelectedCategories } = useContext(NavCon);
    const { addSelectedCategories } = useContext(NavCon);
    const { handlePostSearchCategories } = useContext(NavCon);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categoryData = await fetchCategories();
                setCategories(categoryData);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load categories:", error);
                setLoading(false);
            }
        };

        loadCategories();
    }, []);

    const handleCategorySelect = (categoryName) => {
        setSelectedCategories(prev => {
            if (prev.includes(categoryName)) {
                return prev.filter(cat => cat !== categoryName);
            }
            return [...prev, categoryName];
        });
        // setCategory(categoryName);
    };

    if (loading) {
        return (
            <CategoriesContainer>
                <CategoryTitle>All Categories</CategoryTitle>
                <p>Interview</p>
                <p>Podcast</p>
                <p>Tudsa</p>
                <p>Esa</p>
            </CategoriesContainer>
        );
    }

    return (
        <>
            <CategoriesContainer>
                <CategoryTitle>All Categories</CategoryTitle>
                {categories.map((cat) => (
                    <CategoryP
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.category_name)}
                        className={cat.category_name === category ? "active" : ""}
                        style={{backgroundColor: selectedCategories.includes(cat.category_name) ? "#93b0ff" : "transparent"}}
                    >
                        {cat.category_name}
                    </CategoryP>
                ))}

                <AuthButtonComponent
                    width={250}
                    height={50}
                    background={"blue"}
                    color={"white"}
                    text="Filter"
                    funExecute={handlePostSearchCategories}  // Remove the () => here
                >Filter</AuthButtonComponent>
            </CategoriesContainer>

        </>

    );
}

export default Categories;

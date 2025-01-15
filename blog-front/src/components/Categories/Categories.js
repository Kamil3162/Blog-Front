import {CategoriesContainer, CategoryTitle} from "../../assets/styledCss/CategoriesStyled";
import {fetchCategories} from "../../services/categories";
import {useContext, useEffect, useState} from "react";
import {NavCon} from "../../context/NavbarContext";

function Categories(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category, setCategory } = useContext(NavCon);

    const displayCategories = () => {
        return categories.map((category) => {
            return (
                <p id={category.id}
                   onClick={() => setCategory(category.category_name) }
                >
                    {category.category_name}
                </p>
            )
        })
    }

    useEffect(()=>{
        const loadCategories = async () =>{
            const category_data = await fetchCategories();

            setCategories(category_data);
            setLoading(false);
            console.log(category_data);
        }
        loadCategories().then(r => console.log(r));
    }, []);


    return (
        <CategoriesContainer>
            <CategoryTitle>All Categories</CategoryTitle>
            {
                loading ? (
                    <>
                        <p>Interview</p>
                        <p>Podcast</p>
                        <p>Tudsa</p>
                        <p>Esa</p>
                        <p>Esa</p>
                    </>
                ) : (
                    displayCategories()
                )
            }

        </CategoriesContainer>
    )
}

export default Categories;
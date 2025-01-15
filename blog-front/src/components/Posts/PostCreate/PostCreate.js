import React, {useEffect, useState} from "react";
import {
    AddFileForm,
    AddText,
    InputDataPostCreate,
    PhotoContainer,
    StyledPhotoTable, StyledSelect
} from "../../../assets/styledCss/PostCreateStyled";
import upimage from "../../../assets/icons/upload.png";
import {AuthButtonComponent} from "../../Button/AuthButtonComponent";
import {
    HomeContentContainer,
    HomeContentText,
    HomeTitle,
} from "../../../assets/styledCss/PostStyled";
import {PostListCategory} from "../../../assets/styledCss/PostListStyled";
import {fetchCategories} from "../../../services/categories";
import {postCreate} from "../../../services/post";

function PostCreate(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]); // To store multiple image URLs
    const [fileNames, setFileNames] = useState([]); // To store multiple file names
    const [loading, setLoading] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState({
        id: null,
        category_name: ''
    });

    const loadCategories = async () => {
        const data = await fetchCategories();
        setCategories(data);

        // set the first category as default
        setSelectedCategory({
            id: data[0].id,
            category_name: data[0].category_name
        })

        setLoading(false);

    };

    useEffect(() => {
        loadCategories();
    }, []);

    const displayCategories = () => {
        return categories.map((category, index) => {
            return (
                <option key={index} value={category.category_name}>
                    {category.category_name}
                </option>
            );
        });
    };

    const backImage = () => {
        const image_container = document.querySelector(".input-field");
        image_container.value = "";
        setImages([]);  // Clear images
        setFileNames([]); // Clear file names
    }

    // Handle file input change
    const handleFileChange = ({ target: { files } }) => {
        const selectedFiles = Array.from(files);
        const fileNamesArray = selectedFiles.map(file => file.name);
        const imageUrlsArray = selectedFiles.map(file => URL.createObjectURL(file));

        setFileNames(fileNamesArray); // Update file names
        setImages(imageUrlsArray);    // Update images
    }

    const handleButtonClick = () => {
        const response = postCreate(
            title,
            selectedCategory.category_name,
            content,
            images
        );
        console.log(response);
    }

    const titleChange = (e) => {
        setTitle(e.target.value);
    }

    const contentChange = (e) => {
        setContent(e.target.value);
    }

    return (
        <PhotoContainer>
            <PostListCategory>
                <div>
                    <HomeTitle>Post create panel</HomeTitle>
                    <HomeContentContainer>
                        <HomeContentText>
                            Here you can create your dream blog post and upload on home page.
                        </HomeContentText>
                    </HomeContentContainer>
                </div>
            </PostListCategory>
            <AddFileForm action="">
                <InputDataPostCreate
                    placeholder="Title..."
                    onChange={titleChange}
                />

                <StyledSelect
                    name="cars"
                    id="cars"
                    value={selectedCategory.category_name}
                    onChange={(e) => {
                        const category = categories.find(c => c.category_name === e.target.value);
                        setSelectedCategory({
                            id: category.id,
                            category_name: category.category_name
                        });
                    }}
                >
                    {loading ? (
                        <option>Loading...</option>
                    ) :(displayCategories())
                    }
                </StyledSelect>

                <AddText
                    placeholder="Add content..."
                    placeholderTextColor="black"
                    onChange={contentChange}

                />

                <input type="file" accept="image/*" className='input-field' hidden multiple
                       onChange={handleFileChange}
                />

                {
                    images.length > 0 ? (

                        <>
                            <StyledPhotoTable>
                                <thead>
                                    <tr>
                                        <th>File Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {
                                    images.map((img, index)=> (
                                        <>
                                            <tr key={index}>
                                                <td>{fileNames[index]}</td>
                                                <td><button>Delete</button></td>
                                            </tr>
                                        </>
                                    ))
                                }
                                </tbody>
                            </StyledPhotoTable>
                        </>
                    ) : (
                        <div>

                        </div>
                    )
                }
                {images.length > 0 ? (
                    <>
                        {images.map((img, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <img
                                            src={img}
                                            alt={`file-${index}`}
                                            style={{
                                                maxWidth: '200px',
                                                height: '350px'
                                            }} />
                                        <p>{fileNames[index]}</p>
                                        <button onClick={backImage}>Clear</button>
                                    </div>
                                    <img src={upimage} width={60} height={60}
                                         onClick={() => document.querySelector(".input-field").click()}/>
                                    <p>Browse file to upload</p>
                                </>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <img src={upimage} width={60} height={60}
                             onClick={() => document.querySelector(".input-field").click()}/>
                        <p>Browse file to upload</p>
                    </>
                )}
            </AddFileForm>

            <AuthButtonComponent
                mar
                width={450}
                height={50}
                background={"blue"}
                color={"white"}
                text="Upload post"
                funExecute={handleButtonClick}
            />
        </PhotoContainer>
    )
}





export default PostCreate;





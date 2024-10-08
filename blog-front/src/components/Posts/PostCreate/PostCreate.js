// import {PostDetailContainer} from "../../../assets/styledCss/PostDetailStyled";
import React, {useState} from "react";
import {
    AddFileForm,
    AddText,
    AddTitle,
    InputDataPostCreate,
    PhotoContainer,
    PostImagesList, StyledPhotoTable, StyledSelect
} from "../../../assets/styledCss/PostCreateStyled";
import upimage from "../../../assets/icons/upload.png";
import {AuthButtonComponent} from "../../Button/AuthButtonComponent";
import {
    HomeContentContainer,
    HomeContentText,
    HomeDate,
    HomeTitle,
    HomeTitlePost
} from "../../../assets/styledCss/PostStyled";
// import postCreate from "../../../services/post_service";
// import {CategoryUnderline} from "../../Categories/CategoriesStyled/CategoryCreateStyled";
import {PostListCategory} from "../../../assets/styledCss/PostListStyled";

function PostCreate(){
    const [images, setImages] = useState([]); // To store multiple image URLs
    const [fileNames, setFileNames] = useState([]); // To store multiple file names

    // Clear selected files
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

    const handleFileDelete = (inx_img) => {

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
                />

                <StyledSelect name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </StyledSelect>

                <AddText
                    placeholder="Add content..."
                    placeholderTextColor="black"
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
            />
        </PhotoContainer>
    )
}

export default PostCreate;
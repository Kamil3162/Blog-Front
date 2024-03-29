import {PostDetailContainer} from "../../../assets/styledCss/PostDetailStyled";
import React, {useState} from "react";
import {
    AddFileForm,
    AddText,
    AddTitle,
    InputDataPostCreate,
    PhotoContainer,
    PostImagesList, StyledSelect
} from "../../../assets/styledCss/PostCreateStyled";
import upimage from "../../../assets/icons/upload.png";
import {AuthButtonComponent} from "../../Button/AuthButtonComponent";
import {HomeTitle} from "../../../assets/styledCss/PostStyled";
function PostCreate(){

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");

    const backImage = () => {
        const image_container = document.querySelector(".input-field");
        image_container.value = "";
        setImage(null);
        setFileName("");
    }

    return(
        <PhotoContainer>
            <HomeTitle>Add Post</HomeTitle>

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


            <AddFileForm action="">
                <input type="file" accept="image/*" className='input-field' hidden
                       onChange={({target: {files}}) => {
                           files[0] && setFileName(files[0].name)
                           if(files){
                               setImage(URL.createObjectURL(files[0]))
                           }
                       }}/>
                {
                    image ?
                        <>
                            <img src={image}  style={{ maxWidth: '200px', height: '350px' }}/>
                            <button onClick={backImage}>Clear</button>
                        </>
                        :
                        <>
                            <img src={upimage}
                                 width={60}
                                 height={60}
                                 onClick={() => document.querySelector(".input-field").click()}/>
                            <p>Browse file to upload</p>
                        </>
                }
            </AddFileForm>

            <AuthButtonComponent
                mar
                width={450}
                height={50}
                background={"blue"}
                color={"white"}
                text="Upload post"/>
        </PhotoContainer>
    )
}

export default PostCreate;
import {PostDetailContainer} from "../../assets/PostDetailStyled";
import React, {useState} from "react";
import {AddFileForm, AddText, AddTitle, PhotoContainer, PostImagesList} from "../../assets/PostCreateStyled";
import upimage from "../../assets/upload.png";
import {AuthButtonComponent} from "../Button/AuthButtonComponent";
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
            <AddTitle
                placeholder="Title..."
                placeholderTextColor="white"

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
            <AddText
                placeholder="Add content..."
                placeholderTextColor="white"
            />
            <AuthButtonComponent
                mar
                width={350}
                height={50}
                background={"blue"}
                color={"white"}
                text="Upload post"/>
        </PhotoContainer>
    )
}

export default PostCreate;
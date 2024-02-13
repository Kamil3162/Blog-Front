import {PostDetailContainer} from "../../assets/PostDetailStyled";
import {useState} from "react";
import {AddFileForm, AddText, AddTitle, PhotoContainer} from "../../assets/PostCreateStyled";
import upimage from "../../assets/upload.png";
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
            <AddTitle/>
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
            <AddText/>
        </PhotoContainer>
    )
}

export default PostCreate;
import {
    PostDetailContainer, PostDetailContent, PostDetailContentContainer,
    PostDetailHeader,
    PostDetailHeaderTitle,
    PostDetailInformation,
    PostDetailPhotoContainer
} from "../../assets/PostDetailStyled";
import blog_image from "../../assets/blog_image.png";
import {HomeDate, HomePhotoContainer, HomeTitle} from "../../assets/PostStyled";
import Footer from "../Footer/Footer";

function PostDetail(){ // add here button edit
    return (
        <PostDetailContainer>
            <PostDetailHeader>
                <PostDetailPhotoContainer>
                    <img src={blog_image}/>
                </PostDetailPhotoContainer>
                <PostDetailInformation>
                    <PostDetailHeaderTitle>
                        <HomeTitle>4 Web Design Trends to Watch in 2024</HomeTitle>
                    </PostDetailHeaderTitle>
                    <HomeDate>DEC 19, 2023</HomeDate>
                </PostDetailInformation>
            </PostDetailHeader>
            <PostDetailContentContainer>
                <PostDetailContent>
                    Thanks to our friends at Webflow for sponsoring this blog post!
                    <br/>
                    Gone are the days of aesthetics trumping experience. Today, web design is all about crafting immersive experiences that connect, captivate, motivate, and delight. As tech continues to evolve, and as more organizations zero in on meeting customer expectations, we’re eyeing new trends that are poised to redefine our perception of digital aesthetics and functionality.
                    <br/>
                    <br/>
                    Keeping a pulse on how the world of design continues to shift allows designers and developers alike to stay abreast of what’s resonating with today’s audiences, solve design challenges, and tap into new creative opportunities. However, it’s important to remember that as soon as new trends emerge, they can dissolve, which is why creatives should be thoughtful before embracing a new design strategy or format with open arms. As Felix Lee, co-founder and CEO of the creative mentorship collective ADPList puts it: “Always let your intentions pave the way for your design, and then let the trends follow. I think most people tend to skip the first part because of the shiny object syndrome.”
                    <br/>
                    <br/>
                    Before we sign off for the year, here’s four web design trends our team at Webflow is keeping our eyes on for 2024.
                </PostDetailContent>
            </PostDetailContentContainer>
            <Footer/>
        </PostDetailContainer>
    )
}

export default PostDetail;
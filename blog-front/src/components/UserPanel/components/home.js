import styled from "styled-components";
import photo from "../../../assets/icons/Photo.png";
const CategoryContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }
`;

const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  margin-left: 5px;
`;

const CategoryNameContainer = styled(Text)`
  font-size: 18px;
  font-weight: 1000;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderText = styled(Text)`
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const HelperInfo = styled(Text)`
  color: darkgray;
  font-size: 12px;
`;

const MainMeContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 0 10px;
  }
`;

const LastPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 10px;

  img {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.42) 5px 10px 10px 5px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    img {
      height: 250px;
    }
  }
`;

const ImageHolder = styled.div`
  width: 100%;
`;

const PostsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    gap: 15px;
    padding: 5px;
  }
`;
function LastPost({image, category, helper_text}){
    return (
        <LastPostsContainer>
            <ImageHolder>
                <img src={image}/>
            </ImageHolder>
            <CategoryNameContainer>{category}</CategoryNameContainer>
            <HelperInfo>{helper_text}</HelperInfo>
        </LastPostsContainer>
    )
}
function HelperComponent({image, header, helper}){
    return (
        <CategoryContainer>
            <PostsTable>
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                image={photo}
                category="Technology"
                helper_text="Recommanded"
                />
                <LastPost
                image={photo}
                category="Technology"
                helper_text="Recommanded"
                />
                <LastPost
                image={photo}
                category="Technology"
                helper_text="Recommanded"
                />
                <LastPost
                image={photo}
                category="Technology"
                helper_text="Recommanded"
                />
                <LastPost
                image={photo}
                category="Technology"
                helper_text="Recommanded"
                />
                <LastPost
                image={photo}
                category="Technology"
                helper_text="Recommanded"
                />
            </PostsTable>
        </CategoryContainer>
    )
}


function ExampleComponent(){
    return (
        <MainMeContainer>
            <HeaderText>Recently Added Posts</HeaderText>
            <CategoryContainer>
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
            </CategoryContainer>
            <div>
                <HeaderText>Post History</HeaderText>
            </div>
            <HelperComponent/>
        </MainMeContainer>
    )
}

export default ExampleComponent;
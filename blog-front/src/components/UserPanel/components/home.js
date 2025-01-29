import styled from "styled-components";


const CategoryContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: ${props => props.size || '16px'};
  font-family: ${props => props.font || "'Lexend', sans-serif"};
`;

function HelperComponent({image, header, helper}){
    return (
        <div>
            {/*<img src={}/>*/}
            <p>Font class from recently added nfts</p>
            <p>Helper Cateogy</p>
        </div>
    )
}


function ExampleComponent(){
    return (
        <div>
            <p>Recently Added NFTs</p>
            <CategoryContainer>
                <Text size="16px" font="'Lexend', sans-serif">2</Text>
                <Text>1</Text>
                <Text>3</Text>
            </CategoryContainer>

            <div className="photos-options">
                <>
                    <HelperComponent/>
                </>
            </div>
        </div>
    )
}

export default ExampleComponent;
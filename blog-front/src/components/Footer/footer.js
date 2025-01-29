import {
    ColumnFooterContainer,
    ConterContainerFooter,
    FooterContainer,
    FooterTitle
} from "../../FooterStyled";

function Footer(){

    return (
        <FooterContainer>
            <ConterContainerFooter>

                <ColumnFooterContainer>
                    <h1>Company</h1>
                    <FooterTitle>

                        <p>About me</p>
                        <p>History</p>
                    </FooterTitle>
                </ColumnFooterContainer>
                <ColumnFooterContainer>
                    <h1>Product</h1>
                    <FooterTitle>

                    <p>Business</p>
                    <p>Security</p>
                    </FooterTitle>
                </ColumnFooterContainer>
                <ColumnFooterContainer>
                    <h1>Social</h1>
                    <FooterTitle>
                        <p>Instagram</p>
                        <p>Linkedin</p>
                    </FooterTitle>
                </ColumnFooterContainer>


            </ConterContainerFooter>
            <ColumnFooterContainer>
                <h1>Copyright ©. All right reserved. </h1>
            </ColumnFooterContainer>
        </FooterContainer>
    )
}

export default Footer;
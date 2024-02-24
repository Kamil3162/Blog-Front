import {
    ColumnFooterContainer,
    ContentContainer,
    ContentContainerFooterUpp,
    ConterContainerFooter,
    FooterContainer,
    FooterImageContainer, FooterTitle
} from "../../FooterStyled";
import kamildevlogo from "../../assets/icons/kamildevlogo.png";

function Footer(){

    return (
        <FooterContainer>
            <ConterContainerFooter>
                <ColumnFooterContainer>
                    <FooterImageContainer>
                        <img src={kamildevlogo} width={100} height={100}/>
                    </FooterImageContainer>
                    <h1>All rights reserved </h1>
                </ColumnFooterContainer>
                <ColumnFooterContainer>
                    <FooterTitle>
                        Company
                    </FooterTitle>
                    <p>About Me</p>
                    <p>Contact</p>
                </ColumnFooterContainer>
                <ColumnFooterContainer>
                    <FooterTitle>
                        Product
                    </FooterTitle>
                    <p>Business</p>
                    <p>Security</p>
                </ColumnFooterContainer>
                <ColumnFooterContainer>
                    <FooterTitle>
                        Social
                    </FooterTitle>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </ColumnFooterContainer>
            </ConterContainerFooter>
        </FooterContainer>
    )
}

export default Footer;
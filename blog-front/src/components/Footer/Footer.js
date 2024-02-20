import {
    ColumnFooterContainer,
    ContentContainer,
    ContentContainerFooterUpp,
    ConterContainerFooter,
    FooterContainer,
    FooterImageContainer, FooterTitle
} from "../../FooterStyled";
import kamildevlogo from "../../assets/kamildevlogo.png";

function Footer(){

    return (
        <FooterContainer>
            <ConterContainerFooter>
                <ColumnFooterContainer>
                    <FooterImageContainer>
                        <img src={kamildevlogo} width={100} height={100}/>
                    </FooterImageContainer>
                    <p>All rights reserved </p>
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
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                </ColumnFooterContainer>
                <ColumnFooterContainer>
                    <FooterTitle>
                        Social
                    </FooterTitle>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                </ColumnFooterContainer>
            </ConterContainerFooter>
        </FooterContainer>
    )
}

export default Footer;
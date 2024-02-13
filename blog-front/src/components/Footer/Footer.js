import {
    ContentContainer,
    ContentContainerFooterUpp,
    ConterContainerFooter,
    FooterContainer,
    FooterImageContainer
} from "../../FooterStyled";
import kamildevlogo from "../../assets/kamildevlogo.png";

function Footer(){

    return (
        <FooterContainer>
            <ContentContainerFooterUpp>
                <FooterImageContainer>
                    <img src={kamildevlogo} width={100} height={100}/>
                </FooterImageContainer>
                <p>dsadsa</p>
            </ContentContainerFooterUpp>
            <ConterContainerFooter>
                <p>Textfdsfdsfdsfds</p>
                <p>Location</p>
                <p>OPenHours</p>
                <p>dsadsa</p>
            </ConterContainerFooter>
        </FooterContainer>
    )
}

export default Footer;
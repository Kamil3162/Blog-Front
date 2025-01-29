import {AuthButton, AuthButtonCom} from "../../assets/styledCss/NavbarStyled";

export function AuthButtonComponent({text, width, height, background, font_size,padding ,color="white", funExecute=null}){
    return (
        <AuthButtonCom
            width={width}
            height={height}
            background={background}
            font_size={font_size}
            color={color}
            onClick={funExecute}
        >
            {text}
        </AuthButtonCom>
    )
}
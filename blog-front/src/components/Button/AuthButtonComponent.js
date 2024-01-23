import {AuthButton, AuthButtonCom} from "../../assets/NavbarStyled";

export function AuthButtonComponent({text, width, height, background, font_size,padding ,color="white"}){
    console.log(width);
    return (
        <AuthButtonCom
            width={width}
            height={height}
            background={background}
            font_size={font_size}
            color={color}>

            {text}
        </AuthButtonCom>
    )
}
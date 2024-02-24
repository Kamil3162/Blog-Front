

export const check_password = (password1, password2) => {
    if (password1 !== password2){
        return false;
    }
    else {
        return true;
    }
}
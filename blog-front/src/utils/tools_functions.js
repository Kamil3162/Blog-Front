import Cookies from "universal-cookie";


export const handleValueChange = setFunction => event => {
    setFunction(event.target.value);
};

export const getUserDataCookies = () =>{
    const cookies = new Cookies();
    const user_information = cookies.get('user_data');
    const access_token = cookies.get('access_token');

    const user_data = {
        'access_token': access_token,
        'user_data': user_information
    }

    if (user_data.access_token && user_data.user_data) {
        return user_data;
    }

    return null;


}
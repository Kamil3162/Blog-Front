import axiosClientAPI from "./base";
import Cookies from "universal-cookie";



// code responsible for change user data and manage
export const modifyUser = (user_data, user_id) => {

    const cookie = new Cookies();

    return axiosClientAPI.get(`/users/user-update/{user_id}`, {
        withCredentials: true
    }).then(response => {
        console.log(response);
    })
}
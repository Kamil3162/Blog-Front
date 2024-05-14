import Navbar from "../../components/Navbar/Navbar";
import ResetPasswordPanel from "../../components/ResetPasswordPanel/ResetPasswordPanel";
import New from "../../components/ResetPasswordPanel/NewPasswordSetPanel";
import NewPasswordSetPanel from "../../components/ResetPasswordPanel/NewPasswordSetPanel";
function SetNewPasswordDisplay(){
    return (
        <>
            <Navbar/>
            <NewPasswordSetPanel/>
        </>
    )
}

export default SetNewPasswordDisplay;
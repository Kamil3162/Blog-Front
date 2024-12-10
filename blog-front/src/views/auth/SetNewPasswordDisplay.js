import Navbar from "../../components/Navbar/Navbar";
import ResetPasswordPanel from "../../components/ResetPasswordPanel/ResetPasswordPanel";
import New from "../../components/ResetPasswordPanel/NewPasswordSetPanel";
import NewPasswordSetPanel from "../../components/ResetPasswordPanel/NewPasswordSetPanel";
import Footer from "../../components/Footer/Footer";
function SetNewPasswordDisplay(){
    return (
        <>
            {/*<Navbar/>*/}
            <NewPasswordSetPanel />
        </>
    )
}

export default SetNewPasswordDisplay;
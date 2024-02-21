import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import Login from "./views/Login";
import Register from "./views/Register";
import MainScreenApplication from "./views/MainScreenApplication";
import WindowSizeContext from "./context/WindowsSizeContext";
import NavigationVisibilityProvider from "./context/NavigationVisibilityContext";
import PostDisplay from "./views/PostDisplay";
import PostCreateView from "./views/PostCreateView";
import ResetPasswordDisplay from "./views/ResetPasswordDisplay";
import SetNewPasswordDisplay from "./views/SetNewPasswordDisplay";

function App() {
    return (
        <BrowserRouter>
            <WindowSizeContext>
                <NavigationVisibilityProvider>
                    <MainScreenApplication>
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/sing-up" element={< Register/>} />
                            <Route path="/post-detail" element={< PostDisplay/>} />
                            <Route path="/post-create" element={< PostCreateView/>} />
                            <Route path="/reset/password" element={< ResetPasswordDisplay/>} />
                            <Route path="/reset/password/:token" element={< SetNewPasswordDisplay/>} />
                        </Routes>
                    </MainScreenApplication>
                </NavigationVisibilityProvider>
            </WindowSizeContext>
        </BrowserRouter>
    );
}

export default App;

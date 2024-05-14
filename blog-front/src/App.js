import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./views/home/HomeScreen";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import MainScreenApplication from "./views/home/MainScreenApplication";
import WindowSizeContext from "./context/WindowsSizeContext";
import NavigationVisibilityProvider from "./context/NavigationVisibilityContext";
import PostDisplay from "./views/post/PostDisplay";
import PostCreateView from "./views/post/PostCreateView";
import ResetPasswordDisplay from "./views/auth/ResetPasswordDisplay";
import SetNewPasswordDisplay from "./views/auth/SetNewPasswordDisplay";
import ChatPanelView from "./views/chat/ChatPanelView";
import {AuthProvider} from "./context/AuthContext";
import AdminPanelView from "./views/auth/AdminPanelView";
import CategoryCreateView from "./views/category/CategoryCreateView";
import CategoriesView from "./views/category/CategoriesView";
import PrivateRoute from "./context/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <WindowSizeContext>
                    <NavigationVisibilityProvider>
                        <MainScreenApplication>
                            <Routes>
                                <Route path="/home" element={<HomeScreen />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/sing-up" element={< Register/>} />
                                <Route path="/categories" element={< CategoriesView/>} />
                                <Route path="/category/create" element={< CategoryCreateView/>} />
                                <Route path="/posts/:page" element={< AdminPanelView/>} />
                                <Route path="/post-detail" element={< PostDisplay/>} />
                                <Route path="/post-create" element={< PostCreateView/>} />
                                <Route path="/reset/password" element={< ResetPasswordDisplay/>} />
                                <Route path="/reset/password/:token" element={< SetNewPasswordDisplay/>} />
                                <Route path="/chat-panel" element={< ChatPanelView/>} />
                                <Route path="/admin-panel" element={<PrivateRoute><AdminPanelView/></PrivateRoute>} />
                                <Route path="/user" element={< AdminPanelView/>} />
                                <Route path="/about/me" element={< AdminPanelView/>} />
                            </Routes>
                        </MainScreenApplication>
                    </NavigationVisibilityProvider>
                </WindowSizeContext>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

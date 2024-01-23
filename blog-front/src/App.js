import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import Login from "./views/Login";
import MainScreenApplication from "./views/MainScreenApplication";
import WindowSizeContext from "./context/WindowsSizeContext";
import NavigationVisibilityProvider from "./context/NavigationVisibilityContext";

function App() {
    return (
        <BrowserRouter>
            <WindowSizeContext>
                <NavigationVisibilityProvider>
                    <MainScreenApplication>
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </MainScreenApplication>
                </NavigationVisibilityProvider>
            </WindowSizeContext>
        </BrowserRouter>
    );
}

export default App;

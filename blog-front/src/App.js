import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainScreenApplication from "./views/home/MainScreenApplication";
import WindowSizeContext from "./context/WindowsSizeContext";
import NavigationVisibilityProvider from "./context/NavigationVisibilityContext";
import {AuthProvider} from "./context/AuthContext";
import AppRoutes from "./routes/appRoutes";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <WindowSizeContext>
                    <NavigationVisibilityProvider>
                        <MainScreenApplication>
                            <AppRoutes />
                        </MainScreenApplication>
                    </NavigationVisibilityProvider>
                </WindowSizeContext>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

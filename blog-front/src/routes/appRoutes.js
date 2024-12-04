import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../views/home/HomeScreen";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import CategoriesView from "../views/category/CategoriesView";
import CategoryCreateView from "../views/category/CategoryCreateView";
import AdminPanelView from "../views/auth/AdminPanelView";
import PostDisplay from "../views/post/PostDisplay";
import PostCreateView from "../views/post/PostCreateView";
import ResetPasswordDisplay from "../views/auth/ResetPasswordDisplay";
import SetNewPasswordDisplay from "../views/auth/SetNewPasswordDisplay";
import ChatPanelView from "../views/chat/ChatPanelView";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing-up" element={<Register />} />
        <Route path="/categories" element={<CategoriesView />} />  /
        <Route path="/category/create" element={<CategoryCreateView />} />
        <Route path="/posts/:page" element={<AdminPanelView />} />
        <Route path="/post-detail" element={<PostDisplay />} />
        <Route path="/post-create" element={<PostCreateView />} />
        <Route path="/reset/password" element={<ResetPasswordDisplay />} />
        <Route path="/reset/password/:token" element={<SetNewPasswordDisplay />} />
        <Route path="/chat-panel" element={<ChatPanelView />} />
        <Route path="/admin-panel" element={<AdminPanelView />} />
        <Route path="/user" element={<AdminPanelView />} />
    </Routes>
);

export default AppRoutes;
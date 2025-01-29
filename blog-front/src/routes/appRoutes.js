import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../views/home/HomeScreen";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import CategoryCreateView from "../views/category/CategoryCreateView";
import AdminPanelView from "../views/auth/AdminPanelView";
import PostDisplay from "../views/post/PostDisplay";
import PostCreateView from "../views/post/PostCreateView";
import ResetPasswordDisplay from "../views/auth/ResetPasswordDisplay";
import SetNewPasswordDisplay from "../views/auth/SetNewPasswordDisplay";
import ChatPanelView from "../views/chat/ChatPanelView";
import AdminApplicationView from "../views/auth/admin_panel_options";
import AdminPosts from "../components/AdminPanel/admin_posts";
import AdminCategories from "../components/AdminPanel/admin_categories";
import AdminUsers from "../components/AdminPanel/admin_users";
import UserProfile from "../components/UserProfile/user_profile";
import WebSocketChat from "../services/ws";
import ImageDisplay from "../views/post/image_test_display";
import UserPanel from "../views/user/user_posts";
import UserAccount from "../views/user/user_account";

const AppRoutes = () => (
    <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/me" element={<UserPanel/>} />
            <Route path="/me/account" element={<UserAccount/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/sing-up" element={<Register />} />
            <Route path="/category/create" element={<CategoryCreateView />} />
            <Route path="/posts/:page" element={<AdminPanelView />} />
            <Route path="/post-detail/:id" element={<PostDisplay />} />
            <Route path="/post-create" element={<PostCreateView />} />
            <Route path="/reset/password" element={<ResetPasswordDisplay />} />
            <Route path="/reset/password/:token" element={<SetNewPasswordDisplay />} />
            <Route path="/chat-panel" element={<ChatPanelView />} />
            <Route path="/admin-panel" element={<AdminPanelView />} />
            <Route path="/admin-panel/posts" element={<AdminPosts />} />
            <Route path="/admin-panel/categories" element={<AdminCategories />} />
            <Route path="/admin-panel/options" element={<AdminApplicationView />} />
            <Route path="/admin-panel/users" element={<AdminUsers />} />
            <Route path="/admin-panel/user" element={<UserProfile />} />
            <Route path="/user" element={<AdminPanelView />} />
            <Route path="/chat" element={<WebSocketChat />} />
            <Route path="/test-image" element={<ImageDisplay />} />
    </Routes>
);

export default AppRoutes;
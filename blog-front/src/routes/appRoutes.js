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
import AdminApplicationView from "../views/auth/admin_panel_options";
import AdminPosts from "../views/auth/admin_posts";
import AdminCategories from "../views/auth/admin_categories";
import AdminUsers from "../views/auth/admin_users";
import UserProfile from "../components/UserProfile/UserProfile";
import WebSocketChat from "../services/ws";
import ImageDisplay from "../views/post/image_test_display";

const AppRoutes = () => (
    // <ErrorProvider>
            <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/me" element={<AdminPanelView/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sing-up" element={<Register />} />
                    <Route path="/categories" element={<CategoriesView />} />  /
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
    // </ErrorProvider>

);

export default AppRoutes;
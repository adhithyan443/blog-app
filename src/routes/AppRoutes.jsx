import { Navigate, Route, Routes } from "react-router-dom";
import BlogDetails from "../pages/BlogDetails";
import BlogForm from "../pages/BlogForm";
import BlogList from "../pages/BlogList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layout/Layout";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/"
                element={<Navigate to="/login" replace />} />

            {/*Public routes*/}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            {/*Protected routes*/}

            <Route element={
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            } >

                <Route path="/blogs" element={<BlogList />} />
                <Route path="/blog/add" element={<BlogForm />} />
                <Route
                    path="/blogs/edit/:id"
                    element={<BlogForm />} />

                <Route path="/blog/:id" element={<BlogDetails />} />

            </Route>
            
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}
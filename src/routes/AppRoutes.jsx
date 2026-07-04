import { Navigate, Route, Routes } from "react-router-dom";
import BlogDetails from "../pages/BlogDetails";
import BlogForm from "../pages/BlogForm";
import BlogList from "../pages/BlogList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/"
                element={<Navigate to="/login" replace />} />

            {/*Public routes*/}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            {/*Protected routes*/}
            <Route path="/blogs" element={
                <ProtectedRoute>
                    <BlogList />
                </ProtectedRoute>
            } />
            <Route path="/blog/add" element={
                <ProtectedRoute>
                    <BlogForm />
                </ProtectedRoute>
            } />
            <Route
                path="/blogs/edit/:id"
                element={
                    <ProtectedRoute>
                        <BlogForm />
                    </ProtectedRoute>
                }
            />

            <Route path="/blog/:id" element={
                <ProtectedRoute>
                    <BlogDetails />
                </ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}
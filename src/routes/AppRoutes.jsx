import { Navigate, Route, Routes } from "react-router-dom";
import BlogDetails from "../pages/BlogDetails";
import BlogForm from "../pages/BlogForm";
import BlogList from "../pages/BlogList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/"
                element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/add" element={<BlogForm />} />
            <Route
                path="/blogs/edit/:id"
                element={<BlogForm />}
            />

            <Route path="/blog/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}
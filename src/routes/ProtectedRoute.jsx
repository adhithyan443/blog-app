import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";




export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    // Wait until Firebase finishes checking the auth state
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg font-medium">Loading...</p>
            </div>
        );
    }

    // If not logged in, redirect to login page
    if (!user){
        return <Navigate to = "/login" replace />;
    }

    return children; // User is authenticated, render the protected page
}
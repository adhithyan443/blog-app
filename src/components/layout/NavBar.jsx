import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <nav className="bg-violet-600 text-white shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    MyBlog
                </h1>

                {/* Navigation */}
                <div className="flex items-center gap-8">
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-white"
                                : "text-violet-200 hover:text-white"
                        }
                    >
                        Blogs
                    </NavLink>

                    <NavLink
                        to="/blog/add"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-white"
                                : "text-violet-200 hover:text-white"
                        }
                    >
                        Add Blog
                    </NavLink>
                </div>

                {/* User Section */}
                <div className="flex items-center gap-4">
                    <span className="font-medium">
                        {user?.email}
                    </span>

                    <button
                        onClick={handleLogout}
                        className="rounded bg-white px-4 py-2 text-violet-600 transition hover:bg-violet-100"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}
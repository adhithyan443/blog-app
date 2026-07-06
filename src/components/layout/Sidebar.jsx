import { NavLink, useNavigate } from "react-router-dom";
import {
    BookOpen,
    CirclePlus,
    LogOut,
    PenSquare,
    User,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { NotebookPen } from "lucide-react";

export default function Sidebar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();

            toast.success("Logged out successfully 👋");
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
            ? "bg-violet-100 text-violet-700"
            : "text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <aside className="flex h-screen w-60 flex-col border-r border-gray-200 bg-white">

            {/* Logo */}

            <div className="flex items-center gap-3 border-b border-gray-200 px-5 py-5">
                <div className="rounded-lg bg-violet-600 p-2 text-white">
                    <PenSquare size={18} />
                </div>

                <h1 className="text-xl font-bold text-gray-800">
                    Blog App
                </h1>
            </div>

            {/* Navigation */}

            <nav className="flex-1 px-4 py-5">
                <div className="space-y-2">

                    <NavLink
                        to="/blogs"
                        className={linkClass}
                    >
                        <BookOpen size={18} />
                        <span>All Blogs</span>
                    </NavLink>

                    <NavLink
                        to="/my-blogs"
                        className={linkClass}
                    >
                        <NotebookPen size={18} />
                        My Blogs
                    </NavLink>

                    <NavLink
                        to="/blog/add"
                        className={linkClass}
                    >
                        <CirclePlus size={18} />
                        <span>Add New Blog</span>
                    </NavLink>

                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>
            </nav>

            {/* User */}

            <div className="border-t border-gray-200 p-4">
                <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-white">
                        <User size={18} />
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-gray-800">
                            {user?.email?.split("@")[0]}
                        </h3>

                        <p className="truncate text-xs text-gray-500">
                            {user?.email}
                        </p>
                    </div>

                </div>
            </div>

        </aside>
    );
}
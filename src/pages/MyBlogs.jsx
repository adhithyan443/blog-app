import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { useAuth } from "../hooks/useAuth";
import { getMyBlogs } from "../services/blogService";

import BlogCard from "../components/blog/BlogCard";
import SearchBar from "../components/blog/SearchBar";

export default function MyBlogs() {
    const { user } = useAuth();

    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // console.log("Current User UID:", user.uid);
                const data = await getMyBlogs(user.uid);
                // console.log("My Blogs:", data);
                setBlogs(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (user) {
            fetchBlogs();
        }
    }, [user]);

    const filteredBlogs = blogs.filter((blog) => {
        return (
            blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.content.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <>
            {/* Header */}
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        My Blogs
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Manage all the blogs you've published.
                    </p>
                </div>

                <Link
                    to="/blog/add"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
                >
                    <Plus size={18} />
                    Add Blog
                </Link>
            </div>

            <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredBlogs.length ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white py-20 text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        You haven't published any blogs yet.
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Start writing your first blog today.
                    </p>
                </div>
            )}
        </>
    );
}
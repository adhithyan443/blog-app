import { useEffect, useState } from "react";
import { ArrowLeft, FileText, Save } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

import {
    addBlog,
    getBlogById,
    updateBlog,
} from "../services/blogService";

export default function BlogForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { user } = useAuth();
    const navigate = useNavigate();

    const { id } = useParams();
    const isEditMode = Boolean(id);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isEditMode) {
            setTitle("");
            setContent("");
            return;
        }

        const fetchBlog = async () => {
            try {
                const blog = await getBlogById(id);

                setTitle(blog.title);
                setContent(blog.content);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlog();
    }, [id, isEditMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const blog = {
                title,
                content,
                authorId: user.uid,
                authorEmail: user.email,
            };

            if (isEditMode) {
                await updateBlog(id, {
                    title,
                    content,
                });

                toast.success("Blog updated successfully ✨");
            } else {
                await addBlog(blog);

                toast.success("Blog published successfully 🚀");
            }

            navigate("/blogs");
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate("/blogs");
    };

    return (
        <div className="mx-auto max-w-5xl">

            {/* Back Button */}
            <button
                onClick={handleCancel}
                className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition hover:text-violet-700"
            >
                <ArrowLeft size={18} />
                Back to Blogs
            </button>

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    {isEditMode ? "Edit Blog" : "Create New Blog"}
                </h1>

                <p className="mt-1 text-gray-500">
                    {isEditMode
                        ? "Update your existing blog."
                        : "Share your knowledge with the community."}
                </p>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Title */}
                    <div>
                        <label
                            htmlFor="title"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                        >
                            Blog Title
                        </label>

                        <input
                            id="title"
                            type="text"
                            placeholder="Enter an engaging title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label
                            htmlFor="content"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                        >
                            Blog Content
                        </label>

                        <textarea
                            id="content"
                            placeholder="Write your blog here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="h-56 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 leading-7 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                isEditMode ? "Updating..." : "Publishing..."
                            ) : isEditMode ? (
                                <>
                                    <Save size={18} />
                                    Update Blog
                                </>
                            ) : (
                                <>
                                    <FileText size={18} />
                                    Publish Blog
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
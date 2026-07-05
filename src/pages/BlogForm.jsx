import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { addBlog } from "../services/blogService";

export default function BlogForm() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { user } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const blog = {
                title,
                content,
                authorId: user.uid,
                authorEmail: user.email,
            };

            await addBlog(blog);
            navigate("/blogs")

        } catch (error) {
            console.error(error);

        }
    };

    const handleCancel = () => {
        navigate("/blogs");
    };

    return (
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">
                Add New Blog
            </h1>

            <form
                className="space-y-6"
                onSubmit={handleSubmit}
            >
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>

                    <input
                        id="title"
                        type="text"
                        placeholder="Enter blog title"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        value={title}
                        onChange={(e) => (setTitle(e.target.value))}
                        required
                    />
                </div>

                {/* Content */}
                <div>
                    <label
                        htmlFor="content"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Content
                    </label>

                    <textarea
                        id="content"
                        rows="10"
                        placeholder="Write your blog here..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 resize-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-violet-600 px-6 py-2 font-medium text-white transition hover:bg-violet-700"
                    >
                        Publish Blog
                    </button>
                </div>
            </form>
        </div>
    );
}
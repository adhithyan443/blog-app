import { useEffect, useState } from "react";
import {
    ArrowLeft,
    CalendarDays,
    Pencil,
    User
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBlog, getBlogById } from "../services/blogService";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import ConfirmModal from "../components/ui/ConfirmModal";
import { formatDate } from "../utils/formateDate";
import BlogDetailsSkeleton from "../components/skeleton/BlogDetailsSkeleton";

export default function BlogDetails() {
    const [blog, setBlog] = useState(null);

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const isOwner = user?.uid === blog?.authorId;

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getBlogById(id);
                setBlog(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }

        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <BlogDetailsSkeleton />;
    }

    if (!blog) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-700">
                    Blog not found
                </h2>

                <p className="mt-3 text-gray-500">
                    The blog you're looking for doesn't exist.
                </p>
            </div>
        );
    }

    const handleDelete = async () => {
        try {
            await deleteBlog(blog.id);

            toast.success("Blog deleted successfully 🗑️");

            navigate("/blogs");
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }
    };

    return (
        <div className="mx-auto max-w-5xl">

            {/* Back Button */}

            <Link
                to="/blogs"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700"
            >
                <ArrowLeft size={18} />
                Back to Blogs
            </Link>

            {/* Card */}

            <div className="rounded-2xl bg-white p-8 shadow-sm">

                {/* Title */}

                <h1 className="mb-6 text-4xl font-bold text-gray-800">
                    {blog.title}
                </h1>

                {/* Author */}

                <div className="mb-8 flex flex-wrap items-center justify-between gap-6 border-b pb-6">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                            <User
                                size={24}
                                className="text-violet-600"
                            />
                        </div>

                        <div>

                            <p className="font-semibold text-gray-800">
                                {blog.authorEmail}
                            </p>

                            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                                <CalendarDays size={16} />

                                Published on {formatDate(blog.createdAt)}
                            </div>

                        </div>

                    </div>

                    {isOwner && (
                        <div className="flex gap-3">

                            <Link
                                to={`/blogs/edit/${blog.id}`}
                                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-white transition hover:bg-violet-700"
                            >
                                <Pencil size={18} />
                                Edit
                            </Link>

                            <button
                                className="rounded bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
                                onClick={() => setShowModal(true)}
                            >
                                Delete
                            </button>

                        </div>
                    )}

                </div>

                {/* Blog Content */}

                <div className="space-y-6 leading-8 text-gray-700">

                    <p className="whitespace-pre-line">
                        {blog.content}
                    </p>

                </div>

            </div>

            <ConfirmModal
                isOpen={showModal}
                title="Delete Blog"
                message="Are you sure you want to delete this blog? This action cannot be undone."
                onCancel={() => setShowModal(false)}
                onConfirm={handleDelete}
            />

        </div>
    );
}
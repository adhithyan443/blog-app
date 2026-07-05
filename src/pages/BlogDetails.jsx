import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogById } from "../services/blogService";
import { useAuth } from "../hooks/useAuth";

export default function BlogDetails() {

    const [blog, setBlog] = useState(null);

    const { id } = useParams();

    const { user } = useAuth();

    const isOwner = user?.uid === blog?.authorId;

    useEffect(() => {

        const fetchBlog = async () => {

            try {
                console.log("Blog ID:", id);

                const data = await getBlogById(id);

                console.log("Fetched Blog:", data);

                setBlog(data);

            } catch (error) {
                console.log(error)
            }
        }

        fetchBlog();

    }, [id]);



    if (!blog) {
        return (
            <h1 className="text-center text-2xl">
                Loading...
            </h1>
        );
    }


    return (

        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
                {blog.title}
            </h1>

            <div className="mb-8 flex items-center justify-between border-b pb-4">
                <div>
                    <p className="font-medium text-gray-700">
                        {blog.authorEmail}
                    </p>

                    <p className="text-sm text-gray-500">
                        Coming soon..
                    </p>
                </div>
            </div>

            <div className="prose max-w-none">
                <p>
                    {blog.content}
                </p>
            </div>

            {isOwner && (
                <div className="mt-8 flex gap-4">
                    <Link
                        to={`/blogs/edit/${blog.id}`}
                        
                        className="rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                    >
                        Edit
                    </Link>
                </div>
            )}

        </div>
    );
}
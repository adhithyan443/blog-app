import { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import { getBlogs } from "../services/blogService";

export default function BlogList() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogs();

    }, []);

    console.log(blogs)
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                />

            ))}
        </div>
    );
}
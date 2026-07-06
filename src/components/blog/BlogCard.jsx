import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formateDate";


export default function BlogCard({ blog }) {
    return (
        <article className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            {/* Title */}

            <h2 className="mb-2 line-clamp-2 text-xl font-semibold text-gray-900">
                {blog.title}
            </h2>

            {/* Content */}

            <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-gray-600">
                {blog.content}
            </p>

            {/* Footer */}

            <div className="border-t pt-4">

                <div className="mb-4">

                    <p className="text-sm font-semibold text-gray-800">
                        {blog.authorEmail}
                    </p>

                    <p className="text-xs text-gray-400">
                        {formatDate(blog.createdAt)}
                       
                    </p>

                </div>

                <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
                >
                    Read More

                    <ArrowRight size={16} />
                </Link>

            </div>

        </article>
    );
}
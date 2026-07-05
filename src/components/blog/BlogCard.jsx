export default function BlogCard({ blog }) {
    return (
        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
               {blog.title}
            </h2>

            <p className="mb-5 line-clamp-3 text-gray-600">
                {blog.content}
            </p>

            <div className="flex items-center justify-between border-t pt-4">
                <div>
                    <p className="text-sm font-medium text-gray-700">
                       {blog.authorEmail}
                    </p>

                    <p className="text-xs text-gray-500">
                      Coming soon ...
                    </p>
                </div>

                <button className="rounded bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700">
                    Read More
                </button>
            </div>
        </article>
    );
}
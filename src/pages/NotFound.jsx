import { Link } from "react-router-dom";
import { House, TriangleAlert } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-10 text-center shadow-lg">

                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-gray-100 select-none">
                    404
                </span>

                <div className="relative z-10">
                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-violet-100">
                        <TriangleAlert
                            size={48}
                            className="text-violet-600"
                        />
                    </div>

                    {/* Error Code */}
                    <h1 className="text-7xl font-extrabold text-violet-600">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl font-bold text-gray-800">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-gray-500">
                        Sorry, the page you are looking for doesn't exist or has
                        been moved.
                    </p>

                    {/* Button */}
                    <Link
                        to="/blogs"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
                    >
                        <House size={18} />
                        Back to Home
                    </Link>

                </div>
            </div>
        </div>
    );
}
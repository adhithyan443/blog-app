export default function BlogDetailsSkeleton() {
    return (
        <div className="mx-auto max-w-5xl animate-pulse">

            {/* Back Button */}
            <div className="mb-6 h-5 w-32 rounded bg-gray-200"></div>

            {/* Title */}
            <div className="mb-4 h-10 w-3/4 rounded bg-gray-200"></div>

            {/* Author */}
            <div className="mb-8 flex items-center justify-between border-b pb-6">
                <div>
                    <div className="mb-2 h-5 w-40 rounded bg-gray-200"></div>
                    <div className="h-4 w-24 rounded bg-gray-200"></div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <div className="h-5 rounded bg-gray-200"></div>
                <div className="h-5 rounded bg-gray-200"></div>
                <div className="h-5 rounded bg-gray-200"></div>
                <div className="h-5 w-11/12 rounded bg-gray-200"></div>
                <div className="h-5 rounded bg-gray-200"></div>
                <div className="h-5 w-4/5 rounded bg-gray-200"></div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
                <div className="h-11 w-28 rounded-xl bg-gray-200"></div>
                <div className="h-11 w-28 rounded-xl bg-gray-200"></div>
            </div>

        </div>
    );
}
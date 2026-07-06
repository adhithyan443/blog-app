export default function BlogCardSkeleton() {
    return (
        <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Title */}
            <div className="mb-4 h-7 w-3/4 rounded bg-gray-200"></div>

            {/* Content */}
            <div className="space-y-3">
                <div className="h-4 rounded bg-gray-200"></div>
                <div className="h-4 rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                <div className="h-4 w-2/3 rounded bg-gray-200"></div>
            </div>

            {/* Footer */}
            <div className="mt-8 border-t pt-5">
                <div className="mb-4 h-4 w-1/2 rounded bg-gray-200"></div>
                <div className="h-4 w-1/3 rounded bg-gray-200"></div>
            </div>
        </div>
    );
}
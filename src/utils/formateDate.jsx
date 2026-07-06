export function formatDate(timestamp) {
    if (!timestamp) return "Just now";

    const date = timestamp.toDate();

    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}
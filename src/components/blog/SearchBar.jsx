import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative mb-8 ">
            <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search blogs..."
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
        </div>
    );
}
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const { register: registerUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        try {
            await registerUser(email, password);
            navigate("/blogs");
        } catch (error) {
            setError(error.message);
        }
    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Create Account
                </h1>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => (setEmail(e.target.value))}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            required
                            autoComplete="email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => (setPassword(e.target.value))}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Register
                    </button>
                    {
                        error && (
                            <p className="text-sm text-red-500">
                                {error}
                            </p>
                        )
                    }
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>

    );
}
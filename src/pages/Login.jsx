import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login: loginUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")

        try {
            await loginUser(email, password);
            navigate('/blogs');
        } catch (error) {
            setError(error)
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Login
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
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
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e => (setEmail(e.target.value)))}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}

                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
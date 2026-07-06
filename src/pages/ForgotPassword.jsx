import { useState } from "react";
import { Link } from "react-router-dom";
import { PenSquare, ArrowLeft } from "lucide-react";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "../firebase/config";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Please enter your email.");
            return;
        }

        try {
            setLoading(true);

            await sendPasswordResetEmail(auth, email);

            toast.success("Password reset email sent 📧");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 via-white to-blue-50 px-4">
            <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">

                {/* Header */}
                <div className="bg-violet-600 px-8 py-8 text-center text-white">

                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                        <PenSquare size={30} />
                    </div>

                    <h1 className="text-3xl font-bold">
                        Forgot Password?
                    </h1>

                    <p className="mt-2 text-sm text-violet-100">
                        Enter your email and we'll send you a password reset link.
                    </p>

                </div>

                {/* Form */}
                <div className="p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading
                                ? "Sending..."
                                : "Send Reset Link"}
                        </button>

                    </form>

                    <div className="mt-6 text-center">

                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:underline"
                        >
                            <ArrowLeft size={16} />
                            Back to Login
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
}
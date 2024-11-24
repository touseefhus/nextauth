"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

interface LoginProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRegisterClick: () => void;
}

const Login: React.FC<LoginProps> = ({ open, onOpenChange, onRegisterClick }) => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        try {
            setLoading(true);
            const response = await axios.post("/api/user/login", user);

            // Show success toast
            toast.success("Login successful! Redirecting...");

            // Clear form
            setUser({ email: "", password: "" });

            // Close modal and redirect
            setTimeout(() => {
                onOpenChange(false);
                router.push("/pages/article"); // Redirect to dashboard or homepage
            }, 1500);
        } catch (error: any) {
            if (error.response?.status === 400) {
                toast.error("Invalid email or password. Please try again.");
            } else {
                toast.error(
                    error.response?.data?.message || "Login failed. Please try again."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email && user.password) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <>
            {/* Toast notifications */}
            <Toaster position="top-center" reverseOrder={false} />

            <Dialog.Root open={open} onOpenChange={onOpenChange}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 focus:outline-none">
                        <Dialog.Title className="text-xl font-semibold text-gray-800 mb-2">
                            Login
                        </Dialog.Title>
                        <Dialog.Description className="text-gray-600 mb-4">
                            Welcome back! Please log in to continue.
                        </Dialog.Description>
                        <form className="space-y-4" onSubmit={onLogin}>
                            <input
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                value={user.password}
                                onChange={(e) =>
                                    setUser({ ...user, password: e.target.value })
                                }
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                // onClick={onRegisterClick}
                                type="submit"
                                className={`w-full p-3 text-white rounded-md ${buttonDisabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                                disabled={buttonDisabled || loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                        <p className="text-sm text-gray-600 mt-4">
                            Don't have an account?{" "}
                            <button onClick={onRegisterClick} className="text-blue-500 text-right hover:underline">
                                Register here
                            </button>
                        </p>

                        <Dialog.Close asChild>
                            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                                ✕
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root >
        </>
    );
};

export default Login;

"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface RegisterProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    // onLogiClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ open, onOpenChange, }) => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.post("/api/user/register", user);

            toast.success("Registered successfully! Redirecting...");
            setUser({ name: "", email: "", password: "" });

            setTimeout(() => {
                onOpenChange(false);
                router.push("/");
            }, 1500);
        } catch (error: any) {
            if (error.response?.status === 400) {
                toast.error("User already exists! Please log in.");
            } else {
                toast.error(
                    error.response?.data?.message || "Registration failed. Please try again."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setButtonDisabled(!user.name || !user.email || !user.password);
    }, [user]);
    useEffect(() => {
        setButtonDisabled(!user.name || !user.email || !user.password);
    }, [user]);

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Dialog.Root open={open} onOpenChange={onOpenChange}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
                    <Dialog.Content
                        className="fixed top-1/2 left-1/2 w-[90%] max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 focus:outline-none z-50"
                        aria-labelledby="dialog-title"
                        aria-describedby="dialog-description"
                    >
                        {/* Visually Hidden Title for Screen Readers */}
                        <Dialog.Title className="text-xl font-semibold text-gray-800 mb-2">
                            Register
                        </Dialog.Title>
                        <Dialog.Description
                            id="dialog-description"
                            className="text-gray-600 mb-4"
                        >
                            Create an account to get started.
                        </Dialog.Description>
                        <form className="space-y-4" onSubmit={onRegister}>
                            <input
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className={`w-full p-3 text-white rounded-md ${buttonDisabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                                disabled={buttonDisabled || loading}
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>
                        </form>
                        <p className="text-sm text-gray-600 mt-4">
                            have an account?{" "}
                            <button className="text-blue-500 text-right hover:underline">
                                Login here
                            </button>
                        </p>
                        <Dialog.Close asChild>
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};

export default Register;

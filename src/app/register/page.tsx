"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface RegisterProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ open, onOpenChange }) => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onRegister = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        try {
            setLoading(true);
            const response = await axios.post("/api/user/register", user);

            // Show success toast
            toast.success("Registered successfully! Redirecting...");

            // Clear form
            setUser({ name: "", email: "", password: "" });

            // Close modal after short delay
            setTimeout(() => {
                onOpenChange(false);
                router.push("/");
            }, 1500); // Redirect and close modal after 1.5s
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
        if (user.name && user.email && user.password) {
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
                            Register
                        </Dialog.Title>
                        <Dialog.Description className="text-gray-600 mb-4">
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
                        <Dialog.Close asChild>
                            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
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

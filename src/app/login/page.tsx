"use client"; // Required for app directory components

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import * as Dialog from "@radix-ui/react-dialog";

interface LoginProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRegisterClick: () => void;
    onLoginSuccess?: () => void; // Optional if not always needed
}

const Login: React.FC<LoginProps> = ({ open, onOpenChange, onRegisterClick }) => {
    const router = useRouter(); // Correct usage
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/user/login", user);

            if (response.status === 200) {
                toast.success("Login Successfully");

                // Clear form and redirect
                setUser({ email: "", password: "" });
                setTimeout(() => {
                    onOpenChange(false);
                    router.push("/pages/article"); // Redirect
                }, 1500);
            }
        } catch (error: any) {
            toast.error(
                error.response?.data?.error || "An error occurred. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setButtonDisabled(!user.email || !user.password);
    }, [user]);

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Dialog.Root open={open} onOpenChange={onOpenChange}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Title className="text-xl font-semibold mb-2">
                            Login
                        </Dialog.Title>
                        <form onSubmit={onLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                className="w-full p-3 border rounded-md mb-2"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) =>
                                    setUser({ ...user, password: e.target.value })
                                }
                                className="w-full p-3 border rounded-md mb-2"
                            />
                            <button
                                type="submit"
                                className={`w-full p-3 rounded-md ${buttonDisabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                                disabled={buttonDisabled || loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                        <button
                            onClick={onRegisterClick}
                            className="text-blue-500 hover:underline mt-4"
                        >
                            Register here
                        </button>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};

export default Login;

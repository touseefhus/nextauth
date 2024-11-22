"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("");

    const userDetails = async () => {
        try {
            const response = await axios.post("/api/user/profile");
            console.log(response.data);
            setData(response.data.data._id);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        try {
            const response = await axios.get("/api/user/logout");
            console.log(response.data);
            toast.success("User logged out successfully");
            router.push("/");
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Profile Page</h1>
                <hr className="my-4" />
                <h2 className="text-lg text-gray-700 text-center">
                    {data === "nothing" ? (
                        "Nothing"
                    ) : (
                        <Link href={`profile${data}`} className="text-blue-500 hover:underline">
                            {data}
                        </Link>
                    )}
                </h2>
                <hr className="my-4" />
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                        Logout
                    </button>
                    <button
                        onClick={userDetails}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Get User Details
                    </button>
                </div>
            </div>
        </div>
    );
}

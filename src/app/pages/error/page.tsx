"use client"
import React from "react";

const Page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    🚪 Access Denied!
                </h1>
                <p className="text-gray-600 mb-6">
                    You need to log in first to access this page. Please log in to continue.
                </p>
                <button
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition-all"
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default Page;

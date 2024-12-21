"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface GameData {
    name: string;
    description: string;
    price: string;
    category: string;
    image: File | null;
}

const GameUploadForm: React.FC = () => {
    const [formData, setFormData] = useState<GameData>({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData((prevData) => ({
            ...prevData,
            image: file,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, description, price, category, image } = formData;

        // Validate form fields
        if (!name || !description || !price || !category || !image) {
            toast.error("All fields (name, description, price, category, and image) are required.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", name);
        formDataToSend.append("description", description);
        formDataToSend.append("price", price);
        formDataToSend.append("category", category);
        formDataToSend.append("image", image);

        try {
            const response = await fetch("/api/games", {
                method: "POST",
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Game added successfully")
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    category: "",
                    image: null,
                }); // Reset form after success
            } else {
                toast.error(result.error || "Something went wrong, please try again.");
            }
        } catch (err) {
            toast.error("Network error. Please try again.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Upload a New Game</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Game Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="PC">PC</option>
                        <option value="Mobile">Mobile</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700">Game Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Upload Game
                </button>
            </form>
            <ToastContainer position="top-right" autoClose={5000} />
        </div>
    );
};

export default GameUploadForm;

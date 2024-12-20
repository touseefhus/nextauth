"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Game {
    id: number;
    name: string;
}

interface HeroProps {
    games?: Game[];
}

const Hero: React.FC<HeroProps> = ({ games = [] }) => { // Default to an empty array
    const [query, setQuery] = useState("");

    // Filter games based on query
    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(query.toLowerCase())
    );

    // Handle input change
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div id="gradient" className="container  mx-auto rounded-3xl">
            <div className="text-center py-28 text-white">
                <h1 className="leading-normal text-2xl sm:text-5xl font-semibold">
                    Welcome to GetUnityCodes
                </h1>
                <p>Buy premium Unity game source codes exclusively at GetUnityCodes.</p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ maxWidth: "600px", margin: "30px auto" }}
                    className="relative flex items-center px-4"
                >
                    <input
                        type="text"
                        value={query}
                        onChange={handleFilter}
                        className="p-3 pl-3 pr-10 border border-gray-300 rounded-2xl w-full"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className="absolute right-7 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-2xl flex items-center justify-center"
                    >
                        Search
                        <span className="ml-3 p-1 rounded-full border-2 border-white flex items-center justify-center">
                            <FaArrowRightLong className="text-white" />
                        </span>
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Hero;

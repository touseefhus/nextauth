import React from "react";
import Hero from "../home/hero/page";

const App = () => {
    const games = [
        { id: 1, name: "Unity 3D Car Racing" },
        { id: 2, name: "2D Puzzle Game" },
        { id: 3, name: "Battle Royale Shooter" },
        { id: 4, name: "Casual Clicker Game" },
        { id: 5, name: "Fantasy RPG Adventure" },
    ];

    return (
        <Hero games={games} />
    );
};

export default App;

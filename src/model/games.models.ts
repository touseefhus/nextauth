import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the game data
export interface IGame extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

// Create the schema for the game
const gamesSchema = new Schema<IGame>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ["PC", "Mobile"],
        required: true,
    },
    image: {
        type: String, // Store the path to the image in DB
        required: true,
    },
});

// Create and export the model
const Game = mongoose.models.Game || mongoose.model<IGame>("Game", gamesSchema);

export default Game;

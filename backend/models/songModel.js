import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    artist: { 
        type: String, 
        required: true 
    },
    album: { 
        type: String 
    },
    genre: { 
        type: String 
    },
    albumArt: { 
        type: String 
    },
});

export default mongoose.model("Song", songSchema);

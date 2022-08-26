const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({ 
    title:
    {
        type: String,
        required: true,
        unique: true, 
    },
    director:
    {
        type: String,
        default: "Not Specified",
    },
});

const Movie = mongoose.model("film", movieSchema); 

module.exports = Movie
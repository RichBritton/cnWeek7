const Movie = require("./movieModel") 

exports.createMovie = async (movieObject) => {
    try
    {
        await Movie.create(movieObject)
        
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try
    {
        return await Movie.find({})
    }
    catch (error)
    {
        console.log(error)
    }
}


exports.removeMovie = async (movieObject) => {
    try
    {
        await Movie.deleteOne(movieObject)
    }
    catch (error)
    {
        console.log(error)
    }
}


exports.updateMovie = async (movieObject) => {
    try
    {
        const query = {'title': movieObject.title};
        const update = {'director': movieObject.director};

        await Movie.findOneAndUpdate(query,update)

    }
    catch (error)
    {
        console.log(error)
    }
}
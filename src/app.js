require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs") 

const { createMovie, listMovies, removeMovie, updateMovie } = require("./movie/movieFunctions")

async function app(yargsObject)
{
    try
    {
        if(yargsObject.add)
        {
            await createMovie({title: yargsObject.title, director: yargsObject.director})
            console.log(await listMovies())
        }
        else if (yargsObject.list)
        {
            console.log(await listMovies())
        }
        else if (yargsObject.remove)
        {
            await removeMovie({title: yargsObject.title})
            console.log(await listMovies())
        }
        else if (yargsObject.update)
        {
            await updateMovie({title: yargsObject.title, director: yargsObject.director})
            console.log(await listMovies())
        }
        else
        {
            console.log("incorrect command")
        }
        await mongoose.disconnect();
    }
    catch (error)
    {
        console.log(error);
        await mongoose.disconnect();
    }
}

app(yargs.argv)
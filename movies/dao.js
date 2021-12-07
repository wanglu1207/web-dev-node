const model = require('./model');           // load model

// console.log(model)
const findAllMovies = () => model.find();                          // use model's find function to implement findAllMovies

const deleteMovie=(id)=>                    // implement function to remove a movie given its ID
    model.deleteOne({_id:id});              // use mongoose model removeOne function to remove movie by ID

const createMovie=(movie)=>
    model.create(movie);

const findMovieById = (id) =>
    model.findById(id);

const updateMovie=(id,movie)=>
    model.updateOne({_id:id},{$set:movie});


module.exports = {                          // export as an API to use in service
    findAllMovies,deleteMovie,createMovie,findMovieById,updateMovie
};

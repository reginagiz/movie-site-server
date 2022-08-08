import Movie from './Movie.js';
import fileService from './fileService.js';

class MovieService {
  async create(movie) {
    const createdMovie = await Movie.create(movie);
    return createdMovie;
  }

  async getAll() {
    const movies = await Movie.find({});
    return movies;
  }
  async getOne(id) {
    if (!id) {
      throw new Error('Id not specified');
    }
    const movie = await Movie.findById(id);
    return movie;
  }
  async update(movie) {
    if (!movie._id) {
      throw new Error('Id not specified');
    }
    const updatedMovie = await Movie.findByIdAndUpdate(movie._id, movie, {
      new: true,
    });
    return updatedMovie;
  }
  async delete(id) {
    if (!id) {
      throw new Error('Id not specified');
    }
    const movie = await Movie.findByIdAndDelete(id);
    return movie;
  }
}

export default new MovieService();

import MovieService from './MovieService.js';

class MovieController {
  async create(req, res) {
    try {
      const movie = await MovieService.create(req.body.data);
      res.json(movie);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const movies = await MovieService.getAll();
      return res.json(movies);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const movie = await MovieService.getOne(req.params.id);
      return res.json(movie);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const updatedMovie = await MovieService.update(req.body);
      return res.json(updatedMovie);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const movie = await MovieService.delete(req.params.id);
      return res.json(movie);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new MovieController();

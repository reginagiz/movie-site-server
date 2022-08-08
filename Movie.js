import mongoose from 'mongoose';

const Movie = new mongoose.Schema({
  Title: { type: String, required: false },
  Year: { type: String, required: false },
  Rated: { type: String, required: false },
  Released: { type: String, required: false },
  Runtime: { type: String, required: false },
  Genre: { type: String, required: false },
  Director: { type: String, required: false },
  Writer: { type: String, required: false },
  Actors: { type: String, required: false },
  Plot: { type: String, required: false },
  Language: { type: String, required: false },
  Country: { type: String, required: false },
  Awards: { type: String, required: false },
  Poster: { type: String, required: false },
  Metascore: { type: String, required: false },
  imdbRating: { type: String, required: false },
  imdbVotes: { type: String, required: false },
  imdbID: { type: String, required: false },
  Type: { type: String, required: false },
  Response: { type: String, required: false },
  Images: { type: [String], required: false },
});

export default mongoose.model('Movie', Movie);

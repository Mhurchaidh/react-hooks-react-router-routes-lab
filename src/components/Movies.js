import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesList = movies.map(movie => {
    return (
      <div key={movie.title}>
        {`${movie.title} -`}
        {` ${movie.time}`}
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
}

export default Movies;

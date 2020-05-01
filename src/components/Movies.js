import React from 'react';
import { movies } from '../data';



const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return(
            <div>
              <h2>Name: {movie.title}</h2>
              <h3>Time: {movie.time}</h3>
              <h3>
                Genres:
                <ul>
                  {movie.genres.map(genre => <li>{genre}</li>)}
                </ul>
              </h3>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;

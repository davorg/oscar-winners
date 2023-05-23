import React from 'react';

const movies = [
  // Array of movie objects
  // Each movie object could have an id, title, year and a watched property
  // This data will likely come from an API request or your database in a real application
];

const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <input type="checkbox" checked={movie.watched} onChange={() => {/* Handle checkbox change */}}/>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;


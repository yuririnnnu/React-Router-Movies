import React from 'react';
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  const { movies } = props
  
  console.log("movies")
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  // const { url } = useRouteMatch();
  
  return (
    <div className="movie-card">
      <Link to={`movieList/${props.movie.id}`}>
      <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

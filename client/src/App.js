import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Switch, Route, Link } from 'react-router-dom';

import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          console.log(`This is the response: `, res)
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movie'>Movie</Link>
        <Link to='/movieList'>Movie List</Link>
      </nav>

      <Switch>
        <Route path="/movie/:movieID">
          <Movie movies={movieList} />
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

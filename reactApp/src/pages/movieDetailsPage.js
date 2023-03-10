import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieComponents/movieDetails/";
import PageTemplate from "../components/movieComponents/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
//import { getMovie } from '../api/movie-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
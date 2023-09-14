import React, { useEffect } from 'react'
import MainSecHeader from './MainSecHeader'
import MovieCard from './MovieCard'
import { useState } from 'react';

const MOVIE_API_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=0edb3f05130ebfedfe4528ec1b02e92b";

// const initialState = {
//   loading: true,
//   movies: [],
//   errorMessage: null
// };

// const reducer = (state, action) => {s
//   switch (action.type) {
//     case "SEARCH_MOVIES_REQUEST":
//       return {
//         ...state,
//         loading: true,
//         errorMessage: null
//       };
//     case "SEARCH_MOVIES_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         movies: action.payload
//       };
//     case "SEARCH_MOVIES_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         errorMessage: action.error
//       };
//     default:
//       return state;
//   }
// };

export default function MainSection() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(movies);
  useEffect(() => {

      const fetchData = async () => {
        try {
          // Perform your asynchronous data fetching here
          const response = await fetch(MOVIE_API_URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setIsLoading(false);
          setMovies(result);
        } catch (error) {
          // Handle the error here
          setError(error);
        }
      }
        fetchData();
  }, []);
  return (
    <section className='px-[80px] pt-12'>
      <MainSecHeader />
      <div className='grid grid-cols-4 gap-[80px] pt-8'>
        <MovieCard error={error} isLoading={isLoading} movies = {movies} />
      </div>
    </section>
  )
}

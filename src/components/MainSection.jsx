import React, { useEffect } from 'react'
import MainSecHeader from './MainSecHeader'
import MovieCard from './MovieCard'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topRatedResult } from '../redux/topRated/topRatedSlice';

const MOVIE_API_URL = "https://api.themoviedb.org/3/tv/top_rated?api_key=0edb3f05130ebfedfe4528ec1b02e92b";

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
  const dispatch = useDispatch();
  const {search} = useSelector(state => state.search)
  const { topRated } = useSelector(state => state.topRated);
  console.log(topRated)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
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
          dispatch(topRatedResult(result.results))
        } catch (error) {
          // Handle the error here
          setError(error);
        }
      }
        fetchData();
  }, [search]);
  return (
    <section className='px-[80px] pt-12'>
      <MainSecHeader />
      <div className='grid grid-cols-4 gap-[80px] pt-8'>
        <MovieCard error={error} isLoading={isLoading} movies = {topRated} />
      </div>
    </section>
  )
}

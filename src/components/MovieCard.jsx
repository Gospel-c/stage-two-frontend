import React from 'react';
import Poster from '../assets/Poster.jpg';
import imdb from '../assets/imdb.svg';
import tomatoes from '../assets/tomatoes.svg';

export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

const MovieCard = ({ movies, error, isLoading }) => {
  console.log(movies, isLoading);

  return (
    <>
      {isLoading && !error ? (
        <span>loading..</span>
      ) : error ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies.results.map((movie) => {
          console.log(movie.original_title);
          return (
            <div className='relative w-[250px]' key={movie.id}>
              <img src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable} alt="movie poster" />
              <p className='text-[12px] leading-[15.62px] py-3 font-[700] text-[#9CA3AF]'>{movie.release_date}</p>
              <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>{movie.title}</p>
              <div className='flex my-4 justify-between'>
                <div className='flex gap-3'>
                  <img src={imdb} alt="imbd image" />
                  <p>{movie.vote_average}/10</p>
                </div>
                <div className='flex gap-3'>
                  <img src={tomatoes} alt="tomatoes image" />
                  <p>97%</p>
                </div>
              </div> 
              <div className='absolute bg-white text-[#666666]'>{movie.media_type}</div>
              <p className='text-[12px] leading-[15.62px] font-[700] text-[#9CA3AF]'>Action, Adventure, Horror</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default MovieCard;

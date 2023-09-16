import React from 'react';
import Poster from '../assets/Poster.jpg';
import imdb from '../assets/imdb.svg';
import tomatoes from '../assets/tomatoes.svg';
import heart from '../assets/Heart.svg';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

const MovieCard = ({ movies, error, isLoading }) => {
  const {search, loading} = useSelector(state => state.search);
  return (
    <>
      {isLoading && !error ? (
        <span className='animate-spin w-[7rem] h-[7rem] rounded-[50%] border-4 border-y-[#be123c] border-[#f3f3f3]'></span>
      ) : error ? (
        <div className="text-center text-red-400">{error}</div>
      ) : loading ? (
          <span className='animate-spin w-[7rem] absolute top-[50%] left-[50%] h-[7rem] rounded-[50%] border-4 border-y-[#be123c] border-[#f3f3f3]'></span>
      ) : search.length === 0 ? (
        movies.map((movie) => {
          return (
            <Link to={`/movies/${movie.id}`} key={movie.id}>

              <div className='relative w-[250px]' key={movie.id}>
                <img src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable} alt="movie poster" />
                <p className='text-[12px] leading-[15.62px] py-3 font-[700] text-[#9CA3AF]'>{movie.original_language} {movie.first_air_date}</p>
                <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>{movie.name}</p>
                <div className='flex my-4 justify-between'>
                  <div className='flex gap-3'>
                    <img src={imdb} alt="imbd image" />
                    <p>{movie.vote_average}/10</p>
                  </div>
                  <div className='flex gap-3'>
                    <img src={tomatoes} alt="tomatoes image" />
                    <p>{movie.popularity}</p>
                  </div>
                </div> 
                <div className='absolute flex justify-center items-center top-2 font-[700] left-2 opacity-50 px-2 py-[3px] rounded-xl w-[74px] bg-white text-[#111827]'>{movie.media_type || "movie"}</div>
                <div className='absolute flex justify-center items-center top-2 right-2 opacity-50 px-2 py-[3px] rounded-[50%] w-[28px] h-[28px] bg-white'>
                <FavoriteBorder />
                </div>
                <p className='text-[12px] leading-[15.62px] font-[700] text-[#9CA3AF]'>Action, Adventure, Horror</p>
              </div>
            </Link>
            
          );
        })
      ) :
        search && (
        search.map((movie) => {
          
          return (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <div className='relative w-[250px]' key={movie.id}>
                <img src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable} alt="movie poster" />
                <p className='text-[12px] leading-[15.62px] py-3 font-[700] text-[#9CA3AF]'>{movie.original_language} {movie.release_date}</p>
                <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>{movie.title}</p>
                <div className='flex my-4 justify-between'>
                  <div className='flex gap-3'>
                    <img src={imdb} alt="imbd image" />
                    <p>{movie.vote_average}/10</p>
                  </div>
                  <div className='flex gap-3'>
                    <img src={tomatoes} alt="tomatoes image" />
                    <p>{movie.popularity}</p>
                  </div>
                </div> 
                <div className='absolute flex justify-center items-center top-2 font-[700] left-2 opacity-50 px-2 py-[3px] rounded-xl w-[74px] bg-white text-[#111827]'>{movie.media_type || "movie"}</div>
                <div className='absolute flex justify-center items-center top-2 right-2 opacity-50 px-2 py-[3px] rounded-[50%] w-[28px] h-[28px] bg-white'>
                <FavoriteBorder />
                </div>
                <p className='text-[12px] leading-[15.62px] font-[700] text-[#9CA3AF]'>Action, Adventure, Horror</p>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};

export default MovieCard;


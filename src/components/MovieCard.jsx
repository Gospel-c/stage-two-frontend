import React from 'react';
import Poster from '../assets/Poster.jpg';
import imdb from '../assets/imdb.svg'
import tomatoes from '../assets/tomatoes.svg'

const MovieCard = () => {
    return (
        <div className='w-[250px]'>
            <img src={Poster} alt="movie poster" />
            <p className='text-[12px] leading-[15.62px] py-3 font-[700] text-[#9CA3AF]'>USA 2016 - current</p>
            <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>Stranger Things</p>
            <div className='flex my-4 justify-between'>
               <div className='flex gap-3'>
                    <img src={imdb} alt="imbd image" />
                    <p>86.0/100</p>
               </div>
               <div className='flex gap-3'>
                    <img src={tomatoes} alt="tomatoes image" />
                    <p>97%</p>
               </div>
            </div> 
            <p className='text-[12px] leading-[15.62px] font-[700] text-[#9CA3AF]'>Action, Adventure, Horror</p>
        </div>
    );
}

export default MovieCard;

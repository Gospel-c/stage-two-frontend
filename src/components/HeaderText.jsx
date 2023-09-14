import React from 'react';
import imdb from '../assets/imdb.svg'
import tomatoes from '../assets/tomatoes.svg'
import play from '../assets/Play.svg'

const HeaderText = () => {
    return (
        <section className='w-[404px] h-[186px] mt-[100px] ml-[80px]'>
            <h1 className="text-[48px] font-[600] leading-[56px]">John Wick 3: Parabellum</h1>
            <div className='flex w-[186px] my-4 justify-between'>
               <div className='flex gap-3'>
                    <img src={imdb} alt="imbd image" />
                    <p>86.0/100</p>
               </div>
               <div className='flex gap-3'>
                    <img src={tomatoes} alt="tomatoes image" />
                    <p>97%</p>
               </div>
            </div> 
            <p className='w-[302px] leading-[18px] text-[14px]'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button className='bg-[#BE123C] flex gap-2 rounded-md w-[169px] items-center mt-4 justify-around py-[6px] px-2'>
                <img src={play} alt="" />
                <p className='font-[600]'>WATCH TRAILER</p>
            </button>
        </section>
    );
}

export default HeaderText;

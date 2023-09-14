import React from 'react';
import tv from '../assets/tv.svg';
import calendar from '../assets/Calendar.svg';
import home from '../assets/Home.svg';
import tvShow from '../assets/TV Show.svg'
import projector from '../assets/Movie Projector.svg'
import logout from '../assets/Logout.svg'

const Sidebar = () => {
    return (
        <div className='w-[226px] flex-initial text-[#666666] py-8 border rounded-r-[45px] border-[#1f1e1e]'>
            <div className='px-4 flex justify-between items-center'>
                <img src={tv} alt="logo" />
                <h1 className='text-[24px] font-[600]'>MovieBox</h1>
            </div>
            <div className='px-4 py-5 flex mt-14 gap-4 items-center'>
                <img src={home} alt="logo" />
                <p className='text-[20px] leading-[30px] font-[200]'>Home</p>
            </div>
            <div className='px-4 py-5 flex gap-4 bg-[#f0d6dc] border border-r-[#BE123C] outline-none items-center'>
                <img src={projector} alt="logo" />
                <p className='text-[20px] text-[#BE123C] leading-[30px] font-[400]'>Movies</p>
            </div>
            <div className='px-4 py-5 flex gap-4 items-center'>
                <img src={tvShow} alt="logo" />
                <p className='text-[20px] leading-[30px] font-[200]'>Tv series</p>
            </div>
            <div className='px-4 py-5 flex gap-4 items-center'>
                <img src={calendar} alt="logo" />
                <p className='text-[20px] leading-[30px] font-[200]'>Calendar</p>
            </div>
            <div className='m-auto my-12 flex justify-center border border-[#be123c] flex-col items-center w-[170px] px-4 pt-6 bg-[#f0d6dc] rounded-xl'>
                <p className='text-[15px] leading-[22.5px] mb-3 text-[#333333]'>Play movie quizes
                    and earn
                    free tickets
                </p>
                <p className='text-[12px] leading-[18px] mb-3 text-[#666666]'>50k people are playing
                    now
                </p>
                <button className='mb-3 w-[100px] border border-[#be123c] rounded-[30px] p-2 text-[12px] text-[#be123c] leading-[18px] bg-[#f3b2c2]'>Start Playing</button>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src={logout} alt="logout" />
                <p className='text-[20px] leading-[30px] font-[600] text-[#666666]'>Log Out</p>
            </div>
        </div>
    );
}

export default Sidebar;

import React, { useEffect, useState } from 'react'
import tv from '../assets/tv.svg';
import menu from '../assets/Menu.svg';
import icon from '../assets/Icon.svg';
export default function Navbar({ search, trigger }) {
  return (
    <nav className='flex justify-around items-center pt-[16px]'>
        <div className='flex justify-between items-center w-[186px] h-[50px]'>
            <img src={tv} alt="logo" />
            <p className='text-[24px] font-[600]'>MovieBox</p>
        </div>
        <div className='flex w-[500px] h-[36px] relative rounded-lg border-solid border-2 border-[#D1D5DB]'>
            <input onChange={trigger} placeholder='What do you want to watch?' className='p-4 outline-none w-[100%] bg-transparent' type="text" />
            <img className='absolute right-4 top-2' onClick={search} src={icon} alt="serach icon" />
        </div>
        <div className='flex items-center justify-between w-[114px] h-[36px]'>
            <p className='font-[600]'>Sign in</p>
            <img src={menu} alt="menu icon" />
        </div>
    </nav>
  )
}

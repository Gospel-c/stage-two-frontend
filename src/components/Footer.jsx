import React from 'react';
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import yt from '../assets/Yt.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-[100px] w-[50%] m-auto'>
            <div className='flex gap-12 mb-4'>
                <img src={fb} alt="facebook icon" />
                <img src={ig} alt="instagram icon" />
                <img src={twitter} alt="twitter icon" />
                <img src={yt} alt="youtube icon" />
            </div>
            <div className='flex gap-12 mb-4'>
                <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>Condition of use</p>
                <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>Privacy & Policy</p>
                <p className='text-[18px] leading-[23.44px] font-[700] text-[#111827]'>Press room</p>
            </div>
            <div className='text-[18px] leading-[23.44px] font-[700] text-[#6B7280]'>© 2023 MovieBox by Adriana Eka Prayudha  </div>
        </div>
    );
}

export default Footer;

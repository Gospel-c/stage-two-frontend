import React from 'react';
import rightIcon from '../assets/Chevron right.svg'

const MainSecHeader = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-[36px] font-bold'>Featured Movie</h1>
            <div className='flex justify-around gap-2 items-center'>
                <p className='font-[400] text-[#BE123C] text-lg'>See more</p>
                <img src={rightIcon} alt="icon" />
            </div>
        </div>
    );
}

export default MainSecHeader;

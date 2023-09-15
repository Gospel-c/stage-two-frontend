import React from 'react';
import rightIcon from '../assets/Chevron right.svg'
import { useSelector } from 'react-redux';

const MainSecHeader = () => {
    const search = useSelector(state => state.search.search);
    let text;
    if (search.length === 0) {
        text = <h1 className='text-[36px] font-bold'>Top Rated Movies</h1>
    } else {
        text = <h1 className='text-[36px] font-bold'>Search Results</h1>
    }
    return (
        <div className='flex items-center justify-between'>
            {text}
            <div className='flex justify-around gap-2 items-center'>
                <p className='font-[400] text-[#BE123C] text-lg'>See more</p>
                <img src={rightIcon} alt="icon" />
            </div>
        </div>
    );
}

export default MainSecHeader;

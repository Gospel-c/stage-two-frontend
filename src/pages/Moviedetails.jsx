import React from 'react';
import Sidebar from '../components/Sidebar';
import Maindetails from '../components/Maindetails';

const Moviedetails = () => {
    return (
        <div className='flex w-[100vw] overflow-hidden'>
            <Sidebar />
            <Maindetails />
        </div>
    );
}

export default Moviedetails;

import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';


const Homepage = () => {
    const {loading} = useSelector(state => state.search);
    
    return (
        <div className='relative'>
            {loading && <div className='z-50 absolute bg-white opacity-75 h-[100vh] w-[100vw]'>
                <span className='animate-spin w-[7rem] absolute top-[40%] left-[45%] h-[7rem] rounded-[50%] border-4 border-y-[#be123c] border-[#f3f3f3]'></span>
            </div>}
            <Header /> 
            <MainSection />
            <Footer /> 
        </div>
    );
}

export default Homepage;

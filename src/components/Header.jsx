import React from 'react'
import poster from '../assets/poster.png'
import Navbar from './Navbar';
import HeaderText from './HeaderText'

export default function Header() {
  return (
    <header 
        className="h-[600px] text-[#D1D5DB]" 
        style={{
            backgroundImage: `url(${poster})`,
        }}
    >
        <Navbar />
        <HeaderText />
    </header>
  )
}

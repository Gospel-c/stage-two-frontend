import React from 'react'
import poster from '../assets/poster.png'
import Navbar from './Navbar';
import HeaderText from './HeaderText'

export default function Header({ trigger, search }) {
  return (
    <header 
        className="h-[600px] text-[#D1D5DB]" 
        style={{
            backgroundImage: `url(${poster})`,
        }}
    >
        <Navbar trigger={trigger} search={search} />
        <HeaderText />
    </header>
  )
}

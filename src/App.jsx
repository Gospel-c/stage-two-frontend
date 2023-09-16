import { useState } from 'react'
import Homepage from './pages/Homepage'
import Moviedetails from './pages/Moviedetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/movie/:id' element={<Moviedetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

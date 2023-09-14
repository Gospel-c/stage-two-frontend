import React from 'react'
import MainSecHeader from './MainSecHeader'
import MovieCard from './MovieCard'

export default function MainSection() {
  return (
    <section className='px-[80px] pt-12'>
      <MainSecHeader />
      <div className='grid grid-cols-4 gap-[80px] pt-8'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  )
}

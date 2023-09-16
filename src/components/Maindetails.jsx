import React from 'react';
import Star from '../assets/Star.svg'
import list from '../assets/List.svg'
import tickets from '../assets/Two Tickets.svg'
import rectangle from '../assets/Rectangle 37.png'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

const Maindetails = () => {
    const { id } = useParams();
    const search = useSelector(state => state.search.search);
    const tRated = useSelector(state => state.topRated.topRated);
    const searchMovie = search.find(movie => movie.id === parseInt(id));
    const tRatedMovie = tRated.find(movie => movie.id === parseInt(id));
    

    if (searchMovie) {
        return (
            <div className='mx-8 mt-6 flex-[4_1_0%]'>
                <div className='h-[449px] mb-6 w-[100%] rounded-3xl'>
                <img className='h-[449px] mb-6 w-[100%] rounded-3xl' src={searchMovie.poster_path ? `${img_300}/${searchMovie.poster_path}` : unavailable} alt="movie poster" />
                </div>
                {/* bottom */}
                <div className='flex gap-4'>
                    <div className='flex-1'>
                        <div className=''>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#404040] text-[23px] whitespace-nowrap leading-[34.5px] font-[700]'>{searchMovie.title} &#46; {searchMovie.release_date} &#46; {searchMovie.original_language} </p>
                                <button className='w-[84px] h-[30px] text-[#B91C1C] rounded-2xl border border-[#F8E7EB]'>{searchMovie.media_type}</button>
                                <button className='w-[84px] h-[30px] text-[#B91C1C] rounded-2xl border border-[#F8E7EB]'>Drama</button>
                            </div>
                            <div className='mt-8'>
                                <p className='leading-7'>
                                    {searchMovie.overview}
                                </p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='mb-8'>Popularity: <span className='text-[#B91C1C]'>{searchMovie.popularity}</span></p>
                            <p className='mb-8'>Vote Count: <span className='text-[#B91C1C]'>{searchMovie.vote_count}</span></p>
                            <p className='mb-8'>Stars: <span className='text-[#B91C1C]'></span></p>
                        </div>
                        <div className='rounded-xl flex items-center border border-[#C7C7C7] h-[50px]'>
                            <div className='h-[100%] w-[253px] text-white flex justify-center items-center bg-[#B91C1C] rounded-xl'>Top rated movie #{searchMovie.id}</div>
                            <p className='ml-4 text-[#333333] font-[500]'>Awards 9 nominations</p>
                        </div>
                    </div>
                    <div className='w-[360px]'>
                        <div>
                            <p className='mb-8 text-[#666666] flex justify-end items-end'><img src={Star} alt="star icon" /><span className='text-[#E8E8E8]'>{searchMovie.vote_average}</span> |10</p>
                        <div className=' mb-2 h-[50px] w-[360px] text-white flex justify-center items-center bg-[#B91C1C] rounded-xl'><img src={tickets} alt="star icon" />See Showtimes</div>
                        <div className='h-[50px] w-[360px] text-white flex justify-center items-center border border-[#b91c1c] bg-[#e4afaf] rounded-xl'><img src={list} alt="star icon" />More watch options</div>
                        </div>
                        <div className='mt-4'><img src={rectangle} alt="" /></div>
                    </div>
                </div>
            </div>
        );
    } else if (tRatedMovie) {
        return (
            <div className='mx-8 mt-6 flex-[4_1_0%]'>
                <div className='h-[449px] mb-6 w-[100%] rounded-3xl'>
                <img className='h-[449px] mb-6 w-[100%] rounded-3xl' src={tRatedMovie.poster_path ? `${img_300}/${tRatedMovie.poster_path}` : unavailable} alt="movie poster" />
                </div>
                {/* bottom */}
                <div className='flex gap-4'>
                    <div className='flex-1'>
                        <div className=''>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#404040] text-[23px] whitespace-nowrap leading-[34.5px] font-[700]'>{tRatedMovie.name} &#46; {tRatedMovie.first_air_date} &#46; {tRatedMovie.original_language} </p>
                                <button className='w-[84px] h-[30px] text-[#B91C1C] rounded-2xl border border-[#F8E7EB]'>Action</button>
                                <button className='w-[84px] h-[30px] text-[#B91C1C] rounded-2xl border border-[#F8E7EB]'>Drama</button>
                            </div>
                            <div className='mt-8'>
                                <p className='leading-7'>
                                    {tRatedMovie.overview}
                                </p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='mb-8'>Popularity: <span className='text-[#B91C1C]'>{tRatedMovie.popularity}</span></p>
                            <p className='mb-8'>Vote Count: <span className='text-[#B91C1C]'>{tRatedMovie.vote_count}</span></p>
                            <p className='mb-8'>Stars: <span className='text-[#B91C1C]'></span></p>
                        </div>
                        <div className='rounded-xl flex items-center border border-[#C7C7C7] h-[50px]'>
                            <div className='h-[100%] w-[253px] text-white flex justify-center items-center bg-[#B91C1C] rounded-xl'>Top rated movie #{tRatedMovie.id}</div>
                            <p className='ml-4 text-[#333333] font-[500]'>Awards 9 nominations</p>
                        </div>
                    </div>
                    <div className='w-[360px]'>
                        <div>
                            <p className='mb-8 text-[#666666] flex justify-end items-end'><img src={Star} alt="star icon" /><span className='text-[#E8E8E8]'>{tRatedMovie.vote_average}</span> |10</p>
                        <div className=' mb-2 h-[50px] w-[360px] text-white flex justify-center items-center bg-[#B91C1C] rounded-xl'><img src={tickets} alt="star icon" />See Showtimes</div>
                        <div className='h-[50px] w-[360px] text-white flex justify-center items-center border border-[#b91c1c] bg-[#e4afaf] rounded-xl'><img src={list} alt="star icon" />More watch options</div>
                        </div>
                        <div className='mt-4'><img src={rectangle} alt="" /></div>
                    </div>
                </div>
            </div>
        );
    } else {

        return (
            <div className='mx-8 mt-6 flex-[3_1_0%]'>
                <div className='h-[449px] rounded-3xl'>
    
                </div>
                {/* bottom */}
                <div className='flex gap-4'>
                    <div className='flex-[3_1_0%]'>
                        <div className=''>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#404040] text-[23px] whitespace-nowrap leading-[34.5px] font-[700]'>Top Gun: Maverick &#46; 2022 &#46; PG-13 &#46; 2h 10m </p>
                                <button className='w-[84px] h-[30px] text-[#B91C1C] rounded-2xl border border-[#F8E7EB]'>Action</button>
                                <button className='w-[84px] h-[30px] text-[#B91C1C] rounded-2xl border border-[#F8E7EB]'>Drama</button>
                            </div>
                            <div className='mt-8'>
                                <p className='leading-7'>
                                    After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                                    but must confront ghosts of his past when he leads TOP GUN's elite graduates
                                    on a mission that demands the ultimate sacrifice from those chosen to fly it.
                                </p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='mb-8'>Director: <span className='text-[#B91C1C]'>Joseph Kosinski</span></p>
                            <p className='mb-8'>Writers: <span className='text-[#B91C1C]'>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                            <p className='mb-8'>Stars: <span className='text-[#B91C1C]'>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                        </div>
                        <div className='rounded-xl flex items-center border border-[#C7C7C7] h-[50px]'>
                            <div className='h-[100%] w-[253px] text-white flex justify-center items-center bg-[#B91C1C] rounded-xl'>Top rated movie #65</div>
                            <p className='ml-4 text-[#333333] font-[500]'>Awards 9 nominations</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <p className='mb-8 text-[#666666] flex justify-end items-end'><img src={Star} alt="star icon" /><span className='text-[#E8E8E8]'>8.5</span> |350k</p>
                        <div className=' mb-2 h-[50px] w-[360px] text-white flex justify-center items-center bg-[#B91C1C] rounded-xl'><img src={tickets} alt="star icon" />See Showtimes</div>
                        <div className='h-[50px] w-[360px] text-white flex justify-center items-center border border-[#b91c1c] bg-[#e4afaf] rounded-xl'><img src={list} alt="star icon" />More watch options</div>
                        </div>
                        <div className='mt-4'><img src={rectangle} alt="" /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Maindetails;

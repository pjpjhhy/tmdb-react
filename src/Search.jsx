import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Search() {

    const navigate = useNavigate()
    const[keyword, setKeyword] = useState()
    const handleClick=()=>{
        navigate(`/searchpage?keyword=${keyword}`)
    }

    const handleChange = (e) =>{
        setKeyword(e.target.value)
    }

  return (
    <div className='w-full flex justify-center'>
        {/* image div */}
        <div className=' relative w-[1450px] h-[400px] bg-cover bg-[center_top_-3rem] flex px-14 py-14 bg-[url(https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F03%2Fmarvel-official-avengers-endgame-plot-synopsis-1-1.jpg?cbr=1&q=90)]'>
            {/* main set container */}
            <div className='w-full pt-5 z-10 h-full flex flex-col justify-between text-white'>
                {/* title */}
                <div className='space-y-2'>
                    <h1 className='text-[48px] font-bold'>Welcome.</h1>
                    <h2 className='text-[32px]'>Milions of movies, TV shows and people to discover. Explore now.</h2>
                </div>
                {/* inputbox */}
                <div className='relative pb-5'>
                    <input 
                    onChange={handleChange}
                    className='w-full bg-slate-100 rounded-full py-3 px-5 text-gray-500 outline-none' 
                    type="text" 
                    placeholder='Search for movie, TV show, person ... ' />
                    <button 
                    onClick={handleClick} 
                    className=' absolute font-bold hover:text-black right-0 bg-gradient-to-r from-[#1BD1AE] to-[#04B7DE] py-3 px-6 rounded-full'>
                        Search
                    </button>
                </div>
            </div>
            {/* absolute virtual div */}
            <div className='absolute top-0 left-0 w-full h-full bg-[#001C32]/75'></div>
            
        </div>
       
    </div>
  )
}

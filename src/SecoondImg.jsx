import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SecoondImg() {

    const navigate = useNavigate()
    const[keyword, setKeyword] = useState()
 
    // const handleClick=()=>{
    //     navigate(`/searchpage?keyword=${keyword}`)
    // }

    const handleChange = (e) =>{
        setKeyword(e.target.value)
    }

  return (
    <div className='w-full flex justify-center'>
    {/* image div */}
    <div className=' relative w-[1450px] h-[400px] bg-cover bg-[center_top_-6rem] flex px-14 py-14 bg-[url(https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/19I6/image/FmyFN-gjA2u95913oeszEsOUMcI.jpg)]'>
        {/* main set container */}
        <div className='w-full z-10 h-full flex flex-col justify-between text-white'>
            {/* title */}
            <div className='space-y-2'>
                <h1 className='text-[45px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#1BD1AE] to-[#04B7DE]'>That's a <br/>Wrap 2023</h1>
                <h2 className='text-[22px]'>The best (and worst) of the year from TMDB.</h2>
                    <div className=' py-8'>
                        <button 
                        // onClick={handleClick} 
                        className=' font-bold border-4 border-white hover:text-black right-0 py-2 px-5 rounded-full'>
                            Check it out →
                        </button>
                    </div>
            </div>
         
              
              
           
        </div>
        {/* absolute virtual div */}
        <div className='absolute top-0 left-0 w-full h-full bg-blue-900/65'></div>
        
    </div>
   
</div>
  )
}

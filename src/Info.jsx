import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useLocation, useParams } from 'react-router-dom'
import CircularProgressBar from './CircularProgressBar'
import changeRuntime from './Changeruntime'
import { IoListSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function Info() {
    const[data, setData] = useState()
    const  {id} = useParams()
    const location = useLocation();
    const type = location.state
        useEffect(()=>{
            const url = `https://api.themoviedb.org/3/${type}/${id}?language=ko`;
            const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGVhN2YwZmQwZTBhMTZlNTUzYzQ3NTUwZDI5MzhlZSIsInN1YiI6IjY1OTc2NTZkODY5ZTc1NmUzYTA3MGZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0A0DXU6o1sit_bwx7Mc27sfDCmZelg-vr-komSAdnuI'
        }
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setData(json)
        })
        .catch(err => console.error('error:' + err));
        },[])
        
  return (
    <Layout>
        <div className=' relative w-full h-[720px] flex justify-center'>
            <div className='absolute w-full h-10 flex justify-center items-center space-x-12 bg-white font-light z-20'>
                <p className='hover:border-b-2 text-black hover:border-blue-400'>개요 ▼</p>
                <p className='hover:border-b-2 text-black hover:border-blue-400'>미디어 ▼</p>
                <p className='hover:border-b-2 text-black hover:border-blue-400'>팬덤 ▼</p>
                <p className='hover:border-b-2 text-black hover:border-blue-400'>공유 ▼</p>
            </div>
            {/* backdrop image */}
            <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
                {data?.backdrop_path ? (
                    <img
                    className='w-full h-full object-center'
                    src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                    alt="backimage"
                    />
                    ) : (
                    <p className='text-white font-bold z-20 pt-[70px] text-xl'>NO BACKDROP IMAGE</p>
                )}
            </div>
            {/* filter div */}
            <div className='absolute flex top-0 left-0 w-full h-full bg-gray-900/65'>
                <div className='w-full h-full flex'>
                    {/* left: image */}
                    <div className='w-2/5 h-full p-10 flex items-center'>
                        {data?.poster_path ? (
                            <img
                            className='w-[480px] h-full object-center'
                            src={`https://image.tmdb.org/t/p/original${data?.poster_path || data?.profile_path}`}
                            alt="mainimage"
                            />
                            ) : (
                            <p className='text-white font-bold text-xl'>NO MAIN IMGAE</p>
                            )}
                    </div>
                    {/* right: info */}
                    <div className='w-3/5 h-full flex flex-col justify-center space-y-4 text-white'>
                        {/* title */}
                       <div className='flex space-x-2'>
                            <h1 className='font-bold text-3xl '>{data?.title || data?.name}</h1>
                            <h2 className=' inline-block text-2xl'>({data?.release_date?.split("-")[0] || data?.first_air_date?.split("-")[0]})</h2>
                       </div>
                       {/* title genre */}
                       <div className='flex space-x-2'>
                            {/* movie day */}
                            <span>{data?.release_date?.replaceAll("-","/") || data?.first_air_date?.replaceAll("-","/") || data?.place_of_birth}</span>
                            {/* Distinguished  */}
                            <span>•</span>
                            {/* genre */}
                            <span className='space-x-1'>
                                {data?.genres?.map(genre=>(
                                    <span key={genre.name}>{genre.name}</span>
                                )) || data?.birthday}
                            </span>
                            {/* runningtime */}
                            <span>
                            <span>{changeRuntime(data?.runtime) || data?.known_for_department}</span>
                            </span>
                       </div>
                            {/* votes */}
                            <div className='flex items-center space-x-14'>
                                <CircularProgressBar  rate={Math.floor(data?.vote_average * 10)}/>
                                <div className='flex space-x-6'>
                                    <div className='flex justify-center items-center text-2xl w-9 h-9 bg-gray-700 rounded-full'>
                                    <IoListSharp />
                                    </div>
                                    <div className='flex justify-center items-center text-xl w-9 h-9 bg-gray-700 rounded-full'>
                                    <FaHeart />
                                    </div>
                                    <div className='flex justify-center items-center text-xl w-9 h-9 bg-gray-700 rounded-full'>
                                    <FaBookmark />
                                    </div>
                                    <div className='flex justify-center items-center text-xl w-9 h-9 bg-gray-700 rounded-full'>
                                    <FaStar />
                                    </div>
                                    <div className='flex justify-center items-center space-x-2'>
                                    <FaPlay /><p className=' hover:opacity-60 text-lg'>Trailer play</p>
                                    </div>
                                </div>
                            </div>
                            {/* tagline */}
                            <div>
                                <span className='font-bold text-2xl opacity-65'>
                                    {data?.tagline}
                                </span>
                            </div>
                            {/* overview */}
                            <div className='w-[75%] h-[200px]'>
                                <span>
                                    {data?.overview}
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

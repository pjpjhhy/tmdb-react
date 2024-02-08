import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


export default function Trending() {
    const [lists, setLists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    let tabs = [
        {id: "all", label: "All"}, 
        {id: "movie", label: "Movies"},  
        {id: "tv", label: "TV"},
    ]

    const [activeTab, setActiveTab] = useState(tabs[0].id)

    useEffect(() => {

        const url = `https://api.themoviedb.org/3/trending/${activeTab}/day?language=ko`;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGVhN2YwZmQwZTBhMTZlNTUzYzQ3NTUwZDI5MzhlZSIsInN1YiI6IjY1OTc2NTZkODY5ZTc1NmUzYTA3MGZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0A0DXU6o1sit_bwx7Mc27sfDCmZelg-vr-komSAdnuI'
            }
        };

            setIsLoading(true)
            fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setLists(json?.results)
                console.log(json?.results)
            })
            .catch(err => console.error('error:' + err));  
            setIsLoading(false)
            }, [activeTab])
            // hi
    return (
        <>
            <div className='flex w-full px-[220px] pt-4'>
                {/* title */}
                <div className="flex">
                    <h2 className="px-4 py-2  text-[24px] font-bold">Trending</h2>
                    {/* tabbar */}
                    <div className="border-2 border-gray-900 rounded-3xl z-20">
                        {tabs.map(tab => (
                            <button 
                            key={tab.id} 
                            onClick={() => setActiveTab(tab.id)} className={`${activeTab === tab.id ? "text-white": "text-black"} 
                            relative rounded-full px-6 py-2.5 text-xl font-semibold transition`}
                            >
                                {activeTab === tab.id && (
                                <motion.span 
                                    layoutId="bubble"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                    className="absolute inset-0 bg-gray-900 rounded-3xl -z-10"
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
    <div className='w-full flex justify-center'>
        <div className='w-[1400px] h-[405px] space-y-6 pt-6 overflow-x-auto'>
            {/* lists */}
            <div className='w-full flex space-x-4'>
                {
                    lists ? lists.map((item, index) => (
                        <div  key={index}  className='w-[210px] h-[290px] flex-shrink-0'>
                            <Link to={`/info/${item.id}`} state={item.media_type} key={item.id}> 
                                <img
                                    className='w-full h-full rounded-xl shadow-lg'
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`}
                                    alt={`Poster`}   />
                                </Link>
                                <div className=' border-2 h-fit border-gray-300 rounded-lg'>
                                    <p className='font-bold text-center'>  {`${((item.title || item.name || '').length > 15) ? (item.title || item.name || '제목 미정').substring(0, 15) + '...' : item.title || item.name || '제목 미정'}`}</p>
                                    <p className='text-center'>{`${item.release_date || item.first_air_date || ''}`}</p>  
                                </div>
                        </div>
                    )) : "아무것도 없음"  
                }
            </div>
        </div>
    </div>
</>
);
}
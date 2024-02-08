import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useLocation, useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import "./Paging.css"
import Pagination from "react-js-pagination";
import CircularProgressBar from "./CircularProgressBar"

export default function SearchPage() {
    // const[data, setData]= useState();
    const location = useLocation();
    const [lists, setLists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[page,setPage] = useState(1);
    const search = new URLSearchParams(location.search)
    const keyword = search.get('keyword')

    
    let tabs = [
        {id: "tv", label: "Tv"},
        {id: "movie", label: "movie"}, 
        {id: "popular", label: "people"},  
        {id: "customservice", label: "customservice"},
    ]

    const [activeTab, setActiveTab] = useState(tabs[0].id)
    
  
    

        useEffect(() => {
            // const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko&page=1`;
            const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=${page}`;
            const options = {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODEzM2QyZmVjZTIxYjdiMTQ3YmVhZTIzMDM3ZGFkZSIsInN1YiI6IjY1OWNhMWRjMjJkZjJlMDFhMjExY2YyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1u5qItr3_otSuCY2UrAYfq4DoRbaTOBf4B6UMBtFR6g",
              },
            };
        
        setIsLoading(true)
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setLists(json)
        })
        .catch(err => console.error('error:' + err));
        setIsLoading(false)
    },[keyword, page])
    const handlePageChange = (page) =>{
        setPage(page)
      }
    console.log(keyword)
  
    return (
    <Layout>
        <div className='w-full h-full flex justify-center py-16'>
            {/* left : searchselect */}
            <div className='w-[22%] h-full  '>
                <div className="border-4 border-gray-900 flex flex-col rounded-3xl z-20 ">
                        {tabs.map(tab => (
                            <button 
                            key={tab.id} 
                            onClick={() => setActiveTab(tab.id)} className={`${activeTab === tab.id ? "text-white": "text-black"} 
                            relative rounded-full px-3 py-3.5 text-xs font-semibold transition `}
                            >
                                {activeTab === tab.id && (
                                <motion.span 
                                    layoutId="bubble"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                    className="absolute inset-0 bg-blue-300 rounded-3xl -z-10"
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>
            </div>
            {/* right: info */}
            <div className='w-[75%] px-6 h-full'>
                <div className='w-full space-y-5'>
                    {/* item */}
                    {lists?.results?.map((list)=>(
                    <div key={list.id} className='w-[1200px] h-[190px]  bg-blue-50 flex  rounded-lg shadow-xl'>
                        {/* top: image */}
                        <div className='w-[20%] h-full '>   
                            {list.poster_path ? (

                            <img
                            className=' h-full rounded-lg relative'
                            src={`https://image.tmdb.org/t/p/w500${list.poster_path || list.profile_path}`}
                            alt="movie"
                            />
                            ) : (
                            <p className=' font-bold'>해당 이미지가 없습니다.</p>
                            )}
                        </div>
                        {/* like  */}
                            <div className='absolute pl-[95px] pt-[143px]'>
                                <CircularProgressBar 
                                rate={Math.floor(list.vote_average*10)}/>
                            </div>
                        {/* right: info */}
                            <div className='relative w-[85%] pr-8 h-full text-black overflow-hidden'>
                                    <h2 className='font-bold text-lg pt-2'>{list.title.substr(0,20)}</h2>
                                    <p className='text-sm pt-2'>{list.overview}</p>
                            </div>
                    </div>

              ))}
                        <div className='w-full flex justify-center'>
                        <Pagination
                        activePage={page}
                        itemsCountPerPage={10}
                        totalItemsCount={lists && lists.total_pages ? lists.total_pages : 0}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        />
                        </div>
                </div>
            </div>
        </div>
        </Layout>
  )
}
